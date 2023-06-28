import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { userApi } from "./services/userApi"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import userReducer from "./features/userSlice"
import { parcelApi } from "./services/parcelApi"
import parcelReducer from "./features/parcelSlice"

const rootReducer = combineReducers({
  user: userReducer,
  parcel: parcelReducer,
  [userApi.reducerPath]: userApi.reducer,
  [parcelApi.reducerPath]: parcelApi.reducer
  // Agrega más reducers aquí
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(parcelApi.middleware)
      .concat(userApi.middleware)
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
