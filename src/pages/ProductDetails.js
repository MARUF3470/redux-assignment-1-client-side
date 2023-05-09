import React from 'react';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { addToCart } from '../redux/action/productAction';
const ProductDetails = () => {
    const dispatch = useDispatch()
    const product = useLoaderData()
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={product.Picture1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">{product.ProductName}</h1>
                    <p className="py-6 text-xs">{product.Description}</p>
                    <button className="btn btn-primary rounded-sm" onClick={() => dispatch(addToCart(product))}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;