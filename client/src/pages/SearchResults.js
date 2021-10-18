import React from "react";
import { useQuery } from "@apollo/client";
import SearchBar from "../components/SearchBar";
import { QUERY_PRODUCTS } from "../utils/queries";
import Product from "../components/Product";

export const SearchResults = () => {
  const { data } = useQuery(QUERY_PRODUCTS);
  const products = data.products || [];
  console.log(products);
  return (
    <main>
      <SearchBar />

      <div className="my-2">
        <h2>Our Products:</h2>
        {products.length ? (
          <div className="flex-row">
            {products.map((product) => (
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
      </div>
    </main>
  );
};

export default SearchResults;
