// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './user/authSlice';
import loginReducer from './user/loginSlice';
import  productReducer   from './products/productSlice';

export const store = configureStore({
  reducer: {
    
    auth: authReducer,
    login: loginReducer,
    products: productReducer,
  },
});
export default store; // Export dưới dạng default export
