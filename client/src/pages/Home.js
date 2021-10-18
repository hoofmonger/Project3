import React from 'react';
import { useQuery } from '@apollo/client';
import SearchBar from '../components/SearchBar';
import Product from '../components/Product'
import { QUERY_PRODUCTS } from '../utils/queries';
import Cart from '../components/Cart'
const Home = () => {
  
  const { loading, data,error } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) return `Error! ${error}`;

  
  return (
    
    <main>
    {console.log(products)}
      <div className="flex-row justify-center ">
        <SearchBar/>
        <Product products={products}/>
      </div>
      <Cart/>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          </div>
      </div>
    </main>
  );
};

export default Home;
