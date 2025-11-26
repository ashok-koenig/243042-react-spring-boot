import { createBrowserRouter, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import Payments from "../pages/Payments";


const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {index: true, element: <Home />},
            {path: "about", element: <About />},
            {path: 'payments', element: <Payments />}
        ]
    }
]);

export default router;