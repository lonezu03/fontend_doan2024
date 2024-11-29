// import  { useState } from 'react';
// import { FaStar, FaCartPlus, FaHeart, FaShareAlt } from 'react-icons/fa';
// const ProductDetails = ({ product }) => {
//   const [selectedColor, setSelectedColor] = useState(product.colors[0]);
//   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
//   const [quantity, setQuantity] = useState(1);

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   const handleQuantityChange = (type) => {
//     if (type === 'increment') {
//       setQuantity((prev) => prev + 1);
//     } else if (type === 'decrement' && quantity > 1) {
//       setQuantity((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
//       {/* Hình ảnh sản phẩm */}
//       <div className="image-container">
//         <img src={product.image} alt={product.name} className="rounded-lg shadow-lg w-full" />
//         <div className="flex space-x-4 mt-4">
//           {product.gallery.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Product Gallery ${index + 1}`}
//               className="w-16 h-16 object-cover border border-gray-300 rounded-lg cursor-pointer"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Thông tin sản phẩm */}
//       <div className="product-info">
//         <h1 className="text-3xl font-bold">{product.name}</h1>
//         <div className="flex items-center space-x-2 mt-2">
//           <span className="text-green-600">{product.status}</span>
//           <div className="flex text-yellow-400">
//             {[...Array(5)].map((_, i) => (
//               <FaStar key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'} />
//             ))}
//           </div>
//           <span className="text-gray-500">({product.reviews} reviews)</span>
//         </div>

//         <p className="text-xl text-gray-800 font-bold my-4">${product.price}</p>

//         <p className="text-gray-600">{product.description}</p>

//         {/* Màu sắc */}
//         <div className="mt-4">
//           <h3 className="font-bold mb-2">Color</h3>
//           <div className="flex space-x-2">
//             {product.colors.map((color, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleColorChange(color)}
//                 className={`w-8 h-8 rounded-full ${selectedColor === color ? 'ring-2 ring-blue-500' : ''}`}
//                 style={{ backgroundColor: color }}
//               ></button>
//             ))}
//           </div>
//         </div>

//         {/* Kích thước */}
//         <div className="mt-4">
//           <h3 className="font-bold mb-2">Size</h3>
//           <select
//             value={selectedSize}
//             onChange={(e) => setSelectedSize(e.target.value)}
//             className="p-2 border border-gray-300 rounded-lg"
//           >
//             {product.sizes.map((size, index) => (
//               <option key={index} value={size}>
//                 {size}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Số lượng */}
//         <div className="mt-4">
//           <h3 className="font-bold mb-2">Quantity</h3>
//           <div className="flex items-center space-x-2">
//             <button onClick={() => handleQuantityChange('decrement')} className="px-2 py-1 border rounded">
//               -
//             </button>
//             <span>{quantity}</span>
//             <button onClick={() => handleQuantityChange('increment')} className="px-2 py-1 border rounded">
//               +
//             </button>
//           </div>
//           <p className="text-gray-500 mt-2">Available: {product.stock}</p>
//         </div>

//         {/* Nút Thêm vào giỏ hàng và Mua ngay */}
//         <div className="mt-6 flex space-x-4">
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded flex items-center">
//             <FaCartPlus className="mr-2" /> Add to Cart
//           </button>
//           <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded">
//             Buy Now
//           </button>
//         </div>

//         {/* Tùy chọn thêm */}
//         <div className="mt-4 flex space-x-4">
//           <button className="text-gray-500 flex items-center">
//             <FaHeart className="mr-1" /> Favorite
//           </button>
//           <button className="text-gray-500 flex items-center">
//             <FaShareAlt className="mr-1" /> Share
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// const sampleProduct = {
//   name: "Men's Casual Shirt",
//   status: "In Stock",
//   rating: 4, // Rating out of 5
//   reviews: 25,
//   price: 29.99,
//   description: "A stylish and comfortable casual shirt perfect for any occasion.",
//   stock: 100,
//   colors: ["#ff0000", "#00ff00", "#0000ff"], // Red, Green, Blue
//   sizes: ["S", "M", "L", "XL"],
//   image: "https://example.com/product-image.jpg", // Replace with an actual image URL
//   gallery: [
//     "https://example.com/product-image-1.jpg",
//     "https://example.com/product-image-2.jpg",
//     "https://example.com/product-image-3.jpg",
//   ],
// };
// const App = () => {
//   return (
//     <div>
//       <ProductDetails product={sampleProduct} />

      
//     </div>
//   );
// };
// export default App;
import React, { useState } from "react";
import { FaStar, FaCartPlus, FaHeart, FaShareAlt } from "react-icons/fa";

const ProductDetails = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Hình ảnh sản phẩm */}
      <div className="image-container">
        <img src={product.image} alt={product.name} className="rounded-lg shadow-lg w-full" />
        <div className="flex space-x-4 mt-4">
          {product.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Gallery ${index + 1}`}
              className="w-16 h-16 object-cover border border-gray-300 rounded-lg cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="product-info">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-green-600">{product.status}</span>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-300"} />
            ))}
          </div>
          <span className="text-gray-500">({product.reviews} reviews)</span>
        </div>

        <p className="text-xl text-gray-800 font-bold my-4">${product.price}</p>

        <p className="text-gray-600">{product.description}</p>

        {/* Màu sắc */}
        <div className="mt-4">
          <h3 className="font-bold mb-2">Color</h3>
          <div className="flex space-x-2">
            {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => handleColorChange(color)}
                className={`w-8 h-8 rounded-full ${selectedColor === color ? "ring-2 ring-blue-500" : ""}`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>

        {/* Kích thước */}
        <div className="mt-4">
          <h3 className="font-bold mb-2">Size</h3>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
          >
            {product.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Số lượng */}
        <div className="mt-4">
          <h3 className="font-bold mb-2">Quantity</h3>
          <div className="flex items-center space-x-2">
            <button onClick={() => handleQuantityChange("decrement")} className="px-2 py-1 border rounded">
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange("increment")} className="px-2 py-1 border rounded">
              +
            </button>
          </div>
          <p className="text-gray-500 mt-2">Available: {product.stock}</p>
        </div>

        {/* Nút Thêm vào giỏ hàng và Mua ngay */}
        <div className="mt-6 flex space-x-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded flex items-center">
            <FaCartPlus className="mr-2" /> Add to Cart
          </button>
          <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded">
            Buy Now
          </button>
        </div>

        {/* Tùy chọn thêm */}
        <div className="mt-4 flex space-x-4">
          <button className="text-gray-500 flex items-center">
            <FaHeart className="mr-1" /> Favorite
          </button>
          <button className="text-gray-500 flex items-center">
            <FaShareAlt className="mr-1" /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
