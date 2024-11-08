import  { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const Cart = ({ cartItems }) => {
  const [cart, setCart] = useState(cartItems);
  const [discountCode, setDiscountCode] = useState('');
  const [total, setTotal] = useState(calculateTotal(cart));

  const handleQuantityChange = (id, type) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity = type === 'increment' ? item.quantity + 1 : item.quantity - 1;
        if (newQuantity > 0) {
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    });
    setCart(updatedCart);
    setTotal(calculateTotal(updatedCart));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    setTotal(calculateTotal(updatedCart));
  };

  const applyDiscount = () => {
    if (discountCode === 'DISCOUNT5') {
      setTotal(total * 0.95);
    }
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Cart details */}
      <div className="col-span-2">
        <h2 className="text-xl font-bold mb-4">Cart ({cart.length} items)</h2>
        <div className="border p-4 rounded-lg shadow-md">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="text-left p-2">Product</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Total Price</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                      <div>
                        <p>{item.name}</p>
                        <p className="text-sm text-gray-500">size: {item.size}</p>
                        <div className="flex">
                          {item.colors.map((color, index) => (
                            <span
                              key={index}
                              className="w-4 h-4 rounded-full ml-1"
                              style={{ backgroundColor: color }}
                            ></span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 text-center">${item.price.toFixed(2)}</td>
                  <td className="p-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, 'decrement')}
                        className="px-2 py-1 border rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 'increment')}
                        className="px-2 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">available: {item.available}</p>
                  </td>
                  <td className="p-2 text-center">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="p-2 text-center">
                    <button onClick={() => handleRemoveItem(item.id)} className="text-red-500">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <a href="/shop" className="text-gray-600 flex items-center">
            &lt; Continue shopping
          </a>
        </div>
      </div>

      {/* Order summary */}
      <div className="col-span-1 border p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Order summary</h3>
        <div className="flex justify-between mb-2">
          <p>Sub total</p>
          <p>${total.toFixed(2)}</p>
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
          <p>${total.toFixed(2)}</p>
        </div>
        <p className="text-gray-500 text-sm mt-2">VAT included if applicable</p>

        <div className="mt-4">
          <input
            type="text"
            placeholder="DISCOUNT5"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
          <button onClick={applyDiscount} className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded mt-2 w-full">
            Apply
          </button>
        </div>

        <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded mt-4 w-full">Check out</button>
      </div>
    </div>
  );
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default Cart;
