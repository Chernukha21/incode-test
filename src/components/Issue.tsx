import React from "react";
import {Issue as IssueType} from "../types/types.ts";
import Card from 'react-bootstrap/Card';

interface IssueProps {
    issue: IssueType;
}

function daysSince(dateString: Date): string {
    const givenDate = new Date(dateString);
    const currentDate = new Date();
    const diffInMs = currentDate.getTime() - givenDate.getTime();
    return `${Math.floor(diffInMs / (1000 * 60 * 60 * 24))} days ago`;
}

const Issue: React.FC<IssueProps> = ({issue}) => {
    return (
        <>
            <Card
                key={issue.id}
                text={'dark'}
                className="mb-2 vh-20 h-25 overflow-auto"
                style={{
                    backgroundColor: '#fff',
                    height: "auto",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
            >
                <Card.Body style={{ overflow: "hidden", flex: "1" }}>
                    <Card.Title  style={{
                        fontSize: "16px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}>
                        {issue.title}
                    </Card.Title>
                    <Card.Text as={"div"} style={{display: 'flex', color: "#767C81"}}>
                        <div>
                            <span style={{marginRight: '10px'}}>#{issue.number}</span>
                            <span>{daysSince(issue.created_at)}</span>
                        </div>
                    </Card.Text>
                    <Card.Text as={"div"} style={{display: 'flex', color: "#767C81"}}>
                        <div>
                            <span>Admin {issue.assignee && 'there is no assignee'}</span>
                            <span style={{
                                color: "#73787E",
                                padding: '8px',
                            }}>|</span>
                            <span>Comments: {issue.comments}</span>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>

    );
};

export default Issue;