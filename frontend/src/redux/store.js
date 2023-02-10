import { configureStore } from '@reduxjs/toolkit';
import isTokenValidReducer from './isTokenValidSlice';
import userReducer from './userSlice';  

export default configureStore({
  reducer: {
    isTokenValid: isTokenValidReducer,
    user: userReducer,
  }
})