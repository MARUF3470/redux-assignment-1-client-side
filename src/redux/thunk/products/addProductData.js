import { addProduct } from "../../action/productAction"

export const addProductData = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch('https://good-gold-bighorn-sheep-hat.cyclic.app/products', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
        const data = await res.json()
        if (data.acknowledge) {
            dispatch(addProduct(
                {
                    ...product,
                    _id: data.insertedId
                }
            ))
        }
    }
}