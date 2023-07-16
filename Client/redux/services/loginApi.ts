
import { createApi, fetchBaseQuery }  from "@reduxjs/toolkit/query/react";


interface User {
    email: string;
    password: string;
    accessLevel: number;
    loggedIn: boolean;
    userLogin: string[]
}

export const loginApi = createApi({
    reducerPath: "loginApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_LOCAL
    }),endpoints: (builder) => ({
        getLogin: builder.mutation<User[], null>({
            query: (userLogin) =>  ({
                url: "signin",
                method: "POST",
                body: userLogin
            })

        })
    })
})

export const { useGetLoginMutation } = loginApi
