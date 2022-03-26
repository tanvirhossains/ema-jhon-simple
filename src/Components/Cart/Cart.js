import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {


    let price = 0
let shipping = 0
    for (const product of cart) {
        price = price + product.price
        shipping = shipping +product.shipping
        // newPrice.push(price)
    }
const tax =( price *0.1).toFixed(2)

const grand =price + shipping + parseFloat(tax)
    console.log(cart)
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Item: {cart.length}</p>
            <p>Total price: ${price}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax} </p>
            <h4>Grand Total $ {grand.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;