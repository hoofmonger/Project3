import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const {
        image,
        name,
        _id,
        price,
        quantity
    } = item;

    const { cart } = state

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
        dispatch({
            type: UPDATE_CART_QUANTITY,
            _id: _id,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
        });
        idbPromise('cart', 'put', {
            ...itemInCart,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
        });
        } else {
        dispatch({
            type: ADD_TO_CART,
            product: { ...item, purchaseQuantity: 1 }
        });
        idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
    }

    return (
        <div className="px-1 py-1 mx-auto text-center col-4">
        <Link to={`/products/${_id}`}>
            <img
            alt={name}
            src={`/images/${image}`}
            />
            <p>{name}</p>
        </Link>
        <div className="">
            <div>{quantity} {pluralize("item", quantity)} in stock</div>
            <span>${price}</span>
        </div>
        <button className="btn btn-info" onClick={addToCart}>Add to cart</button>
        </div>
    );
}

export default ProductItem;