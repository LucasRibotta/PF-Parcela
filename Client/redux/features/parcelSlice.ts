import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Parcela {
  name: string
  lote: number|null
  area: number|null
  price: number|null
  location: string
  description: string
  images: string[]
  deleted: boolean
  parcelaData: []
  // Otras propiedades de la parcela
}

interface ParcelasState {
  allParcelas: Parcela[]
  parcelas: Parcela[]
  orderBy: string,
  locationSelected: string
}

const initialState: ParcelasState = {
  allParcelas: [],
  parcelas: [],
  orderBy: "",
  locationSelected: ""
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
    },
    setLocationSelected: (state, action: PayloadAction<string>) => {
      state.locationSelected = action.payload
     },
  }
})

export const { setParcelas, sortParcelas, setLocationSelected } = parcelasSlice.actions

export default parcelasSlice.reducer
