import { useContext } from "react";
import { CartContext } from "../../hooks/contexts/cartContext";
import { IProductData } from "../../interfaces/productData.interface";
import CartCardComponent from "./cartCardComponent";
import { FaArrowLeft } from "react-icons/fa6";

interface ICartProps {
  deleteProduct: (newValue: IProductData) => void;
  sumProduct: (newValue: IProductData, action: number) => void;
}

const CartComponent: React.FC<ICartProps> = ({ deleteProduct, sumProduct }) => {
  const cartProducts = useContext(CartContext);
  const total = cartProducts.reduce((prev, cur) => {
    const priceInt = parseInt(cur.product.prevPrice.slice(1));
    return priceInt * cur.quant + prev;
  }, 0);

  return (
    <section className="px-9">
      <p className="section-header text-center my-3">Your Shopping Cart</p>
      {cartProducts.length === 0 ? (
        <p>No hay productos en el carro</p>
      ) : (
        <div className="w-2/3 mx-auto">
          <div className="grid grid-cols-4 justify-items-center font-lato py-2 gap-y-2">
            <p className="table-header">Product Details</p>
            <p className="table-header">Total Price</p>
            <p className="table-header">Quantity</p>
            <p className="table-header">Delete</p>
            <hr className="custom-hr col-span-4" />
            {cartProducts.map((cartProduct) => (
              <CartCardComponent
                deleteProduct={deleteProduct}
                sumProduct={sumProduct}
                cartProduct={cartProduct}
              />
            ))}
          </div>
          <div className="flex flex-row justify-between my-2 items-start font-bold font-montserrat">
            <button className="flex flex-row justify-center items-center gap-3">
              <FaArrowLeft />
              <span>Continue Shopping</span>
            </button>
            <div>
              <p className="text-right text-2xl mb-2">TOTAL : $ {total}</p>
              <button className="bg-gray-900 text-indigo-50 py-3 px-8  float-right"
              onClick={() => alert("Order Placed Successfully")}>
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartComponent;
