import React from 'react';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    const {name, price, img} = product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4><small>Name:</small> {name}</h4>
                <h4><small>Price:</small> ${price}</h4>
            </div>
            <button onClick={() => handleAddToCart(product)} className='product-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;