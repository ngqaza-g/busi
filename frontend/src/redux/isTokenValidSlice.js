import { createSlice } from '@reduxjs/toolkit'

export const isTokenValidSlice = createSlice({
  name: 'isTokenValid',
  initialState: {
    value: false,
  },
  reducers: {
    tokenValid: (state) => {
      state.value = true;
    },
    tokenInvalid: (state) => {
      state.value = false;
    }
  },
})

export const { tokenValid, tokenInvalid } = isTokenValidSlice.actions;

export default isTokenValidSlice.reducer;