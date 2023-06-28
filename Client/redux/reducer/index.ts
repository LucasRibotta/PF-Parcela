interface Parcela {
  id: string
  name: string
  lote: number
  area: number
  price: number
  location: string[]
  image: string
  deleted: boolean
  condominio: String
}

interface ParcelaState {
  parcelas: Parcela[]
  parcelaSeleccionada: Parcela | null
}

interface GetParcelasSuccessAction {
  type: "GET_PARCELAS_SUCCESS"
  payload: Parcela[]
}

interface GetParcelaByIdSuccessAction {
  type: "GET_PARCELA_BY_ID_SUCCESS"
  payload: Parcela
}

interface CreateParcelaSuccessAction {
  type: "CREATE_PARCELA_SUCCESS"
  payload: Parcela
}

interface UpdateParcelaSuccessAction {
  type: "UPDATE_PARCELA_SUCCESS"
  payload: { id: string; data: Partial<Parcela> }
}

interface DeleteParcelaSuccessAction {
  type: "DELETE_PARCELA_SUCCESS"
  payload: { id: string }
}

type ParcelaAction =
  | GetParcelasSuccessAction
  | GetParcelaByIdSuccessAction
  | CreateParcelaSuccessAction
  | UpdateParcelaSuccessAction
  | DeleteParcelaSuccessAction

const initialState: ParcelaState = {
  parcelas: [],
  parcelaSeleccionada: null
}

function parcelaReducer(
  state = initialState,
  action: ParcelaAction
): ParcelaState {
  switch (action.type) {
    case "GET_PARCELAS_SUCCESS":
      return {
        ...state,
        parcelas: action.payload
      }

    case "GET_PARCELA_BY_ID_SUCCESS":
      return {
        ...state,
        parcelaSeleccionada: action.payload
      }

    case "CREATE_PARCELA_SUCCESS":
      return {
        ...state,
        parcelas: [...state.parcelas, action.payload]
      }

    case "UPDATE_PARCELA_SUCCESS":
      return {
        ...state,
        parcelas: state.parcelas.map((parcela) =>
          parcela.id === action.payload.id ? action.payload.data : parcela
        ),
        parcelaSeleccionada:
          state.parcelaSeleccionada?.id === action.payload.id
            ? action.payload.data
            : state.parcelaSeleccionada
      }

    case "DELETE_PARCELA_SUCCESS":
      return {
        ...state,
        parcelas: state.parcelas.filter(
          (parcela) => parcela.id !== action.payload.id
        ),
        parcelaSeleccionada:
          state.parcelaSeleccionada?.id === action.payload.id
            ? null
            : state.parcelaSeleccionada
      }

    default:
      return state
  }
}

export default parcelaReducer
