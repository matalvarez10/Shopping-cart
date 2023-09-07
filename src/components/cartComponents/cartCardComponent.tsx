import { IProductData } from "../../interfaces/productData.interface";
import { FaMinus,FaPlus,FaXmark } from "react-icons/fa6";
import { ICartData } from "../../interfaces/cartData.interface";

interface ICartCardProps {
    deleteProduct: (newValue: IProductData) => void;
    sumProduct: (newValue: IProductData, action: number) => void;
    cartProduct : ICartData;
  }
  
const CartCardComponent: React.FC<ICartCardProps> = ({
  deleteProduct,
  sumProduct,
  cartProduct
}) => {
const priceFloat = parseFloat(cartProduct.product.newPrice.slice(1))
const colorFormat = cartProduct.product.color;
  return (
<>
    <div className="flex flex-col items-center">
      <img
        src={cartProduct.product.img}
        alt="cart-product"
        className="aspect[1/3] bg-white h-[120px] object-contain shadow-sm rounded-md p-4"
      />
      <p className="font-bold text-xs md:text-base">{cartProduct.product.title}</p>
      <p className="font-normal text-xs text-gray-500">
        Color: {colorFormat.charAt(0).toUpperCase() + colorFormat.slice(1)} - Unit Price:{" "}
        {cartProduct.product.newPrice}
      </p>
    </div>
    <p className="flex items-center font-bold text-xs md:text-base">$ {(priceFloat * cartProduct.quant).toFixed(2)}</p>
    <div className="flex items-center">
      <div className="flex flex-row justify-center max-md:text-xs max-md:gap-2 items-center gap-4 border-2 px-2 py-1 rounded-full border-gray-900">
          <button
            onClick={() => {
              sumProduct(cartProduct.product, 1);
            }}
            className=""
          >
            <FaPlus />
          </button>
          <p className="font-semibold">{cartProduct.quant}</p>
          <button
            onClick={() => {
              sumProduct(cartProduct.product, -1);
            }}
            className=""
          >
            <FaMinus />
          </button>
      </div>
    </div>
    <button
      onClick={() => {
        deleteProduct(cartProduct.product);
      }}    
    >
      <FaXmark />
    </button>
    <div className="custom-hr"></div>
</>


  );
};

export default CartCardComponent;
