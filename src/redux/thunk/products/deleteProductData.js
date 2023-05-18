import { deleteProduct } from "../../action/productAction"

const deleteProductData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://good-gold-bighorn-sheep-hat.cyclic.app/products/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await res.json()
        console.log(data)
        if (data.acknowledged) {
            dispatch(deleteProduct(id))
        }
    }
}
export default deleteProductData;