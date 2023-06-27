import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { userApi } from "./services/userApi"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer
  // Agrega más reducers aquí
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware)
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
