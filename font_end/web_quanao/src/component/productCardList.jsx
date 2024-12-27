import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/products/productThunks';
import ProductCard from './productcard';
import { filterproduct } from "../redux/products/productSelectors";

const ProductCardList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterproduct);

  const { items, status, error } = useSelector((state) => state.products);

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // 4 sản phẩm x 3 hàng

  // Tính toán sản phẩm hiển thị
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = items.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(items.length / productsPerPage);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Hiển thị sản phẩm trong lưới */}
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        {currentProducts?.filter((el) => el?.category.name.includes(filter.category))
          .filter((el) => el?.gendero?.name.includes(filter.gender))
          .filter((el) => filter.price?.max ? el?.price <= filter.price.max : true) // Lọc theo max
          .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Hiển thị nút phân trang */}
      <div className="mt-4 flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCardList;
