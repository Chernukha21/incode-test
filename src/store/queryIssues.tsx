import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const githubApi = createApi({
    reducerPath: "githubApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/repos/" }),
    endpoints: (builder) => ({
        getRepoDetails: builder.query<{ owner: any;  repository: string; stars: number }, { owner: string; repo: string }>({
            query: ({ owner, repo }) => `${owner}/${repo}`,
            transformResponse: (response: any) => ({
                owner: response.owner,
                repository: response.name,
                stars: response.stargazers_count,
            }),
        }),
    }),
});

export const { useGetRepoDetailsQuery } = githubApi;
