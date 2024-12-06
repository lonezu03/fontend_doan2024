import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setCartItems,removeFromCartThunk,updateCartItemThunk } from "../redux/card/cartSlice";
import { selectCartItems, selectCartLoading, selectCartError } from "../redux/card/cartSelector";
import { FaTrash } from "react-icons/fa";
import { fetchCartItems } from '../redux/card/cartService';

const Cart = () => {
  const dispatch = useDispatch();

  // Lấy dữ liệu từ Redux store
  const cartItems = useSelector(selectCartItems);
  const loading = useSelector(selectCartLoading);
  const error = useSelector(selectCartError);
  console.log(cartItems);
  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  const handleQuantityChange = (id, type) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = type === "increment" ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(1, newQuantity) }; // Đảm bảo quantity >= 1
      }
      return item;
    });
    dispatch(setCartItems(updatedItems));
  };
  const handleSaveItem = (item) => {
    // Thiết lập giá trị mặc định cho các trường nếu không có
    const updatedItem = {
      id: item.id,
      orderId: item.orderId || 0, // Nếu không có orderId, gán mặc định là 0
      inventoryId: item.inventoryId || 0, // Nếu không có inventoryId, gán mặc định là 0
      variant_id: item.variantId || 0, // Nếu không có variantId, gán mặc định là 0
      status: item.status || "string", // Nếu không có status, gán mặc định là "string"
      quantity: item.quantity || 0, // Nếu không có quantity, gán mặc định là 1
      imagesp: item.image || "string", // Nếu không có imagesp, gán mặc định là "string"
      color: item.color || "string", // Nếu không có color, gán mặc định là "Unknown"
      size: item.size || "string", // Nếu không có size, gán mặc định là "Unknown"
      name: item.name || "string", // Nếu không có name, gán mặc định là "No name"
      price: item.price || 0, // Nếu không có price, gán mặc định là 0
    };
  
    // Sau khi cập nhật item, gửi yêu cầu API
    dispatch(updateCartItemThunk({ id: updatedItem.id, updatedData: updatedItem }))
      .unwrap()
      .then(() => {
        alert("Item updated successfully.");
        dispatch(fetchCartItems()); // Lấy lại danh sách sản phẩm mới
      })
      .catch((error) => {
        console.error("Failed to update item:", error);
        alert("Failed to update item. Please try again.");
      });
  };
  const handleRemoveItem = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      dispatch(removeFromCartThunk(id))
        .unwrap()
        .then(() => {
          alert("Item removed successfully.");
          dispatch(fetchCartItems()); // Gọi lại API để lấy danh sách giỏ hàng mới

        })
        .catch((error) => {
          console.error("Failed to remove item:", error);
          alert("Failed to remove item. Please try again.");
        });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const calculateTotal = () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">

    <div className="container mx-auto p-4 col-span-2">
    <h2 className="text-xl font-bold mb-4">Cart ({cartItems.length} items)</h2>

      {/* <h2 className="text-xl font-bold">Your Cart</h2> */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table className="table-auto w-full border-collapse border border-gray-400 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Product</th>
                <th className="border border-gray-300 p-2">Price</th>
                <th className="border border-gray-300 p-2">Quantity</th>
                <th className="border border-gray-300 p-2">Total</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2 flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 mr-2" />
                    <div>
                      <p>{item.name}</p>
                      <div className="flex items-center">
                      <span
                        className="w-4 h-4 rounded-full mr-2"
                        style={{ backgroundColor: item.color }}
                      ></span>
                      <span className="text-sm text-gray-500">Color: {item.color}</span>
                    </div>
                      <p className="text-sm text-gray-500">size: {item.size}</p>

                    </div>
                  </td>
                  <td className="p-2 text-center">${item.price.toFixed(2)}</td>
                  <td className="p-2 text-center">
                    <button onClick={() => handleQuantityChange(item.id, "decrement")}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, "increment")}>+</button>
                  </td>
                  <td className="p-2 text-center">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="p-2 text-center">
                  <button onClick={() => handleSaveItem(item)} className="text-green-500 mr-2">
                        Save
                      </button>
                    <button onClick={() => handleRemoveItem(item.id)} className="text-red-500">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            {/* <p>Total: ${calculateTotal().toFixed(2)}</p> */}
          </div>
        </>
      )}
       
    </div>
    Order summary
       <div className="col-span-1 border p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Order summary</h3>
        <div className="flex justify-between mb-2">
          <p>Sub total</p>
          <p>${calculateTotal().toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Discount</p>
          <p>-</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <p>Total</p>
          {/* <p>${total.toFixed(2)}</p> */}
        </div>
        <p className="text-gray-500 text-sm mt-2">VAT included if applicable</p>

        <div className="mt-4">
          <input
            type="text"
            placeholder="DISCOUNT5"
            // value={discountCode}
            // onChange={(e) => setDiscountCode(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
          {/* <button onClick={applyDiscount} className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded mt-2 w-full">
            Apply
          </button> */}
        </div>

        <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded mt-4 w-full">Check out</button>
      </div>
    </div>
    
  );
};

export default Cart;
