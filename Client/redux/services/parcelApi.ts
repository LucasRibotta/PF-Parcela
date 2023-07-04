import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface Parcela {
  _id: string
  name: string
  price: number | string | null
  lote: number | null
  area: number | null
  location: string
  image: string[]
  deleted: boolean
  parcelaData: string[]
  description: string
}

export const parcelApi = createApi({
  reducerPath: "parcelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pf-parcela-production.up.railway.app/api/auth"
  }),
  endpoints: (builder) => ({
    getParcelas: builder.query<Parcela[], string>({
      query: (nombre) => `parcelas?nombre=${nombre}`
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
      Parcela,
      { id: string; data: Partial<Parcela> }
    >({
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
// export const useGetParcelasQuery = parcelApi.endpoints.getParcelas.useQuery
export const {
  useCreateParcelaMutation,
  useDeleteParcelaMutation,
  useGetParcelaByIdQuery,
  useGetParcelasQuery,
  useUpdateParcelaMutation
} = parcelApi
