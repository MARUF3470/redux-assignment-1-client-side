import { updateProduct } from "../../action/productAction"

const updatedProductData = (product) => {
    return async (dispatch, getState) => {
        const updatedProduct = {
            ProductName: product.ProductName,
            ProductTitle: product.ProductTitle,
            ProductType: product.ProductType,
            Picture1: product.Picture1,
            Picture2: product.Picture2,
            Description: product.Description,
            Status: product.Status,
            Price: product.Price

        }
        const res = await fetch(`https://good-gold-bighorn-sheep-hat.cyclic.app/products/${product.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(updatedProduct),
        })
        const data = await res.json()
        console.log(data)
        if (data.acknowledged) {
            dispatch(updateProduct(product))
            window.location.reload()
        }
    }
}
export default updatedProductData;