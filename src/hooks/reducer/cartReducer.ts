import { ICartData } from "../../interfaces/cartData.interface";
import { IProductData } from "../../interfaces/productData.interface";

type CartAction =
  | { type: 'add'; newValue: IProductData }
  | { type: 'delete'; newValue: IProductData }
  | { type: 'sum'; newValue: IProductData; sign: number };

export const  cartReducer = (cartData :ICartData[] ,action:CartAction): ICartData[] =>{
    switch (action.type){
      case 'add':{
        if (
          cartData.some(
            (cartProduct) => cartProduct.product.title === action.newValue.title
          )
        ) {
            return cartData.map((element) =>
              element.product.title === action.newValue.title
                ? { ...element, quant: element.quant + 1 }
                : element
            );
  
        } else {
          return [...cartData, { quant: 1, product: action.newValue }];
        }
      }
      case 'delete':{
        return cartData.filter(
          (element) => element.product.title !== action.newValue.title
        );
      }
      case 'sum':{
        return cartData.map((element) =>
          element.product.title === action.newValue.title &&
          element.quant + 1 * action.sign >= 1
            ? { ...element, quant: element.quant + 1 * action.sign }
            : element
        );
        
      }
    }
    
  }