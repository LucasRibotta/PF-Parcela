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
  priceRange: {
    minPrice: number
    maxPrice: number
  } 
}

const initialState: ParcelasState = {
  allParcelas: [],
  parcelas: [],
  priceRange: {
    minPrice: 0,
    maxPrice: 60000000
  }
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
        state.parcelas.sort((a, b) => Number(a.price) - Number(b.price))
      } else if (orderBy === "desc") {
        state.parcelas.sort((a, b) => Number(b.price) - Number(a.price))
      }
    },
    updatePriceRange: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.priceRange.minPrice = action.payload.min;
      state.priceRange.maxPrice = action.payload.max

    },
    filterPrice : (state, action: PayloadAction<{ min: number; max: number }>) => {
        if (state.priceRange) {
          let filteredPriceParcels = state.allParcelas.filter(
           (parcela) => Number(parcela.price) >= state.priceRange.minPrice && Number(parcela.price) <= state.priceRange.maxPrice
           )
         
         return {
           ...state,
           parcelas: filteredPriceParcels
         }
       }
    },
  }
})

export const { setParcelas, sortParcelas, updatePriceRange, filterPrice } = parcelasSlice.actions

export default parcelasSlice.reducer
