import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/products/productThunks';
import ProductCard from './productcard';

const ProductCardList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
    

  }, [dispatch]);
  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="flex flex-wrap justify-center">
      {items.map((product) => (
        <ProductCard key={product.id} product={product}  />
      ))}
    </div>
  );
};

export default ProductCardList;
