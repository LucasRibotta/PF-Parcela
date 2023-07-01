import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Parcela {
  id: string
  name: string
  price: number
  // Otras propiedades de la parcela
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
      if (orderBy === "asc") {
        state.parcelas.sort((a, b) => a.price - b.price)
      } else if (orderBy === "desc") {
        state.parcelas.sort((a, b) => b.price - a.price)
      }
    }
  }
})

export const { setParcelas, sortParcelas } = parcelasSlice.actions

export default parcelasSlice.reducer
