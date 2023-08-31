import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

const CartComponent = () => {
  const cartProducts = useContext(CartContext);
  console.log(cartProducts);
  //const totalCart = cartProducts.
  return (
    <>
      <p>This is a cart component</p>
      {cartProducts.length === 0 ? (
        <p>No hay productos en el carro</p>
      ) : (
        <>
          {cartProducts.map((product) => (
            <p>{product.title}</p>
          ))}
          <p>TOTAL : XD</p>
        </>
      )}
    </>
  );
};

export default CartComponent;
