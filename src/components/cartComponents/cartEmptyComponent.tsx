import { Link } from "react-router-dom";

const CartEmptyComponent = () => {
  return (
    <article className="h-[500px] flex justify-center items-center flex-col gap-5">
      <p className="section-header font-light text-4xl">Your Cart is Empty</p>
      <Link className="red-btn" to={"/products/sneakers"}>Go back Shopping</Link>
    </article>
  );
};

export default CartEmptyComponent;
