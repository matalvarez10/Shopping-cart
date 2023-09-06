import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import HomeComponent from "../components/layoutComponents/homeComponent";
import ProductsComponent from "../components/productsComponents/productsComponent";
import ErrorComponent from "../components/layoutComponents/errorComponent";

const Router = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element : <App/>,
            children: [
                { path: "/", element: <HomeComponent /> },
                { path: "/products/:name", element: <ProductsComponent /> },
                { path: "*", element: <ErrorComponent /> },
              ],
        },
    ]);
    return <RouterProvider router={router}/>;
}
 
export default Router;