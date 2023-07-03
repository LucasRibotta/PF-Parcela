import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Parcela {
  _id: string
  name: string
  price: number | string | null
  lote: number | null
  area: number | null
  location: string[]
  image: string[]
  deleted: boolean
  parcelaData: string[]
  description: string
}
interface ParcelasState {
  allParcelas: Parcela[]
  parcelas: Parcela[]
}

const initialState: ParcelasState = {
  allParcelas: [],
  parcelas: []
}

const parcelasSlice = createSlice({
  name: "parcelas",
  initialState,
  reducers: {
    setParcelas: (state, action: PayloadAction<Parcela[]>) => {
      state.allParcelas = action.payload
      state.parcelas = action.payload
    },
    sortParcelas: (state, action: PayloadAction<string>) => {
      const orderBy = action.payload
      let sortedParcels: Parcela[]

      if (orderBy === "asc") {
        sortedParcels = [...state.parcelas].sort(
          (a, b) => Number(a.price) - Number(b.price)
        )

        return {
          ...state,
          parcelas: sortedParcels
        }
      } else if (orderBy === "desc") {
        sortedParcels = [...state.parcelas].sort(
          (a, b) => Number(b.price) - Number(a.price)
        )

        return {
          ...state,
          parcelas: sortedParcels
        }
      }
    },
    filterParcelas: (state, action: PayloadAction<string>) => {
      const filtroSuperficie = action.payload
      let filteredParcels: Parcela[]

      if (filtroSuperficie === "5000") {
        filteredParcels = state.allParcelas.filter(
          (parcela) => (parcela.area ?? 0) <= 5000
        )

        return {
          ...state,
          parcelas: filteredParcels
        }
      } else if (filtroSuperficie === "5500") {
        filteredParcels = state.allParcelas.filter(
          (parcela) => (parcela.area ?? 0) > 5000 && (parcela.area ?? 0) <= 5500
        )

        return {
          ...state,
          parcelas: filteredParcels
        }
      } else if (filtroSuperficie === "10000") {
        filteredParcels = state.allParcelas.filter(
          (parcela) =>
            (parcela.area ?? 0) > 5500 && (parcela.area ?? 0) <= 10000
        )

        return {
          ...state,
          parcelas: filteredParcels
        }
      } else if (filtroSuperficie === "10000+") {
        filteredParcels = state.allParcelas.filter(
          (parcela) => (parcela.area ?? 0) > 10000
        )

        return {
          ...state,
          parcelas: filteredParcels
        }
      }
    }
  }
})

export const { setParcelas, sortParcelas, filterParcelas } =
  parcelasSlice.actions

export default parcelasSlice.reducer
