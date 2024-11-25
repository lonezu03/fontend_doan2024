import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/products/productThunks';

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {items.map((product) => (
          <li key={product.id}>{product.name}</li> // Thay `name` bằng trường bạn cần
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
