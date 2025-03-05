import {Issue} from "./types/types.ts";

export async function fetchIssues(owner: string, repo: string) {
    let issues:Issue[] = [];
    let page = 1;
    let hasMore = true;
    while (hasMore) {
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/issues?page=${page}&per_page=100`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch issues: ${response.statusText}`);
        }

        const data = await response.json();
        issues = issues.concat(data);
        const linkHeader = response.headers.get('Link');
        if (linkHeader && linkHeader.includes('rel="next"')) {
            page++;
        } else {
            hasMore = false;
        }
    }
    return issues;
}

