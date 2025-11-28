import { createBrowserRouter } from "react-router-dom";
import ProductLayout from "../layouts/ProductLayout";
import ProductList from "../pages/ProductList";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductLayout />,
        children: [
            {path: "products", element: <ProductList />},
            {path: "products/add", element: <AddProduct />},
            {path: "products/:id", element: <EditProduct />}
        ]
    }
])

export default router