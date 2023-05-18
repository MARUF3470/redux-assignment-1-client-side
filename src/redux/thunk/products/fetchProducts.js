import { loadProduct } from "../../action/productAction"

export const loadProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('https://good-gold-bighorn-sheep-hat.cyclic.app/products')
        const data = await res.json()
        if (data.length) {
            dispatch(loadProduct(data))
        }
    }
}