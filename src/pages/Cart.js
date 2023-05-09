import React from 'react';
import { useSelector } from 'react-redux';
import Products from './Products';

const Cart = () => {
    const cart = useSelector((state) => state.product.cart)
    return (
        <div className='grid grid-cols-3 gap-3 w-11/12 mx-auto'>
            {
                cart?.map(product => <Products key={product._id} product={product}></Products>)
            }
        </div>
    );
};

export default Cart;