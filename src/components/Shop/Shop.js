import React, { useEffect, useState } from 'react' 
import './Shop.css';
import fakeData from '../../fakeData.json';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([]); 
    const [cart, setCart] = useState([]); 

    useEffect( () => {
        setProducts(fakeData);
    } ,[]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const handleDelete = () => {
        setCart([]);
    }


    const handleChoose = () => { 

        let index = parseFloat((Math.abs(Math.random()*cart.length -1)).toFixed());
        if(index < 0){
            index = parseFloat((Math.abs(Math.random()*cart.length -1)).toFixed());
        } 

        for(let i = 0; i < cart.length; i++){ 
            if(i === index){  
                const newOne = cart[i];   
                const newItem = cart.find(p => p.id === newOne.id); 
                setCart([newItem]);
            }
        } 
    }

  return (
    <div className='shop-container '> 
    
        <div className="products">
            {
                products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
            }
        </div>

        <div className="cart p-2">
          <h1 className='text-center text-success'>Calculation</h1>
          <Cart cart={cart} handleDelete={handleDelete} handleChoose={handleChoose}></Cart>
        </div>
    </div>
  )
}

export default Shop