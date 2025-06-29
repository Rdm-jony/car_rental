import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './baseAPi'
import userReducer from "@/Redux/feature/User/userSlice"


export const store = configureStore({
  reducer: {
    user:userReducer,
    [baseApi.reducerPath]:baseApi.reducer
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch