import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, UPDATE_CART_QUANTITY,UPDATE_PRODUCTS } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';

const Product = (item) => {
	// if (!item.length) {
	// 	return <h3>No products Yet</h3>;
	// }
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	const { currentCategory } = state;

	const { loading, data } = useQuery(QUERY_PRODUCTS);

	useEffect(() => {
		if (data) {
		  dispatch({
			type: UPDATE_PRODUCTS,
			products: data.products,
		  });
		  data.products.forEach((product) => {
			idbPromise('products', 'put', product);
		  });
		} else if (!loading) {
		  idbPromise('products', 'get').then((products) => {
			dispatch({
			  type: UPDATE_PRODUCTS,
			  products: products,
			});
		  });
		}
	  }, [data, loading, dispatch]);
	
	  function filterProducts() {
		if (!currentCategory) {
		  return state.products;
		}
	
		return state.products.filter(
		  (product) => product.category._id === currentCategory
		);
	  }
	
	  return (
		<div className="my-2">
		  <h2>Our Products:</h2>
		  {state.products.length ? (
			<div className="flex-row">
			  {filterProducts().map((product) => (
				<ProductItem
				  key={product._id}
				  _id={product._id}
				  image={product.image}
				  name={product.name}
				  price={product.price}
				  quantity={product.quantity}
				/>
			  ))}
			</div>
		  ) : (
			<h3>You haven't added any products yet!</h3>
		  )}
		  {loading ? <img src="some" alt="loading" /> : null}
		</div>
	  );
	}
	
	export default Product;
	