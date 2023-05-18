import Dashboard from "../../layout/Dashboard";
import Main from "../../layout/Main";
import AddProduct from "../../pages/AddProduct";
import Cart from "../../pages/Cart";
import Home from "../../pages/Home";
import ProductDetails from "../../pages/ProductDetails";
import ProductList from "../../pages/ProductList";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://good-gold-bighorn-sheep-hat.cyclic.app/products/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <ProductList />
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct />
            }
        ]
    }
])
export default routes;