import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loggedIn: false,
    isAdmin: false,
    userData: null
  },
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
