import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart }) => {
// const {product,addToCart } =props


console.log(product)
    return (
        <div className='product'>
            <img src={product.img} alt="" />

            <div className="product-info">
                <p className='pd-name'>name:{product.name}</p>
                <p>Price: {product.price} $</p>
                <p className='brand'><small> Brand: {product.seller} </small></p>
                <p className='rating'> <small> Ratings: {product.ratings} star </small></p>
                <button onClick={()=> handleAddToCart(product)}> <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;