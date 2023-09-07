import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import HomeView from "../views/homeView";
import ProductsView from "../views/productsView";
import ErrorComponent from "../components/layoutComponents/errorComponent";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <HomeView /> },
        { path: "/products/:name", element: <ProductsView /> },
        { path: "*", element: <ErrorComponent /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
