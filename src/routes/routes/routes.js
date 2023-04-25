import Dashboard from "../../layout/Dashboard";
import Main from "../../layout/Main";
import AddProduct from "../../pages/AddProduct";
import Home from "../../pages/Home";
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