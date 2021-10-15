import React from 'react';
import { useQuery } from '@apollo/client';

import Product from '../components/Product'
import { QUERY_PRODUCTS } from '../utils/queries';

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
        
          <Product 
            products={products}
            />
        
      </div>
    </main>
  );
};

export default Home;
