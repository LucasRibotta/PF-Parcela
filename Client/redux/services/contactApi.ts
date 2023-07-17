import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface Contactanos {
    firstName: string
    lastName: string
    email: string
    phone: number
    reason: string
    message: string
}


export const contactApi = createApi({
    reducerPath: "contactApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL
    }),
    endpoints: (builder) => ({
        createMessage: builder.mutation<Contactanos, Partial<Contactanos>>({
            query: (messageData) => ({
                url: "message",
                method: "POST",
                body: messageData
            })
        }),
        getMessage: builder.query<Contactanos[], string>({
            query: () => ({
                url: "message",
                method:"GET",
            })
        }),
        updateMessage: builder.mutation<Contactanos, {id: string, data: Partial<Contactanos>}>({
            query: ({id, data}) => ({
                url: `deleteMessage/${id}`,
                method: "PUT",
                body: data,
            })
        }),
        deleteMessage: builder.mutation<Contactanos, { id: string }>({
            query: ({id}) => ({
                url: `deleteMessage/${id}`,
                method: "PUT",
            })
        })
    })
})


export const {
    useCreateMessageMutation,
    useGetMessageQuery,
    useUpdateMessageMutation,
    useDeleteMessageMutation,
} = contactApi
