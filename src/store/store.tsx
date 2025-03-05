import { configureStore } from '@reduxjs/toolkit'
import { githubApi } from "./queryIssues";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer, // Add the API reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(githubApi.middleware), // Add the API middleware
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch