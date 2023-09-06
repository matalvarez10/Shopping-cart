import { useState, useEffect } from "react";
import { IProductData } from "./interfaces/productData.interface";
import { ProductContext } from "./hooks/contexts/productContext";
import { ScrollRestoration } from "react-router-dom";
import LayoutComponent from "./components/layoutComponents/layoutComponent";

function App() {
  const [productData, setProductData] = useState<IProductData[]>([]);

  useEffect(() => {
    fetch("../db/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data.productsData);
      });
  }, []);

  return (
    <ProductContext.Provider value={productData}>
      <LayoutComponent />
      <ScrollRestoration/>
    </ProductContext.Provider>
  );
}

export default App;
