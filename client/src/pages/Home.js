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

  
  const [searchQuery, setSearchQuery] = useState("");
  console.log("products on home page?", products);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  };

  function filtering() {
    if (!products) {
      console.log("no products found ");
    } else {
      const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      return filteredProducts;
    }
  }
  return (
    
    <main>
    {console.log(products)}
      <Cart/>
      <div className="flex-row justify-center ">
        <SearchBar/>
        <Product products={products}/>
      </div>
      
      <h2>Products</h2>
      <SearchBar handleSearchChange={handleSearchChange} />
      <div className="flex-row justify-center">
      </div>

      {products.length ? (
        <div className="flex-row">
          {filtering().map((product) => (
            <Product
              key={product._id}
              // _id={product._id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>No products by that name. Sorry!</h3>
      )}
    </main>
  );
};

export default Home;
