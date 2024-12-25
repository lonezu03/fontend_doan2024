import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunks"

// Async thunk để thêm sản phẩm

const productSlice = createSlice({
  name: 'products',
  initialState: {
    filter: {
      gender: "",
      color: "",
      category: "", 
      price: null     
    },
    items: [], // Danh sách sản phẩm
    status: 'idle', // idle | loading | succeeded | failed
    error: null, // Lỗi nếu có
  },
  reducers: {
    changefilergender: (state, action) => {
      state.filter.gender = action.payload;
    },
    changefilercolor: (state, action) => {
      state.filter.color = action.payload;
    },
    changefilercategory: (state, action) => {
      state.filter.category = action.payload;
    },
    changefilerprice: (state, action) => {
      state.filter.price = action.payload;
    },
    // Xóa bộ lọc
    removeFilter: (state, action) => {
      const { filterType } = action.payload;
      state.filter[filterType] = filterType === "price" ? null : ""; // Đặt giá trị mặc định
    },
    // Reset toàn bộ bộ lọc
    resetFilters: (state) => {
      state.filter = {
        gender: "",
        color: "",
        category: "",
        price: null,
      };
    },
  },
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

export const ProductSlice = productSlice; // Export slice
export const { changefilergender, changefilercolor, changefilercategory, changefilerprice, removeFilter, resetFilters } = productSlice.actions;

export default productSlice.reducer;
