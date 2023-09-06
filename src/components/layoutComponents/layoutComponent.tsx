import { Outlet } from "react-router-dom";
import NavBarComponent from "./navbarComponent";
import FooterComponent from "./footerComponent";
import { CartContext } from "../../hooks/contexts/cartContext";
import { IProductData } from "../../interfaces/productData.interface";
import { useReducer, useState } from "react";
import { cartReducer } from "../../hooks/reducer/cartReducer";
import { IPopupData } from "../../interfaces/popupData.interface";
import AddItemsComponent from "./addedItemsComponent";

let NEW_ID = 0;

const LayoutComponent = () => {
  const [cartData, dispatch] = useReducer(cartReducer, []);
  const [popupAdded, setPopupAdded] = useState<IPopupData[]>([]);

  const handleCartData = (newValue: IProductData) => {
    dispatch({
      type: "add",
      newValue: newValue,
    });
    const idAux = NEW_ID;
    setPopupAdded([...popupAdded, { id: NEW_ID, title: newValue.title }]);
    NEW_ID++;
    setTimeout(() => {
      setPopupAdded((prevArray) => {
        return prevArray.filter((popupElement) => popupElement.id !== idAux);
      });
    }, 2000);
  };
  const deleteProduct = (newValue: IProductData) => {
    dispatch({
      type: "delete",
      newValue: newValue,
    });
  };
  const sumProduct = (newValue: IProductData, action: number) => {
    dispatch({
      type: "sum",
      newValue: newValue,
      sign: action,
    });
  };

  return (
    <CartContext.Provider value={cartData}>
      <main className="bg-indigo-50">
        <NavBarComponent />
        <AddItemsComponent popupAdded={popupAdded}/>
        <Outlet context={{ handleCartData, deleteProduct, sumProduct }} />
        <FooterComponent />
      </main>
    </CartContext.Provider>
  );
};

export default LayoutComponent;
