import { PayloadAction, createSlice } from "@reduxjs/toolkit"


const coordenadaSlice = createSlice({
    name: "coordenada",
    initialState: {
        position: "",
    },
    reducers: {
        setCoordenadaPosition: (state, action: PayloadAction<string>) => {
            state.position = action.payload
        },
    }
})

export const { setCoordenadaPosition } = coordenadaSlice.actions


export default coordenadaSlice.reducer
