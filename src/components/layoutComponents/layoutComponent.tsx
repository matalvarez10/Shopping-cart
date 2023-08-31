import { Outlet } from "react-router-dom";
import { useState } from "react";
import CartComponent from "../cartComponent";
import NavBarComponent from "./navbarComponent";
import FooterComponent from "./footerComponent";
import { CartContext } from "../../contexts/cartContext";
import { IProductData } from "../../interfaces/productData.interface";
import { ICartData } from "../../interfaces/cartData.interface";

const LayoutComponent = () => {
  const [cartData, setCartData] = useState<ICartData[]>([]);
  console.log(cartData);

  const handleCartData = (newValue: IProductData) => {
    if (
      cartData.some(
        (cartProduct) => cartProduct.product.title === newValue.title
      )
    ) {
      setCartData((prevArray) => {
        return prevArray.map((element) =>
          element.product.title === newValue.title
            ? { ...element, quant: element.quant + 1 }
            : element
        );
      });
    } else {
      setCartData([...cartData, { quant: 1, product: newValue }]);
    }
  };
  const deleteProduct = (newValue: IProductData) => {
    setCartData((prevArray) => {
      return prevArray.filter(
        (element) => element.product.title !== newValue.title
      );
    });
  };
  const sumProduct = (newValue: IProductData, action: number) => {
    
    setCartData((prevArray) => {
      return prevArray.map((element) =>
        (element.product.title === newValue.title && element.quant + 1*action >= 1)
          ? { ...element, quant: element.quant + 1*action }
          : element
      );
    });
  };
  return (
    <CartContext.Provider value={cartData}>
      <CartComponent deleteProduct={deleteProduct} sumProduct={sumProduct} />
      <NavBarComponent />
      <Outlet context={handleCartData} />
      <FooterComponent />
    </CartContext.Provider>
  );
};

export default LayoutComponent;
