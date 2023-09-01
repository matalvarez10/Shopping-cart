import { createContext} from "react"
import { IProductData } from "../../interfaces/productData.interface";
export const ProductContext = createContext<IProductData[]>([]);