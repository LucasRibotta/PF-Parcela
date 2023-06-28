'use client'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface Parcela {
  name: string
  lote: number
  area: number
  price: number
  location: string[]
  image: string
  deleted: boolean
  parcelaData: string[]
}

export const parcelApi = createApi({
  reducerPath: "parcelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/auth/"}),
  endpoints: (builder) => ({
    getParcelas: builder.query<Parcela[], null>({
      query: () => "parcelas"
    }),
    getParcelaById: builder.query<Parcela, { id: string }>({
      query: ({ id }) => `parcelas/${id}`
    }),
    createParcela: builder.mutation<Parcela, Partial<Parcela>>({
      query: (parcelaData) => ({
        url: "parcela",
        method: "POST",
        body: parcelaData
      })
    }),
    updateParcela: builder.mutation<
    Parcela,{ id: string; data: Partial<Parcela> }>({
      query: ({ id, data }) => ({
        url: `updateParcela/${id}`,
        method: "PUT",
        body: data
      })
    }),
    deleteParcela: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: `deleteParcela/${id}`,
        method: "PUT"
      })
    })
  })
})
export const useGetParcelasQuery = parcelApi.endpoints.getParcelas.useQuery
export const {
  useCreateParcelaMutation,
  useDeleteParcelaMutation,
  useGetParcelaByIdQuery,
  //useGetParcelasQuery,
  useUpdateParcelaMutation
} = parcelApi