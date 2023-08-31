import { createContext} from "react";
import { IProductData } from "../interfaces/productData.interface";

export const CartContext = createContext<IProductData[]>([]);