import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart,deleteCartItem,updateCartItem } from "./cartService";

// Thunk thêm sản phẩm vào giỏ hàng
export const addToCartThunk = createAsyncThunk(
  "cart/addToCart",
  async ({ variantid, quantity, price, image, color, size ,name}, { rejectWithValue }) => {
    try {
      const response = await addToCart(variantid, quantity, price, image, color, size,name);
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
  reducers: {
    setCartItems(state, action) {
      state.items = action.payload; // Cập nhật toàn bộ danh sách giỏ hàng
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCartThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload); // Thêm sản phẩm mới vào giỏ hàng
      })
      .addCase(addToCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Xử lý xóa sản phẩm
      .addCase(removeFromCartThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCartThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload); // Loại bỏ sản phẩm khỏi danh sách
      })
      .addCase(removeFromCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCartItems, setLoading, setError } = cartSlice.actions;

export default cartSlice.reducer;

export const removeFromCartThunk = createAsyncThunk(
  "cart/removeFromCart",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await deleteCartItem(id); // Gọi hàm xóa sản phẩm từ API
      return id; // Trả về ID sản phẩm đã xóa
    } catch (error) {
      dispatch(setError(error.message));
      return rejectWithValue(error.message);
    }
  }
);
export const updateCartItemThunk = createAsyncThunk(
  "cart/updateCartItem",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      //console.log("trong slice truoc khi gui api, id: ", id);
      //console.log("trong slice truoc khi gui api, updatedData: ", updatedData);
      
      const response = await updateCartItem(id, updatedData);
      return { id, ...response }; 
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);