import { ProductContext } from "../../hooks/contexts/productContext";
import { useContext } from "react";
import ProductCardComponent from "../productsComponents/productCardComponent";
const PopularProductsComponent = () => {
  const products = useContext(ProductContext);
  const filteredProducts = products
    .filter((product) => product.category === "sneakers")
    .slice(0, 3);
  return (
    <section>
      <p className="section-header text-center m-4">
        Trending <span className="font-light">Now</span>
      </p>
      <div className="grid grid-cols-1 gap-3 w-full justify-items-center items-center mx-auto xl:grid-cols-3 xl:w[80%] m-2 2xl:w-2/3">
        {filteredProducts.map((product, index) => {
          if (index == 1) {
            return (
              <ProductCardComponent product={product} key={index} main={true} />
            );
          } else {
            return (
              <ProductCardComponent
                product={product}
                key={index}
                main={false}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default PopularProductsComponent;
