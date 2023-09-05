import { IProductData } from "../../interfaces/productData.interface";
import { FiStar } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useOutletContext } from "react-router-dom";
import { IOutletProps } from "../../interfaces/outletProps.interface";

interface IListProductsProps {
  product: IProductData;
}

const ProductCardComponent: React.FC<IListProductsProps> = ({ product }) => {
    const { handleCartData } = useOutletContext() as IOutletProps;

    return ( <div className=" h-[380px] w-[330px] shadow-lg rounded-md bg-white font-lato">
    <img
      src={product.img}
      alt="product"
      className="h-2/3 w-full object-contain p-1"
    />
    <div className="flex flex-col h-1/3 items-center font-lato">
      <div className="grid grid-cols-3 content-center my-auto px-5 w-full gap-1">
        <p className="text-left font-bold uppercase tracking-wider text-base col-span-2">{product.title}</p>
        <div>
          <p className="text-base text-red-600 font-bold">{product.prevPrice}</p>
          <p className="text-xs text-gray-600 font-bold line-through">{product.prevPrice}</p>
        </div>
        <div className="flex flex-row justify-start items-center gap-2 text-base text-gray-700 col-span-2">
          <FiStar />
          <p className="text-xs">4.5  (351 Reviews)</p>
        </div>
        <button
          onClick={() => {
            handleCartData(product);
          }}
          className="flex flex-row justify-center items-center gap-2 font-semibold text-indigo-50 bg-gray-900 rounded-md py-1"
        >
          <FiShoppingCart />
          Add
        </button>
      </div>
    </div>
  </div> );
}
 
export default ProductCardComponent;