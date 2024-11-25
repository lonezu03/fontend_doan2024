import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunks"

// Async thunk để thêm sản phẩm


const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], // Danh sách sản phẩm
    status: 'idle', // idle | loading | succeeded | failed
    error: null, // Lỗi nếu có
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
