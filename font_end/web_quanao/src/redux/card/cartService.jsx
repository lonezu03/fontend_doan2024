import axios from "axios";
import { setCartItems, setLoading, setError } from './cartSlice';

const API_BASE_URL = "http://localhost:5224/api";

export const addToCart = async (variantid, quantity, price, image, color, size,name) => {
  try {
    const token = localStorage.getItem("token");
    
    const response = await axios.post(
      `${API_BASE_URL}/order/add-to-cart`,
      { variantid, quantity, price, image, color, size,name },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);

    return response.data; // Trả về dữ liệu nếu cần
  } catch (error) {
    throw error.response?.data || error.message; 
  }
};


export const fetchCartItems = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(setError("User not logged in."));
      return;
    }

    const response = await axios.get("http://localhost:5224/api/OrderItem/get-order-items", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Chuẩn hóa dữ liệu từ response
    const normalizedItems = response.data.orderItems.$values.map((item) => ({
      id: item.id,
      variantId: item.variant_id,
      quantity: item.quantity,
      price: item.price || 0, 
      image: item.imagesp || "", 
      color: item.color || "Unknown", 
      size: item.size || "Unknown",  
      name: item.name || "Unknown", 
      
    }));

    // Lưu danh sách sản phẩm vào Redux
    dispatch(setCartItems(normalizedItems));
  } catch (error) {
    console.error("Error fetching cart items:", error);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteCartItem = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.delete(
      `${API_BASE_URL}/OrderItem/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data; // Trả về kết quả nếu cần
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateCartItem = async (id, updatedData) => {
  try {
    const token = localStorage.getItem("token");
    //console.log("Payload being sent to API:", updatedData);

    const response = await axios.put(
      `${API_BASE_URL}/OrderItem/${id}`,
      updatedData, 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    return response.data; 
  } catch (error) {
    throw error.response?.data || error.message;
  }
};



