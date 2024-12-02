import axios from "axios";

const API_BASE_URL = "http://localhost:5224/api";

export const addToCart = async (variantId, quantity, price) => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    const response = await axios.post(
      `${API_BASE_URL}/order/add-to-cart`,
      { variantId, quantity, price },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);

    return response.data; // Trả về dữ liệu nếu cần
  } catch (error) {
    throw error.response?.data || error.message; // Xử lý lỗi
  }
};
