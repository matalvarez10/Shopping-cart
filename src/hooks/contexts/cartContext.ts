import { createContext} from "react";
import { ICartData } from "../../interfaces/cartData.interface";
export const CartContext = createContext<ICartData[]>([]);