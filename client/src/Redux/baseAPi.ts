// Need to use the React-specific entry point to import createApi
import type { ICar } from '@/Model/car_model'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (build) => ({
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
// export const { useGetPokemonByNameQuery } = pokemonApi