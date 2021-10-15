import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";

const Product = ({products}) => {
	if (!products.length) {
		return <h3>No products Yet</h3>;
	}
	return (
		<div className="product row align-center">
			{products &&
				products.map((product) => (
					<div key={product._id} className=" mx-auto text-center col-4 ">
						<div className="card-body bg-light p-3 m-2">
							<h4 className="">{product.name}</h4>
						<p className="">${product.price}</p>
						<button className="btn btn-info">Add to Cart</button>
						</div>
						
					</div>
					
				))}
			
		</div>
	);
};

export default Product;
