import {ChangeEvent, FormEvent} from 'react';


export type Issue = {
    title: string,
    number: number,
    id: number,
    state: string,
    created_at: Date,
    author: string,
    assignee: null | Assignee,
    comments: number
}

export type FetchError = {
    message: string;
}

export type IssuesType = {
    todo: Issue[],
    inProgress: Issue[],
    done: Issue[],

}

export type Assignee = {
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
};

export type FormPropsType = {
    id: string;
    value: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isLoading: boolean;
    onLoadIssues: (e: FormEvent<HTMLFormElement>) => Promise<void>;
};