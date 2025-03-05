import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import { fetchIssues } from "./http";
import { DndContext } from "@dnd-kit/core";

jest.mock("../http", () => ({
    fetchIssues: jest.fn(),
}));

describe("App Component", () => {
    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    test("renders without crashing", () => {
        render(<App />);
        expect(screen.getByText(/ToDo/i)).toBeInTheDocument();
    });

    test("displays an error when the URL is invalid", () => {
        render(<App />);

        const input = screen.getByPlaceholderText("Enter GitHub Repo URL");
        const button = screen.getByText("Load");

        fireEvent.change(input, { target: { value: "invalid-url" } });
        fireEvent.click(button);

        expect(screen.getByText("Invalid GitHub Repo URL")).toBeInTheDocument();
    });

    test("fetches and displays issues on valid input", async () => {
        const mockIssues = [
            { id: 1, title: "Issue 1", number: 101, state: "open", assignee: null, created_at: "2024-01-01", comments: 2 },
            { id: 2, title: "Issue 2", number: 102, state: "closed", assignee: "user1", created_at: "2024-01-02", comments: 1 },
        ];

        fetchIssues.mockResolvedValue(mockIssues);

        render(<App />);

        const input = screen.getByPlaceholderText("Enter GitHub Repo URL");
        fireEvent.change(input, { target: { value: "https://github.com/test/repo" } });
        fireEvent.click(screen.getByText("Load"));

        await waitFor(() => {
            expect(fetchIssues).toHaveBeenCalledWith("test", "repo");
            expect(screen.getByText("Issue 1")).toBeInTheDocument();
            expect(screen.getByText("Issue 2")).toBeInTheDocument();
        });
    });

    test("saves and loads issues from localStorage", () => {
        const mockStorage = {
            todo: [{ id: 1, title: "Saved Issue", number: 100 }],
            inProgress: [],
            done: []
        };

        localStorage.setItem("https://github.com/test/repo", JSON.stringify(mockStorage));

        render(<App />);

        expect(screen.getByText("Saved Issue")).toBeInTheDocument();
    });

    test("allows drag-and-drop between columns", async () => {
        render(
            <DndContext>
                <App />
            </DndContext>
        );

        const issue = screen.getByText("Issue 1");
        fireEvent.dragStart(issue);
        fireEvent.drop(screen.getByText("In Progress"));

        await waitFor(() => {
            expect(screen.getByText("Issue 1")).toBeInTheDocument();
        });
    });
});
