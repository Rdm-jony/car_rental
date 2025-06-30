// Need to use the React-specific entry point to import createApi
import type { ICar } from '@/Model/car_model'
import type { IUser } from '@/Model/SignUp_model'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export interface IResponse {
    success:boolean;
    message: string;
    data: object
}
export interface IErrorResponse {
  status: number;
  data: {
    message: string;
  };
}

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api',credentials:"include" }),
    endpoints: (build) => ({

        signUp: build.mutation<IResponse, Pick<IUser,'email'|'name'|'password'>>({
            query: (formData) => ({
                url: "/user/create",
                method: "Post",
                body: formData

            })
        }),
        signIn: build.mutation<IResponse, Pick<IUser,'email'|'password'>>({
            query: (formData) => ({
                url: "/user/login",
                method: "Post",
                body: formData

            })
        }),
        getCurrentUser:build.query<IUser,void>({
            query:()=>({
                url:'/user',
                credentials:"include"
            })
        }),
        addCar: build.mutation<ICar, FormData>({
            query: (formData) => ({
                url: "/cars",
                method: "POST",
                body: formData,
            }),
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignUpMutation,useGetCurrentUserQuery,useSignInMutation } = baseApi