// features/products/productThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk gọi API để lấy danh sách sản phẩm
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://localhost:5001/api/products');
  return response.data;
});
