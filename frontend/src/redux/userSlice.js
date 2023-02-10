import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {},
  },
  reducers: {
    setUser: (state, user) => {
      state.value = user;
    },
    resetUser: (state) => {
      state.value = {};
    }
  },
})

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;