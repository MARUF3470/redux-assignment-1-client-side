import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/action/productAction';

const Products = ({ product }) => {
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product.Picture1} alt="Shoes" className="rounded-sm" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product.ProductName}</h2>
                <p>{product.ProductTitle}</p>
                <p>{pathname.includes('cart') && <p className='text-red-600'>Quantity: {product.quantity}</p>}</p>
                <p>{product.Description.slice(0, 100)}....</p>
                <div className="card-actions">
                    <Link to={`/product/${product?._id}`} className='btn btn-primary rounded-sm'>Details</Link>
                    {
                        pathname.includes('cart') ? <button onClick={() => dispatch(removeFromCart(product))} className='btn btn-primary rounded-sm'>Remove From Cart</button> : <button onClick={() => dispatch(addToCart(product))} className='btn btn-primary rounded-sm'>Add to cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;