import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const formSubmit = data => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <div>
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input type="text" {...register('ProductName', { required: 'Need to provide product name first' })} placeholder="Name" className="input mb-2 input-bordered input-success text-sm w-full max-w-xl rounded-sm" />
                {errors.ProductName && <p className='text-red-400 text-xs mt-1'>{errors.ProductName.message}</p>}
            </div>
            <div>
                <label className="label">
                    <span className="label-text">Product Title</span>
                </label>
                <input type="text" {...register('ProductTitle', { required: 'Provide a title' })} placeholder="Title" className="input mb-2 input-bordered input-success text-sm w-full max-w-xl rounded-sm" />
                {errors.ProductTitle && <p className='text-red-400 text-xs mt-1'>{errors.ProductTitle.message}</p>}
            </div>
            <div>
                <label className="label">
                    <span className="label-text">Product Picture</span>
                </label>
                <input {...register('Picture1', { required: 'Provide Picture' })} type="text" placeholder="Picture1" className="input mb-2 input-bordered input-success text-sm w-full max-w-xl rounded-sm" />
                {errors.Picture1 && <p className='text-red-400 text-xs mt-1'>{errors.Picture1.message}</p>}
                <input {...register('Picture2', { required: 'Provide Picture' })} type="text" placeholder="Picture2" className="input mb-2 input-bordered input-success text-sm w-full max-w-xl rounded-sm" />
                {errors.Picture2 && <p className='text-red-400 text-xs mt-1'>{errors.Picture2.message}</p>}
            </div>
            <div className='flex items-center gap-10'>
                <div>
                    <label className="label">
                        <span className="label-text">Product Price</span>
                    </label>
                    <input {...register('Price', { required: 'Provide Price' })} type="number" placeholder="Price" className="input mb-2 input-bordered input-success text-sm w-full max-w-xs rounded-sm" />
                    {errors.Price && <p className='text-red-400 text-xs mt-1'>{errors.Price.message}</p>}
                </div>
                <div>
                    <div className="form-control w-48">
                        <label className="label cursor-pointer">
                            <span className="label-text">Stock Available</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                        </label>
                    </div>
                    <div className="form-control w-48">
                        <label className="label cursor-pointer">
                            <span className="label-text">Stock Out</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-red-500" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Description</span>
                </label>
                <textarea {...register('Description', { required: 'Provide Description' })} className="textarea textarea-success textarea-bordered h-24 w-full max-w-xl rounded-sm" placeholder="Description"></textarea>
                {errors.Description && <p className='text-red-400 text-xs mt-1'>{errors.Description.message}</p>}
            </div>
            <input className='btn btn-outline rounded-sm mt-4' type="submit" value="Submit" />
        </form>
    );
};

export default AddProduct;