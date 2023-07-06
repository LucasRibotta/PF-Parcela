import { createSlice } from "@reduxjs/toolkit"

interface UserState {
  users: any[]
  loggedIn: boolean
  isAdmin: boolean
  userData: {
    email: string
  } | null
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loggedIn: false,
    isAdmin: false,
    userData: null
  } as UserState,
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.loggedIn = action.payload
    },
    setUserAdmin: (state, action) => {
      state.isAdmin = action.payload
    },
    setUserData: (state, action) => {
      state.userData = action.payload
    },
    setUsersData: (state, action) => {
      state.users = action.payload
    }
  }
})

export const { setUserLoggedIn, setUserAdmin, setUserData, setUsersData } =
  userSlice.actions

export default userSlice.reducer
