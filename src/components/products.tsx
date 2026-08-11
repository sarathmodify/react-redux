import {useAppDispatch, useAppSelector} from '../app/reduxHooks';
import {useEffect} from 'react';
import {fetchProducts} from '../features/products/productSlice';


export const Products = () => {
  const dispatch = useAppDispatch();
  const {products} = useAppSelector((state) => state.products); // state hold the entire redux state.

//   console.log('Products:', products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
      <ul>  
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};