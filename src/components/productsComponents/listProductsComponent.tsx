import { Link } from "react-router-dom";
import { IProductData } from "../../interfaces/productData.interface";
import ProductCardComponent from "./productCardComponent";

interface IListProductsProps {
  products: IProductData[];
  name: string;
}

const ListProductComponents: React.FC<IListProductsProps> = ({
  products,
  name,
}) => {
  const nameUppercase = name.charAt(0).toUpperCase() + name.slice(1);
  const numberResults = products.length;
  return (
    <section className="lg:w-[100%] 3xl:w-[80%] mx-auto">
      <div className="mx-6">
        <p className="section-header">
          {name}{" "}
          <span className="text-gray-400 text-2xl font-medium">
            ({numberResults} Results)
          </span>
        </p>
        <div className="text-base">
          <Link to={"/"}>Home</Link>
          <span className="text-xs">{" > "}</span> Products{" "}
          <span className="text-xs">{" > "}</span>
          <Link to={`/products/${name}`} className="font-bold">
            {nameUppercase}
          </Link>{" "}
        </div>
      </div>
      <article className="my-4 grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 3xl:grid-cols-4 gap-11 text-center text-gray-900 justify-items-center">
        {products.map((product, index) => (
          <ProductCardComponent product={product} key={index} main={false} />
        ))}
      </article>
    </section>
  );
};

export default ListProductComponents;
