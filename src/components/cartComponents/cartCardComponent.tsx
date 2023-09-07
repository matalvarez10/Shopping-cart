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
const priceInt = parseInt(cartProduct.product.prevPrice.slice(1))
const colorFormat = cartProduct.product.color;
  return (
<>
    <div className="flex flex-col items-center">
      <img
        src={cartProduct.product.img}
        alt="cart-product"
        className="h-[120px] w-[180px] fit object-contain shadow-sm rounded-md p-5"
      />
      <p className="font-bold text-base">{cartProduct.product.title}</p>
      <p className="font-normal text-xs text-gray-500">
        Color: {colorFormat.charAt(0).toUpperCase() + colorFormat.slice(1)} - Unit Price:{" "}
        {cartProduct.product.prevPrice}
      </p>
    </div>
    <p className="flex items-center font-bold text-base">$ {priceInt * cartProduct.quant}</p>
    <div className="flex items-center">
      <div className="flex flex-row justify-center items-center gap-4 border-2 px-2 py-1 rounded-full border-gray-900">
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
    <hr className="custom-hr"></hr>
</>


  );
};

export default CartCardComponent;
