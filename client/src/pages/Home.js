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
      <Cart/>
      <div className="flex-row justify-center ">
        <SearchBar/>
        <Product products={products}/>
      </div>
      
    </main>
  );
};

export default Home;
