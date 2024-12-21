import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const colors = product.colors?.$values || [];
  const sizes = product.sizes?.$values || [];
  const images = product.image || "";
  const navigate = useNavigate();
  //console.log(product)
  // Hàm xử lý hình ảnh

  const handleOnClick = () => {
    //alert(product.id.toString());

    navigate(`/chitietsp/${product.id}`);
  };
  return (
    <div onClick={handleOnClick} style={{ cursor: 'pointer' }}>
      {/* Các thành phần khác của card */}

      <div className="border border-gray-300 rounded-lg p-4 text-center w-72 relative shadow-lg m-2">

        {/* Hình ảnh */}
        <div className="my-4">
          {images.length > 0 ? (
            <img
              src={images} // Chuyển đổi Base64 thành URL hình ảnh
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <p>No image available</p>
          )}
          {<span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">Hot</span>}

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
          {/* <h4 className="text-md font-semibold">Description:</h4>
        <p className="text-sm text-gray-500">{product.description?.content || "No description available"}</p> */}
          <p className="font-bold text-lg">{product.price || "No Price available"} đ</p>
        </div>
        <button className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition duration-300">Add to Cart</button>

      </div>
    </div>
  );
};

export default ProductCard;
