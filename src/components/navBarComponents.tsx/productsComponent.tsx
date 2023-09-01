import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../hooks/contexts/productContext";
import ListProductComponents from "./listProductsComponent";
import CartComponent from "./cartComponent";
import { useOutletContext } from "react-router-dom";
import { IOutletProps } from "../../interfaces/outletProps.interface";

const ProductsComponent = () => {
  const { name } = useParams();

  const {deleteProduct,sumProduct} = useOutletContext() as IOutletProps
  const products = useContext(ProductContext);
  return (
    <>
      <p>This is the products Component</p>
      {name === "sandals" ? (
        <ListProductComponents
          products={products.filter(
            (product) => product.category === "heels"
          )}
        />
      ) : name === "sneakers" ? (
        <ListProductComponents
          products={products.filter(
            (product) => product.category === "sneakers"
          )}
        />
      ) : name === "flats" ? (
        <ListProductComponents
          products={products.filter((product) => product.category === "flats")}
        />
      ) :
      name === "cart" ? (
        <CartComponent deleteProduct={deleteProduct} sumProduct={sumProduct} />
        )
       : null}
    </>
  );
};

export default ProductsComponent;
