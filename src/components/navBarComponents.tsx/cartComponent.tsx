import { useContext } from "react";
import { CartContext } from "../../hooks/contexts/cartContext";
import { IProductData } from "../../interfaces/productData.interface";
import CartCardComponent from "./cartCardComponent";


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
      <p className="section-header">Your Shopping Cart</p>
      {cartProducts.length === 0 ? (
        <p>No hay productos en el carro</p>
      ) : (
        <div className="w-1/2">
          <div className="grid grid-cols-4 justify-items-center font-lato py-2 gap-y-2">
          <p className="table-header">Product Details</p>
          <p className="table-header">Total Price</p>
          <p className="table-header">Quantity</p>
          <p className="table-header">Delete</p>
            {cartProducts.map((cartProduct) => (
              <CartCardComponent
              deleteProduct={deleteProduct}
              sumProduct={sumProduct}
              cartProduct={cartProduct}
              />
            ))}
          </div>
          <p>TOTAL : {total}</p>
        </div>
      )}
    </section>
  );
};

export default CartComponent;
