import { useState } from 'react';
import { FaStar, FaCartPlus, FaHeart, FaShareAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

const ProductDetails = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const { items, status, error } = useSelector((state) => state.products);
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity((prev) => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Hình ảnh sản phẩm */}
      <div className="image-container">
        <img src={product.image} alt={product.name} className="rounded-lg shadow-lg w-full object-cover" />
        <div className="flex space-x-4 mt-4">
          {product.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Gallery ${index + 1}`}
              className="w-16 h-16 object-cover border border-gray-300 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500"
            />
          ))}
        </div>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="product-info">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-green-600 font-semibold">{product.status}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'} />
            ))}
          </div>
          <span className="text-gray-500">({product.reviews} reviews)</span>
        </div>

        <p className="text-xl text-gray-800 font-bold my-4">${product.price}</p>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>


        {/* Màu sắc */}
        <div className="mt-6">
          <h3 className="font-bold mb-2 text-gray-800">Color</h3>
          <div className="flex space-x-3">
            {product.colors.map((color, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded-full border-2 border-gray-300 ${product.colors[index] === color
                  ? 'ring-2 ring-blue-500'
                  : ''
                  }`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>


        {/* Kích thước */}
        <div className="mt-6">
          <h3 className="font-bold mb-2 text-gray-800">Size</h3>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm"
            value={product.sizes[0]}
            onChange={(e) => console.log(e.target.value)}
          >
            {product.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Số lượng */}
        <div className="mt-6">
          <h3 className="font-bold mb-2 text-gray-800">Quantity</h3>
          <div className="flex items-center space-x-3">
            <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-lg rounded-full flex justify-center items-center shadow">
              −
            </button>
            <span className="text-lg font-semibold">{1}</span>
            <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-lg rounded-full flex justify-center items-center shadow">
              +
            </button>
          </div>
          <p className="mt-2 text-gray-500">Available: {product.stock}</p>
        </div>

        {/* Nút Thêm vào giỏ hàng và Mua ngay */}
        <div className="mt-6 flex space-x-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg shadow-md flex items-center">
            <FaCartPlus className="mr-2" /> Add to Cart
          </button>
          <button className="bg-black hover:bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md">
            Buy Now
          </button>
        </div>

        {/* Tùy chọn thêm */}
        <div className="mt-6 flex space-x-6 text-gray-500">
          <button className="flex items-center hover:text-gray-800">
            <FaHeart className="mr-2" /> Favorite
          </button>
          <button className="flex items-center hover:text-gray-800">
            <FaShareAlt className="mr-2" /> Share
          </button>
        </div>
      </div>
    </div>
  );
};
const sampleProduct = {
  name: "Men's Casual Shirt",
  status: "In Stock",
  rating: 4, // Rating out of 5
  reviews: 25,
  price: 29.99,
  description: "A stylish and comfortable casual shirt perfect for any occasion.",
  stock: 100,
  colors: ["#ff0000", "#00ff00", "#0000ff"], // Red, Green, Blue
  sizes: ["S", "M", "L", "XL"],
  image: "https://example.com/product-image.jpg", // Replace with an actual image URL
  gallery: [
    "https://example.com/product-image-1.jpg",
    "https://example.com/product-image-2.jpg",
    "https://example.com/product-image-3.jpg",
  ],
};
const App = () => {
  return (
    <div>
      <ProductDetails product={sampleProduct} />


    </div>
  );
};
export default App;
