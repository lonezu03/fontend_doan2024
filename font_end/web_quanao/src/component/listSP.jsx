import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/products/productThunks';

const ProductCard = ({ product }) => {
  const { name, image, isOnSale, priceBeforeSale, priceAfterSale, colors } = product;
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  if (status === 'loading') return <p>Loading...</p>;
  //console.log('Items:', items);
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="border border-gray-300 rounded-lg p-4 text-center w-72 relative shadow-lg m-2">
      {/* Hình ảnh sản phẩm */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-auto rounded-lg" />
        {isOnSale && <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">Sale</span>}
      </div>

      {/* Tên sản phẩm */}
      <h2 className="text-lg font-bold mt-4 mb-2">{name}</h2>

      {/* Màu sản phẩm */}
      <div className="flex justify-center mb-4">
        {colors.map((color, index) => (
          <span key={index} className="w-5 h-5 rounded-full mx-1 border border-gray-300" style={{ backgroundColor: color }}></span>
        ))}
      </div>

      {/* Giá bán */}
      <div className="mb-4">
        {isOnSale && <span className="line-through text-gray-500 mr-2">${priceBeforeSale}</span>}
        <span className="font-bold text-lg">${priceAfterSale}</span>
      </div>

      {/* Nút thêm vào giỏ hàng */}
      <button className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition duration-300">Add to Cart</button>
    </div>
  );
};

// Dữ liệu mẫu để hiển thị
const sampleProduct = {
    name: "Stylish Jacket",
    image: "https://via.placeholder.com/300", // Đường dẫn ảnh
    isOnSale: true,
    priceBeforeSale: 100,
    priceAfterSale: 80,
    colors: ['#FF0000', '#00FF00', '#0000FF'] // Màu sắc: Đỏ, Xanh lá, Xanh dương
  };

const App = () => {
  return (
    <div className="App">
      <ProductCard product={sampleProduct} />
    </div>
  );
};

export default App;
