import { IProductData } from "../../interfaces/productData.interface";
import { FiStar,FiShoppingCart } from "react-icons/fi";
import { useOutletContext } from "react-router-dom";
import { IOutletProps } from "../../interfaces/outletProps.interface";

interface IListProductsProps {
  product: IProductData;
  main:boolean;
}

const ProductCardComponent: React.FC<IListProductsProps> = ({ product,main }) => {
    const { handleCartData } = useOutletContext() as IOutletProps;

    return ( <div className={" rounded-md font-lato bg-white w-[280px] md:w-[330px] " +
    `${!main ? " h-[380px] shadow-lg " : " h-[520px] shadow-xl "}`}>
    <img
      src={product.img}
      alt="product"
      className="h-2/3 w-full object-contain p-1"
    />
    <div className="flex flex-col h-1/3 items-center font-lato">
      <div className="grid grid-cols-3 content-center my-auto px-5 w-full gap-1">
        <p className="text-left font-bold uppercase tracking-wider text-base col-span-2">{product.title}</p>
        <div>
          <p className="text-base text-red-600 font-bold">{product.newPrice}</p>
          <p className="text-xs text-gray-600 font-bold line-through">{product.prevPrice}</p>
        </div>
        <div className="flex flex-row justify-start items-center gap-2 text-base text-gray-700 col-span-2">
          <FiStar />
          <p className="text-xs">{product.starts} ({product.numberReviews} Reviews)</p>
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