import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { loadProductData } from '../redux/thunk/products/fetchProducts';
import UpdateModal from './UpdateModal';

const ProductList = () => {
    const products = useSelector(state => state.product.products)
    const [updateModal, setUpdateModal] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadProductData())
    }, [])
    const info = {
        updateModal,
        setUpdateModal,
    }
    return (
        <div>
            <div className='py-24 bg-slate-100'><h1 className='text-6xl font-extrabold text-slate-900 text-center'>My Products</h1></div>
            <div>
                <div className="overflow-x-auto w-11/12 mx-auto my-10">
                    <table className="table w-full">
                        <thead>
                            <tr >
                                <th className='rounded-none border bg-transparent'>Delete</th>
                                <th className='rounded-none border bg-transparent'>Update</th>
                                <th className='rounded-none border bg-transparent'>Image</th>
                                <th className='border bg-transparent'>Product</th>
                                <th className='border bg-transparent'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => <Product key={product._id} product={product} setUpdateModal={setUpdateModal}></Product>)}
                        </tbody>
                    </table>
                </div>
                <UpdateModal info={info} ></UpdateModal>
            </div>
        </div>
    );
};

export default ProductList;