import { IProductData } from "../../interfaces/productData.interface";
import { useOutletContext } from "react-router-dom";
import { IOutletProps } from "../../interfaces/outletProps.interface";

interface IListProductsProps {
  products: IProductData[];
}

const ListProductComponents: React.FC<IListProductsProps> = ({ products }) => {
  const { handleCartData } = useOutletContext() as IOutletProps;

  return (
    <section className="grid grid-cols-3 gap-10 px-48 w-[90%] mx-auto text-center text-[#071828]">
      {products.map((product) => (
        <div className=" h-[450px] w-[350px] shadow-lg">
          <img src={product.img} alt="product" className="h-1/2 w-full object-fill p-1" />
          <div className="flex flex-col h-1/2 justify-between items-center">
            <p className="font-montserrat font-semibold uppercase tracking-wider text-xl">{product.title}</p>
            <p className="font-lato font-regular text-lg text-gray-400 line-through">{product.prevPrice}</p>
            <p className="font-lato font-semibold text-lg text-red-400">{product.prevPrice}</p>
            <button
              onClick={() => {
                handleCartData(product);
              }}
              className="bg-[#071828] text-white w-full py-3"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ListProductComponents;
