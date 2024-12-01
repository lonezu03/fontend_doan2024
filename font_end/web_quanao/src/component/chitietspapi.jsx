import React, { useState, useEffect } from "react";
import { FaStar, FaCartPlus, FaHeart, FaShareAlt } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null); // Lưu trữ thông tin sản phẩm
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Lưu lỗi (nếu có)
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams(); // Lấy id từ URL

  console.log("ID from URL trong:", id); // Kiểm tra giá trị id

  const url = `http://localhost:5224/api/product/${id}`;

  // Gọi API để lấy thông tin sản phẩm
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();

        // Chuyển đổi dữ liệu từ API sang định dạng mong muốn
        const formattedProduct = {
          id: data.id,
          name: data.name,
          price: data.price,
          colors: data.colors?.$values.map((color) => ({
            id: color.id,
            name: color.name,
          })),
          sizes: data.sizes?.$values.map((size) => ({
            id: size.id,
            name: size.name,
          })),
          gallery: data.images?.$values.map((image) => image.url),
          description: data.description?.content || "No description available",
          stock: 50, // Dữ liệu giả định, cập nhật nếu API trả về giá trị này
        };

        setProduct(formattedProduct);

        // Đặt giá trị mặc định cho màu sắc và kích thước
        setSelectedColor(formattedProduct.colors[0]);
        setSelectedSize(formattedProduct.sizes[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [url]);

  // Xử lý khi chọn màu sắc
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  // Xử lý thay đổi số lượng
  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Trạng thái tải hoặc lỗi
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Hình ảnh sản phẩm */}
      <div className="image-container">
        <img
          src={product.gallery[0]}
          alt={product.name}
          className="rounded-lg shadow-lg w-full"
        />
        <div className="flex space-x-4 mt-4 w-16 h-16">
          {product.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-16 h-16 max-w-full max-h-full object-cover border border-gray-300 rounded-lg cursor-pointer"
              />
          ))}
        </div>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="product-info">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl text-gray-800 font-bold my-4">${product.price}</p>
        <p className="text-gray-600">{product.description}</p>

        {/* Màu sắc */}
        <div className="mt-4">
          <h3 className="font-bold mb-2">Color</h3>
          <div className="flex space-x-2">
            {product.colors.map((color) => (
              <button
                key={color.id}
                onClick={() => handleColorChange(color)}
                className={`w-8 h-8 rounded-full ${
                  selectedColor === color ? "ring-2 ring-blue-500" : ""
                }`}
                style={{ backgroundColor: color.name.toLowerCase() }}
              ></button>
            ))}
          </div>
        </div>

        {/* Kích thước */}
        <div className="mt-4">
          <h3 className="font-bold mb-2">Size</h3>
          <select
            value={selectedSize?.name}
            onChange={(e) =>
              setSelectedSize(
                product.sizes.find((size) => size.name === e.target.value)
              )
            }
            className="p-2 border border-gray-300 rounded-lg"
          >
            {product.sizes.map((size) => (
              <option key={size.id} value={size.name}>
                {size.name}
              </option>
            ))}
          </select>
        </div>

        {/* Số lượng */}
        <div className="mt-4">
          <h3 className="font-bold mb-2">Quantity</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="px-2 py-1 border rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="px-2 py-1 border rounded"
            >
              +
            </button>
          </div>
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


