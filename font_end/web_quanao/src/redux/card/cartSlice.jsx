import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./cartService";

export const addToCartThunk = createAsyncThunk(
  "cart/addToCart",
  async ({ variantid, quantity, price }, { rejectWithValue }) => {
    try {
      const response = await addToCart(variantid, quantity, price);
      return response; // Trả về kết quả thành công
    } catch (error) {
      return rejectWithValue(error); // Trả về lỗi
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCartThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCartThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload); // Cập nhật giỏ hàng
      })
      .addCase(addToCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
