import axios from "axios";

const API_BASE_URL = "http://localhost:5224/api";

export const addToCart = async (variantid, quantity, price) => {
  try {
    const token = localStorage.getItem("token");
    console.log('variantid:', variantid);  // Kiểm tra giá trị variantid
    console.log('quantity:', quantity);    // Kiểm tra giá trị quantity
    console.log('price:', price);          // Kiểm tra giá trị price
    const response = await axios.post(
      `${API_BASE_URL}/order/add-to-cart`,
      { variantid, quantity, price },
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
