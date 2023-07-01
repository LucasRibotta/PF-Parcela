import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Parcela {
  // id: string
  name: string
  lote: number
  area: number
  price: number
  location: string[]
  // Otras propiedades de la parcela
}

interface ParcelsState {
  parcels: Parcela[]
  orderBy: string
  locationSelected: string
}

const initialState: ParcelsState = {
  parcels: [],
  orderBy: "",
  locationSelected: ""
}

const parcelSlice = createSlice({
  name: "parcel",
  initialState,
  reducers: {
    setParcels: (state, action: PayloadAction<Parcela[]>) => {
      state.parcels = action.payload
    },
    sortParcels: (state, action: PayloadAction<string>) => {
      const orderBy = action.payload
      if (orderBy === "asc") {
        state.parcels.sort((a, b) => a.price - b.price)
      } else if (orderBy === "desc") {
        state.parcels.sort((a, b) => b.price - a.price)
      }
    },
    setLocationSelected: (state, action: PayloadAction<string>) => {
      state.locationSelected = action.payload
     },
  }
})

export const { setParcels, sortParcels } = parcelSlice.actions

export default parcelSlice.reducer 