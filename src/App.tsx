import { useState, useEffect } from "react";
import { IProductData } from "./interfaces/productData.interface";
import { ProductContext } from "./hooks/contexts/productContext";
import { ScrollRestoration } from "react-router-dom";
import LayoutComponent from "./components/layoutComponents/layoutComponent";

function App() {
  const [productData, setProductData] = useState<IProductData[]>([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/matalvarez10/Shopping-cart/main/public/db/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data.productsData);
      });
  }, []);

  return (
    <div>
      <ProductContext.Provider value={productData}>
        <LayoutComponent />
        <ScrollRestoration/>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
