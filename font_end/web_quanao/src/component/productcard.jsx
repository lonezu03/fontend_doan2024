import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const colors = product.colors?.$values || [];
  const sizes = product.sizes?.$values || [];
  const images = product.images?.$values || [];
  const navigate = useNavigate();

  // Hàm xử lý hình ảnh
  const getImageSrc = (image) => {
    // Nếu URL bắt đầu bằng chuỗi Base64
    if (!image.url.startsWith("data:image")) {
      return `data:image/jpeg;base64,${image.url}`;
    }
    return image.url;
  };
  const handleOnClick = () => {
    navigate(`/chitietsp/${product.id}`);
};
  return (
    <div onClick={handleOnClick} style={{ cursor: 'pointer' }}>
            <h3>{product.name}</h3>
            {/* Các thành phần khác của card */}
       
    <div className="border border-gray-300 rounded-lg p-4 text-center w-72 relative shadow-lg m-2">
      
      {/* Hình ảnh */}
      <div className="my-4">
        {images.length > 0 ? (
          <img
            src={getImageSrc(images[0])} // Chuyển đổi Base64 thành URL hình ảnh
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
      {/* Tên sản phẩm */}
      <h2 className="text-lg font-bold mt-4 mb-2">{product.name}</h2>

      {/* Màu sắc */}
      <div className="flex justify-center mb-2">
        {colors.map((color, index) => (
          <span
            key={index}
            className="w-5 h-5 rounded-full mx-1 border border-gray-300"
            style={{ backgroundColor: color.name }}
          ></span>
        ))}
      </div>

      {/* Kích thước */}
      <p className="text-sm text-gray-600">Sizes: {sizes.map((size) => size.name).join(", ")}</p>

      

      {/* Mô tả */}
      <div>
        <h4 className="text-md font-semibold">Description:</h4>
        <p className="text-sm text-gray-500">{product.description?.content || "No description available"}</p>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
