import { Outlet } from "react-router-dom";
import CartComponent from "../cartComponent";
import NavBarComponent from "./navbarComponent";
import FooterComponent from "./footerComponent";
import { CartContext } from "../../hooks/contexts/cartContext";
import { IProductData } from "../../interfaces/productData.interface";
import { useReducer } from "react";
import { cartReducer } from "../../hooks/reducers/cartReducer";


const LayoutComponent = () => {

  const [cartData, dispatch] = useReducer(cartReducer,[]);

  const handleCartData = (newValue: IProductData) => {
    dispatch({
      type : 'add',
      newValue : newValue,
    })
  };
  const deleteProduct = (newValue: IProductData) => {
    dispatch({
      type : 'delete',
      newValue: newValue,
    })

  };
  const sumProduct = (newValue: IProductData, action: number) => {
    dispatch({
      type: 'sum',
      newValue: newValue,
      sign:action,
    })

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
