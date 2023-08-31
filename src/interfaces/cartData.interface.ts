import { IProductData } from "./productData.interface";
export interface ICartData{
    quant : number;
    product : IProductData;
}