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
        const res = await fetch(`http://localhost:5000/products/${product.id}`, {
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
        }
    }
}
export default updatedProductData;