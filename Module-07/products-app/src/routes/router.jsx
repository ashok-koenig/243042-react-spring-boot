import { createBrowserRouter } from "react-router-dom";
import ProductLayout from "../layouts/ProductLayout";
import ProductList from "../pages/ProductList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductLayout />,
        children: [
            {index: true, element: <ProductList />}
        ]
    }
])

export default router