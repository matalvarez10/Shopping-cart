import { Link } from "react-router-dom";
const NavBarComponent = () => {
  return (
    <nav className="absolute w-full flex flex-row gap-3 h-20 justify-between items-center top-0 text-white  px-24 font-montserrat text-xl bg-[#071828]">
      <Link to="/">
        <img
          src="https://grupojcs.cl/wp-content/uploads/2022/09/Partner-4.png"
          alt="logo"
          className="text-white h-20"
        />
      </Link>
      <div className="flex flex-row gap-14 font-medium ">
        <Link to="/products/sneakers">Sneakers</Link>
        <Link to="/products/flats">Flats</Link>
        <Link to="/products/sandals">Sandals</Link>
      </div>
      <Link to="/products/cart">Shopping cart</Link>
    </nav>
  );
};

export default NavBarComponent;
