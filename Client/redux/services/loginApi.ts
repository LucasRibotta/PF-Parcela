import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface User {
  email: string
  password: string
  accessLevel: number
  loggedIn: boolean
  userLogin: string[]
}

export const loginApi = createApi({
<<<<<<< HEAD
    reducerPath: "loginApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://pf-parcela-production-2bf5.up.railway.app/api/auth/"
    }),endpoints: (builder) => ({
        getLogin: builder.mutation<User[], null>({
            query: (userLogin) =>  ({
                url: "signin",
                method: "POST",
                body: userLogin
            })

        })
=======
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pf-parcela-production-2bf5.up.railway.app/api/auth/"
  }),
  endpoints: (builder) => ({
    getLogin: builder.mutation<User[], null>({
      query: (userLogin) => ({
        url: "signin",
        method: "POST",
        body: userLogin
      })
>>>>>>> b1eccdf681d97df88658d49257ca0affc24c6d57
    })
  })
})

export const { useGetLoginMutation } = loginApi
