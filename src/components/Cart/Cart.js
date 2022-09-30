import React from 'react';
import './Cart.css';

const Cart = ({cart, handleDelete, handleChoose}) => {

    // console.log(cart) 
    const name = cart.map(name => <li>{name.name}</li>);

    let total = 0;
    for(const item of cart){
        total = total + item.price;
    }

    let shipping = 10;
    if(total >= 1000){
        shipping = 0;
    }
    else if(total >= 100){
        shipping = 7;
    }
    else if(total <= 0){
        shipping = 0;
    }
    else if(total < 50){
        shipping = 10;
    }
   
    const tax = parseFloat((total * 0.1).toFixed());
    const grandTotal = total + tax + shipping;

    return (
        <div className='cart-container'>
            <h5 className='text-center mb-5'>Total Product: <span className='text-danger'>{cart.length}</span></h5> 

            {name} 
            
            <div className="price-box mt-5 shadow">
                <h6><span className=''>Total:</span> ${total}</h6>
                <h6><span className=''>Shipping:</span> ${shipping}</h6>
                <h6><span className=''>Tax:</span> ${tax}</h6>
                <h6><span className=''>Grand Total:</span> ${grandTotal}</h6>
            </div>

            <div className="btn-box mt-5"> 
                <button className=''onClick={() => handleChoose()}>Choose Me</button>
                <button className='' onClick={() => handleDelete()}>Delete All</button>
            </div>
        </div>
    );
};

export default Cart;