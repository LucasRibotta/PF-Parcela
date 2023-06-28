import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import parcelaReducer from "./reducer"

export const reduxStore = createStore(
  parcelaReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
