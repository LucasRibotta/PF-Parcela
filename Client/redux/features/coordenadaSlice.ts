import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import state from "sweetalert/typings/modules/state"

type initialState = {
    position: string
    image: string[]
}

const initialState: initialState = {
    position: "",
    image: []
}

const coordenadaSlice = createSlice({
    name: "coordenada",
    initialState,
    reducers: {
        setCoordenadaPosition: (state, action: PayloadAction<string>) => {
            state.position = action.payload
        },
        setImageCloud: (state, action: PayloadAction<string[]>) => {
            state.image = action.payload
        },
    }
})

export const { setCoordenadaPosition, setImageCloud } = coordenadaSlice.actions


export default coordenadaSlice.reducer
