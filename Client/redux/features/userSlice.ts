import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
  users: any[]
  userData: {
    email: string
    password: string
    name: string
    lastname: string
    image: string
    date: string
    phone: number
    wishes: string[]
  } | null
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    userData: null,
    wishes: [],
  } as UserState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    },
    setUsersData: (state, action) => {
      state.users = action.payload
    },
    addToWishlist: (state, action: PayloadAction<string>) => {
      if (state.userData?.wishes && !state.userData.wishes.includes(action.payload)) {
        state.userData.wishes.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      if (state.userData) {
        state.userData.wishes = state.userData.wishes.filter(id => id !== action.payload);
      }
    },
  }
})

export const { setUserData, setUsersData, addToWishlist, removeFromWishlist } = userSlice.actions

export default userSlice.reducer
