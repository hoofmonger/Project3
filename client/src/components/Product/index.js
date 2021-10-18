import React from 'react'
                                            

function Product({_id, name, description, price, quantity}) {
    return (
        <li>
          
            <h1>
                {name}
            </h1>
            <h2>
                {description}
            </h2>
            <h3>
                {price + quantity}
            </h3>  
            <a href="/cart">Add to cart</a>
    </li>
    )
}

export default Product
