import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const CartEmptyComponent = () => {
  return (
    <article className="h-[500px] flex justify-center items-center flex-col gap-5">
      <p className="section-header font-light text-4xl">
        Cart's a Bit Lonesome – Let's Shop!{" "}
      </p>
      <Link className="red-btn flex flex-row justify-center items-center gap-3 hover:bg-gray-900" to={"/products/sneakers"}>
        <FaArrowLeft />
        Go back Shopping{" "}
      </Link>
    </article>
  );
};

export default CartEmptyComponent;
