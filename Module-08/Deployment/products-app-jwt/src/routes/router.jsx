import { createBrowserRouter } from "react-router-dom";
import ProductLayout from "../layouts/ProductLayout";
import ProductList from "../pages/ProductList";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children:[
            {index:true, element: <Login />},
            {path: "login", element: <Login />},
            {path: "register", element: <Register />},
        {
            element: <ProductLayout/>,
            children: [
                {path: "products", element: <ProductList />},
                {path: "products/add", element: <AddProduct />},
                {path: "products/:id", element: <EditProduct />}
            ]
        }
        ]
    }
])

export default router