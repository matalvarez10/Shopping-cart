import { useContext } from "react";
import { CartContext } from "../hooks/contexts/cartContext";
import CartEmptyComponent from "../components/cartComponents/cartEmptyComponent";
import { IProductData } from "../interfaces/productData.interface";
import CartCardComponent from "../components/cartComponents/cartCardComponent";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface ICartProps {
  deleteProduct: (newValue: IProductData) => void;
  sumProduct: (newValue: IProductData, action: number) => void;
}

const CartView: React.FC<ICartProps> = ({ deleteProduct, sumProduct }) => {
  const cartProducts = useContext(CartContext);
  const total = cartProducts.reduce((prev, cur) => {
    const priceInt = parseFloat(cur.product.newPrice.slice(1));
    return priceInt * cur.quant + prev;
  }, 0);

  return (
    <div className="px-5 md:px-9">
      <p className="section-header text-center my-3">Your Shopping Cart</p>
      {cartProducts.length === 0 ? (
        <CartEmptyComponent/>
      ) : (
        <div className="w-[100%] lg:w-2/3 mx-auto ">
          <div className="grid grid-cols-4 justify-items-center font-lato py-2 gap-y-3">
            <p className="table-header">Product Details</p>
            <p className="table-header">Total Price</p>
            <p className="table-header">Quantity</p>
            <p className="table-header">Delete</p>
            <div className="custom-hr col-span-4" />
            {cartProducts.map((cartProduct,index) => (
              <CartCardComponent
              key={index}
                deleteProduct={deleteProduct}
                sumProduct={sumProduct}
                cartProduct={cartProduct}
              />
            ))}
          </div>
          <div className="flex flex-row justify-between my-2 items-start font-bold font-montserrat">
            <Link to={"/products/sneakers"} className="flex flex-row justify-center items-center gap-3">
              <FaArrowLeft />
              <span>Continue Shopping</span>
            </Link>
            <div>
              <p className="text-right text:xl md:text-2xl mb-2">TOTAL : $ {total.toFixed(2)}</p>
              <button className="bg-gray-900 text-indigo-50 py-3 px-8  float-right hover:bg-[#ff3f6b]"
              onClick={() => alert("Order Placed Successfully")}>
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;
