// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './user/authSlice';
import loginReducer from './user/loginSlice';
import  productReducer   from './products/productSlice';
import cartReducer from './card/cartSlice';

export const store = configureStore({
  reducer: {
    
    auth: authReducer,
    login: loginReducer,
    products: productReducer,
    cart: cartReducer,

  },
});
export default store; // Export dưới dạng default export
