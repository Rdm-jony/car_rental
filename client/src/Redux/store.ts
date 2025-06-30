import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './baseAPi'
import userReducer from "@/Redux/feature/User/userSlice"
import bookingReducer from "@/Redux/feature/Booking/bookingSlice"


export const store = configureStore({
  reducer: {
    user:userReducer,
    booking:bookingReducer,
    [baseApi.reducerPath]:baseApi.reducer
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch