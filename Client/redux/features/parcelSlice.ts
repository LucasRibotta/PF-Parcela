import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchParcelas = createAsyncThunk(
  "parcel/fetchParcelas",
  async () => {
    const response = await axios.get("http://localhost:3001/api/auth/parcelas")
    return response.data
  }
)
interface Parcela {
  id: string
  name: string
  lote: number
  area: number
  price: number
  location: string[]
  image: string
  deleted: boolean
}

interface ParcelaState {
  data: Parcela[] | null
  isLoading: boolean
  isError: boolean
  error: string | null
}
const initialState: ParcelaState = {
  data: null,
  isLoading: false,
  isError: false,
  error: null
}

const parcelSlice = createSlice({
  name: "parcel",
  initialState,
  reducers: {
    setParcelData: (state, action: PayloadAction<Parcela[]>) => {
      state.data = action.payload ?? null
    },
    setParcelLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setParcelError: (state, action: PayloadAction<string | null>) => {
      state.isError = action.payload !== null
      state.error = action.payload
    }
  }
})

export default parcelSlice.reducer
