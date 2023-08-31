import { Outlet } from "react-router-dom";
import { useState } from "react";
import CartComponent from "../cartComponent";
import NavBarComponent from "./navbarComponent";
import FooterComponent from "./footerComponent";
import { CartContext } from "../../contexts/cartContext";
import { IProductData } from "../../interfaces/productData.interface";

const LayoutComponent = () => {
  const [cartData, setCartData] = useState<IProductData[]>([]);
  const handleCartData = (newValue: IProductData) => {
    setCartData((prevData) => {
      return [...prevData, newValue];
    });
  };
  console.log(cartData);

  return (
    <CartContext.Provider value={cartData}>
      <CartComponent />
      <NavBarComponent />
      <Outlet context={handleCartData} />
      <FooterComponent />
    </CartContext.Provider>
  );
};

export default LayoutComponent;
