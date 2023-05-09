import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addProductData } from '../redux/thunk/products/addProductData';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const formSubmit = (data, e) => {
        const product = {
            ...data,
            status: data.status === "true" ? true : false,
        };

        console.log(product);
        toast.success('New Product Added.', {
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
            },
            iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
            },
        })
        dispatch(addProductData(product))
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
                    <span className="label-text">Product Type</span>
                </label>
                <input type="text" {...register('ProductType', { required: 'Provide a Type' })} placeholder="Type" className="input mb-2 input-bordered input-success text-sm w-full max-w-xl rounded-sm" />
                {errors.ProductType && <p className='text-red-400 text-xs mt-1'>{errors.ProductType.message}</p>}
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
                    <div className="form-control w-48 flex flex-row items-center gap-2">
                        <label className="label cursor-pointer" htmlFor='available'>
                            Available
                        </label>
                        <input
                            type='radio'
                            id='available'
                            value={true}
                            {...register("status")}
                            className="radio checked:bg-blue-500"
                        />
                    </div>
                    <div className="form-control w-48 flex flex-row items-center gap-2">
                        <label className="label cursor-pointer" htmlFor='stockOut'>
                            Stock out
                        </label>
                        <input
                            type='radio'
                            id='stockOut'
                            name='status'
                            value={false}
                            {...register("status")}
                            className="radio checked:bg-red-500"
                        />
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