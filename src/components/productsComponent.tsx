import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";
import ListProductComponents from "./listProductsComponent";

const ProductsComponent = () => {
  const { name } = useParams();

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
      ) : null}
    </>
  );
};

export default ProductsComponent;
