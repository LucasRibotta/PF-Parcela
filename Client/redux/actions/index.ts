import axios from "axios"
import { Dispatch } from "redux"

export function getParcelas() {
  return async function (dispatch: Dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/auth/parcelas")
      console.log(data)

      return dispatch({
        type: "GET_PARCELAS_SUCCESS",
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// export function getParcelaById(id: string) {
//   return async function (dispatch: Dispatch) {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:3001/api/auth/parcelas/${id}`
//       )

//       return dispatch({
//         type: "GET_PARCELA_BY_ID_SUCCESS",
//         payload: data
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

// export function createParcela(parcelaData: any) {
//   return async function (dispatch: Dispatch) {
//     try {
//       const { data } = await axios.post(
//         "http://localhost:3001/api/auth/parcela",
//         parcelaData
//       )

//       return dispatch({
//         type: "CREATE_PARCELA_SUCCESS",
//         payload: data
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

// export function updateParcela(id: string, parcelaData: any) {
//   return async function (dispatch: Dispatch) {
//     try {
//       const { data } = await axios.put(
//         `http://localhost:3001/api/auth/updateParcela/${id}`,
//         parcelaData
//       )

//       return dispatch({
//         type: "UPDATE_PARCELA_SUCCESS",
//         payload: {
//           id,
//           data
//         }
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

// export function deleteParcela(id: string) {
//   return async function (dispatch: Dispatch) {
//     try {
//       await axios.put(`http://localhost:3001/api/auth/deleteParcela/${id}`)

//       return dispatch({
//         type: "DELETE_PARCELA_SUCCESS",
//         payload: {
//           id
//         }
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }
