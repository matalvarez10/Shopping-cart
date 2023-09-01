import { IProductData } from "./productData.interface";

export interface IOutletProps{
    handleCartData: (newValue: IProductData) => void,
    deleteProduct: (newValue: IProductData) => void,
    sumProduct: (newValue: IProductData, action: number) => void,
  };