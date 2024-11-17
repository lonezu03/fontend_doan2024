// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/productSlice';
import authReducer from './user/authSlice';
export const store = configureStore({
  reducer: {
    products: productReducer,
    // Thêm các reducer khác nếu có
    auth: authReducer,
  },
});
export default store; // Export dưới dạng default export
