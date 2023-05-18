import React from 'react';
import { useDispatch } from 'react-redux';
import deleteProductData from '../redux/thunk/products/deleteProductData';

const Product = ({ product, setUpdateModal, setIsOpen }) => {
    const dispatch = useDispatch()
    const handleModal = () => {
        setUpdateModal(product)
        setIsOpen(true)
    }
    return (
        <tr className='h-40'>
            <th className='border'>
                <button onClick={() => dispatch(deleteProductData(product._id))} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <th className='border'>
                <label onClick={handleModal} htmlFor="my-modal-3" className="btn btn-xs btn-primary rounded-sm">open modal</label>
            </th>
            <td className='border'>
                <div>
                    <img className='w-40 mx-auto' src={product?.Picture1} alt='' />
                </div>
            </td>
            <td className='border'>
                {product.ProductName}
                <br />
                <span className="badge badge-ghost badge-sm">{product?.ProductType}</span>
            </td>
            <td className='border'>{product?.Price}$</td>
        </tr>
    );
};

export default Product;