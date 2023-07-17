import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface User {
  _id: string
  name: string
  lastname: string
  phone: number
  date: string
  email: string
  image: string
  password: string
  provider?: string
  accessToken?: string
  isAdmin: boolean
  isCompany: boolean
  image: string
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
<<<<<<< HEAD
    baseUrl: "https://pf-parcela-production-2bf5.up.railway.app/api/auth/"
=======
    baseUrl: process.env.NEXT_PUBLIC_URL
>>>>>>> b1eccdf681d97df88658d49257ca0affc24c6d57
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], { name: string }>({
      query: ({ name }) => ({
        url: `users?name=${name}`,
        method: "GET"
      })
    }),
    deleteUser: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: `/usersDelete/${id}`,
        method: "PUT"
      })
    }),
    updateUser: builder.mutation<User, { id: string; data: Partial<User> }>({
      query: ({ id, data }) => ({
        url: `updateUser/${id}`,
        method: "PUT",
        body: data
      })
    })
  })
})

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation
} = userApi
