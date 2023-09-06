import { Link } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
const NavBarComponent = () => {
  return (
    <nav className="absolute w-full flex flex-row gap-3 h-20 justify-between items-center top-0 text-white  px-24 font-montserrat text-sm font-light bg-gray-900 uppercase">
      <Link to="/">
        <img
          src="https://grupojcs.cl/wp-content/uploads/2022/09/Partner-4.png"
          alt="logo"
          className="text-white h-20"
        />
      </Link>
      <div className="flex flex-row gap-10  ">
        <Link to="/">Home</Link>
        <Link to="/products/sneakers">Sneakers</Link>
        <Link to="/products/flats">Flats</Link>
        <Link to="/products/heels">Heels</Link>
      </div>
      <Link to="/products/cart" className="text-3xl"><FaBagShopping/></Link>
    </nav>
  );
};

export default NavBarComponent;
