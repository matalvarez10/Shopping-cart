import { useState, useEffect } from "react";
import { IProductData } from "./interfaces/productData.interface";
import NavBarComponent from "./components/navbarComponent";
import FooterComponent from "./components/footerComponent";
import { ProductContext } from "./contexts/productContext";

import { Outlet } from "react-router-dom";
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
      <NavBarComponent/>
      <Outlet/>
{/*         {productData
          .filter((x) => x.category == "sandals")
          .map((product) => (
            <>
              <p>{product.title}</p>
              <img src={product.img} alt="product" />
            </>
          ))} */}
          <FooterComponent/>
    </ProductContext.Provider>
  );
}

export default App;
