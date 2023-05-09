import React, { useEffect } from 'react';
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { searchInput, toggleStock, toggleType } from '../redux/action/filterAction';
import { loadProduct } from '../redux/action/productAction';
import { loadProductData } from '../redux/thunk/products/fetchProducts';

const Home = () => {
    const products = useSelector(state => state.product.products)
    console.log(products)
    const filters = useSelector((state) => state.filter.filters)
    const { stock, brands } = filters
    const keyword = useSelector(state => state.filter.keyword)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadProductData())
    }, [])
    const activeClass = 'text-white  bg-indigo-500 border-white';
    let content;
    if (products.length) {
        content = products.map(product => <Products key={product._id} product={product}></Products>)
    }
    if (products.length && keyword) {
        content = products.filter(product => {
            if (keyword) {
                const prouctName = product.ProductName.toUpperCase()
                return prouctName.includes(keyword.toUpperCase())
            }
        }).map(product => <Products key={product._id} product={product}></Products>)
    }
    if (products.length && stock || brands.length) {
        content = products.filter(product => {
            if (stock) {
                return product.status === true
            }
            return product
        }
        ).filter(product => {
            if (brands.length) {
                return brands.includes(product.ProductType)
            }
            return product
        }).map((product) => (
            <Products key={product.model} product={product} />
        ))
    }
    const handleSearch = e => {
        e.preventDefault()
        const keyword = e.target.searchInput.value;
        dispatch(searchInput(keyword))
    }
    return (
        <div className='w-11/12 mx-auto'>
            <form onSubmit={handleSearch} className='relative my-5'>
                <input type="text" name='searchInput' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs rounded-full input-md" />
                <button className="btn btn-ghost btn-circle absolute left-[270px]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </form>
            <div className='flex justify-end my-5'>
                <div className=' flex gap-2'>
                    <button onClick={() => dispatch(toggleStock())} className={`btn btn-xs rounded-sm btn-success ${stock ? activeClass : null} `}>Stock</button>
                    <button onClick={() => dispatch(toggleType('camera'))} className={`btn btn-xs rounded-sm btn-success ${brands.includes('camera') ? activeClass : null} `}>Camera</button>
                    <button onClick={() => dispatch(toggleType('mobile'))} className={`btn btn-xs rounded-sm btn-success ${brands.includes('mobile') ? activeClass : null}`}>Mobile</button>
                    <button onClick={() => dispatch(toggleType('watch'))} className={`btn btn-xs rounded-sm btn-success ${brands.includes('watch') ? activeClass : null}`}>Watch</button>
                </div>
            </div>
            <div className='grid grid-cols-3  gap-3'>
                {
                    content
                }
            </div>
        </div>
    );
};

export default Home;