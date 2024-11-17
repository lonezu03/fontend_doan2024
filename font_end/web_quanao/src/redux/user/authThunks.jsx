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
