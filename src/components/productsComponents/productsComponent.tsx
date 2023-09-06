import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../hooks/contexts/productContext";
import ListProductComponents from "./listProductsComponent";
import CartComponent from "../cartComponents/cartComponent";
import { useOutletContext } from "react-router-dom";
import { IOutletProps } from "../../interfaces/outletProps.interface";
import ErrorComponent from "../layoutComponents/errorComponent";

const ProductsComponent = () => {
  const { name } = useParams();

  const {deleteProduct,sumProduct} = useOutletContext() as IOutletProps
  const products = useContext(ProductContext);
  return (
    <section className="py-28 mx-auto min-h-[90vh]">
      {name === "heels" ? (
        <ListProductComponents
          products={products.filter(
            (product) => product.category === "heels"
          )}
          name={name}

          
        />
      ) : name === "sneakers" ? (
        <ListProductComponents
          products={products.filter(
            (product) => product.category === "sneakers"
          )}
          name={name}
        />
      ) : name === "flats" ? (
        <ListProductComponents
          products={products.filter((product) => product.category === "flats")}
          name={name}
        />
      ) :
      name === "cart" ? (
        <CartComponent deleteProduct={deleteProduct} sumProduct={sumProduct} />
        )
       : <ErrorComponent/> }
    </section>
  );
};

export default ProductsComponent;
