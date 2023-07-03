import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Parcela {
  _id: string
  name: string
  lote: number|null
  area: number|null
  price: number|null
  location: string
  description: string
  image: string[]
  deleted: boolean
  parcelaData: []
  // Otras propiedades de la parcela
}

interface ParcelasState {
  allParcelas: Parcela[]
  parcelas: Parcela[]
}

const initialState: ParcelasState = {
  allParcelas: [],
  parcelas: [],
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
      if (orderBy === "asc") {
        state.parcelas.sort((a, b) => (a.price ?? 0) - (b.price ?? 0))
      } else if (orderBy === "desc") {
        state.parcelas.sort((a, b) => (b.price ?? 0) - (a.price ?? 0))
      }
    },
  }
})

export const { setParcelas, sortParcelas } = parcelasSlice.actions

export default parcelasSlice.reducer
