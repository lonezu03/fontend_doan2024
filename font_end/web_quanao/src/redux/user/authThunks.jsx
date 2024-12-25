import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk xử lý logic đăng ký
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5224/api/users/register', userData); // URL backend
      console.log("User registered successfully:", response.data);
      alert('User registered successfully')
      return response.data;
    } catch (error) {
        console.error("Error registering user:", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5224/api/users/login', {
        email,
        password,
      });
      return response.data; // Trả về dữ liệu (token, user)
    } catch (error) {
      console.error("Error login user:", error);
      const errorMessage = error.response?.data || 'Đăng nhập thất bại. Vui lòng thử lại.';

      return rejectWithValue(errorMessage);
    }
  }
);
