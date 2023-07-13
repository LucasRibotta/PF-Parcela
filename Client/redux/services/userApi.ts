import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface User {
  _id: string
  name: string
  lastname: string
  phone: number
  date: string
  email: string
  password: string
  provider?: string
  accessToken?: string
  isAdmin: boolean
  isCompany: boolean
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/auth"
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], {name: string}>({
      query: ({name}) => ({
        url: `users?name=${name}`,
        method: "GET",
      })
    }),
    deleteUser: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: `/usersDelete/${id}`,
        method: "PUT",
      })
    }),
    updateUser: builder.mutation<User,{ id: string; data: Partial<User> }>({
      query: ({ id, data }) => ({
        url: `updateUser/${id}`,
        method: "PUT",
        body: data
      })
    }),
  })
})

export const { useGetUsersQuery, useDeleteUserMutation, useUpdateUserMutation } = userApi
