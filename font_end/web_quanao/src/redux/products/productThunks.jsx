// features/products/productThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk gọi API để lấy danh sách sản phẩm
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_,{rejectWithValue}) => {
    try {
      const response = await axios.get('http://localhost:5224/api/product/GetAllWithVariants'); // Thay đường dẫn API cho đúng
      return response.data.$values;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

