import React, {useEffect, useState} from "react";
import "./App.css";
import {Issue} from "./types/types.ts";
import Column from "./components/Column.tsx";
import {fetchIssues} from "./http.ts";
import CustomForm from "./components/Form.tsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header.tsx";
import {DndContext, DragEndEvent,} from "@dnd-kit/core";
import {findAndRemoveIssue, getIssuesFromStorage, ISSUES, saveIssuesToStorage} from "./helpers/helper.ts";
import Alert from "./components/Alert.tsx";

const App: React.FC = () => {
    const [repoUrl, setRepoUrl] = useState<string>(
        "https://github.com/facebook/react"
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [todoIssues, setTodoIssues] = useState<Issue[]>(() => {
        const storedData = getIssuesFromStorage(repoUrl);
        return storedData?.todo || ISSUES.todo;
    });

    const [inProgressIssues, setInProgressIssues] = useState<Issue[]>(() => {
        const storedData = getIssuesFromStorage(repoUrl);
        return storedData?.inProgress || ISSUES.inProgress;
    });

    const [doneIssues, setDoneIssues] = useState<Issue[]>(() => {
        const storedData = getIssuesFromStorage(repoUrl);
        return storedData?.done || ISSUES.done;
    });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        if (repoUrl) {
            saveIssuesToStorage(repoUrl, {
                todo: todoIssues,
                inProgress: inProgressIssues,
                done: doneIssues
            });
        }
    }, [todoIssues, inProgressIssues, doneIssues, repoUrl]);

    async function loadIssues(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const trimmedUrl = repoUrl.trim();

        if (!trimmedUrl) {
            setErrorMessage("Please enter a GitHub Repo URL");
            setRepoUrl('');
            return;
        }

        const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);

        if (!match) {
            setErrorMessage("Invalid GitHub Repo URL");
            return;
        }

        const [, owner, repo] = match;

        const repoKey = `${owner}/${repo}`;

        const storedIssues = getIssuesFromStorage(repoKey);

        if (storedIssues) {
            setTodoIssues(storedIssues.todo);
            setInProgressIssues(storedIssues.inProgress);
            setDoneIssues(storedIssues.done);
            return;
        }

        setIsLoading(true);
        setErrorMessage(null);


        try {
            const issuesData: Issue[] = await fetchIssues(owner, repo);
            const todo = issuesData.filter((issue) => !issue.assignee && issue.state === "open");
            const inProgress = issuesData.filter((issue) => issue.assignee && issue.state === "open");
            const done = issuesData.filter((issue) => issue.state === "closed");
            setTodoIssues(todo);
            setInProgressIssues(inProgress);
            setDoneIssues(done);
            saveIssuesToStorage(repoKey, { todo, inProgress, done });
        }catch (error){
            console.error("Failed to fetch issues:", error);
            setErrorMessage("Failed to load issues.");
        }finally {
            setIsLoading(false);
        }
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over) return;

        const issueId = active.id;
        const newState = over.id as string;

        let movedIssue: Issue | null = null;

        movedIssue = findAndRemoveIssue(todoIssues, setTodoIssues, issueId) ||
                     findAndRemoveIssue(inProgressIssues, setInProgressIssues, issueId) ||
                     findAndRemoveIssue(doneIssues, setDoneIssues, issueId);

        if (movedIssue) {
            movedIssue.state = newState;
            if (newState === "todo") {
                setTodoIssues((prev) => {
                    const newIssues = [...prev, movedIssue];
                    saveIssuesToStorage(repoUrl, { todo: newIssues, inProgress: inProgressIssues, done: doneIssues });
                    return newIssues;
                });
            } else if (newState === "inProgress") {
                setInProgressIssues((prev) => {
                    const newIssues = [...prev, movedIssue];
                    saveIssuesToStorage(repoUrl, { todo: todoIssues, inProgress: newIssues, done: doneIssues });
                    return newIssues;
                });
            } else if (newState === "done") {
                setDoneIssues((prev) => {
                    const newIssues = [...prev, movedIssue];
                    saveIssuesToStorage(repoUrl, { todo: todoIssues, inProgress: inProgressIssues, done: newIssues });
                    return newIssues;
                });
            }
        }
    };


    return (
        <DndContext
            onDragEnd={handleDragEnd}
        >
            <Container className="my-3 p-3">
                {errorMessage && <Alert  textInAlert={errorMessage} />}
                <CustomForm
                    id="repoInput"
                    value={repoUrl}
                    handleInputChange={(e) => setRepoUrl(e.target.value)}
                    isLoading={isLoading}
                    onLoadIssues={loadIssues}
                />
                <Header/>
                <Row>
                    <Col md={4}>
                        <Column id={"todo"} title="ToDo" issues={todoIssues}/>
                    </Col>
                    <Col md={4}>
                        <Column id={"inProgress"} title="In Progress" issues={inProgressIssues}/>
                    </Col>
                    <Col md={4}>
                        <Column id={"done"} title="Done" issues={doneIssues}/>
                    </Col>
                </Row>
            </Container>
        </DndContext>
    );
};

export default App;
