import React from 'react';
import { useDispatch } from 'react-redux';
import updatedProductData from '../redux/thunk/products/updateProductData';
const UpdateModal = ({ info, setIsOpen }) => {
    const { setUpdateModal, updateModal } = info
    const dispatch = useDispatch()
    const formSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const ProductName = form.name.value
        const ProductTitle = form.title.value
        const ProductType = form.type.value
        const Picture1 = form.pic1.value
        const Picture2 = form.pic2.value
        const Price = form.price.value
        const Status = form.status.value
        const Description = form.description.value
        const updatedProduct = {
            id: updateModal._id,
            ProductName,
            ProductTitle,
            ProductType,
            Picture1,
            Picture2,
            Description,
            Price,
            Status: Status === 'true' ? true : false
        }

        dispatch(updatedProductData(updatedProduct))
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative rounded-sm">
                    <label onClick={() => setUpdateModal(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-outline absolute right-2 top-2">✕</label>
                    <form onSubmit={formSubmit}>
                        <div>
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={updateModal?.ProductName} placeholder="Name" className="input mb-2 input-bordered input-success text-sm w-full max-w-xl rounded-sm" />

                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Product Title</span>
                            </label>
                            <input type="text" name='title' defaultValue={updateModal?.ProductTitle} placeholder="Title" className="input mb-2 input-bordered input-success text-sm w-full max-w-xl rounded-sm" />

                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Product Type</span>
                            </label>
                            <input type="text" name='type' defaultValue={updateModal?.ProductType} placeholder="Type" className="input mb-2 input-bordered input-success text-sm w-full max-w-xl rounded-sm" />

                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Product Picture</span>
                            </label>
                            <input name='pic1' defaultValue={updateModal?.Picture1} type="text" placeholder="Picture1" className="input mb-2 input-bordered input-success text-sm w-full max-w-xl rounded-sm" />

                            <input name='pic2' defaultValue={updateModal?.Picture2} type="text" placeholder="Picture2" className="input mb-2 input-bordered input-success text-sm w-full max-w-xl rounded-sm" />

                        </div>
                        <div className='flex items-center gap-10'>
                            <div>
                                <label className="label">
                                    <span className="label-text">Product Price</span>
                                </label>
                                <input name='price' defaultValue={updateModal?.Price} type="number" placeholder="Price" className="input mb-2 input-bordered input-success text-sm w-full max-w-xs rounded-sm" />

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
                                        className="radio checked:bg-blue-500"
                                        name='status'
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
                                        className="radio checked:bg-red-500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea name='description' defaultValue={updateModal?.Description} className="textarea textarea-success textarea-bordered h-24 w-full max-w-xl rounded-sm" placeholder="Description"></textarea>
                        </div>
                        <input className='btn btn-outline rounded-sm mt-4' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;