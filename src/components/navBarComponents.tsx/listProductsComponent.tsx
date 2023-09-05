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
    <section className="w-[80%] mx-auto">
      <div className="mx-6">
        <p className="section-header">
          {name}{" "}
          <span className="text-gray-400 text-2xl font-medium">
            ({numberResults} Results)
          </span>
        </p>
        <p className="text-base">
          Home <span className="text-xs">{" > "}</span> Products{" "}
          <span className="text-xs">{" > "}</span>
          <span className="font-bold">{nameUppercase}</span>{" "}
        </p>
      </div>
      <article className="my-4 grid grid-cols-4 gap-11 text-center text-gray-900 justify-items-center">
        {products.map((product,index) => (
          <ProductCardComponent product={product} key={index} main={false} />
        ))}
      </article>
    </section>
  );
};

export default ListProductComponents;
