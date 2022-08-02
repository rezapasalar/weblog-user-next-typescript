import { configureStore } from '@reduxjs/toolkit'

import globalReducer from './slices/global'
import articlesReducer from './slices/articles'

export const store = configureStore({
    reducer: {
        global: globalReducer,
        articles: articlesReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch