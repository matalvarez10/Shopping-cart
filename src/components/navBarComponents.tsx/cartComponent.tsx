import { useContext } from "react";
import { CartContext } from "../../hooks/contexts/cartContext";
import { IProductData } from "../../interfaces/productData.interface";
interface ICartProps {
  deleteProduct: (newValue: IProductData) => void;
  sumProduct: (newValue: IProductData, action: number) => void;
}

const CartComponent: React.FC<ICartProps> = ({ deleteProduct, sumProduct }) => {
  const cartProducts = useContext(CartContext);
  const total = cartProducts.reduce((prev ,cur) =>{
    const priceInt = parseInt(cur.product.prevPrice.slice(1));
    return priceInt * cur.quant + prev;
  },0)

  return (
    <>
      <p>This is a cart component</p>
      {cartProducts.length === 0 ? (
        <p>No hay productos en el carro</p>
      ) : (
        <>
          {cartProducts.map((product) => (
            <>
              <p>{product.product.title}</p>
              <button
                onClick={() => {
                  sumProduct(product.product, 1);
                }}
              >
                +
              </button>
              <p>Cantidad : {product.quant}</p>
              <button
                onClick={() => {
                  sumProduct(product.product, -1);
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  deleteProduct(product.product);
                }}
              >
                Delete
              </button>
            </>
          ))}
          <p>TOTAL : {total}</p>
        </>
      )}
    </>
  );
};

export default CartComponent;
