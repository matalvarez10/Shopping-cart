import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import HomeComponent from "../components/navBarComponents.tsx/homeComponent";
import ProductsComponent from "../components/navBarComponents.tsx/productsComponent";

const Router = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element : <App/>,
            children: [
                { path: "/", element: <HomeComponent /> },
                { path: "/products/:name", element: <ProductsComponent /> },
              ],
        },
    ]);
    return <RouterProvider router={router}/>;
}
 
export default Router;