import { Link } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../hooks/contexts/cartContext";
import imageSmall from "../../assets/Partner-4.png"

const NavBarComponent = () => {
  const numberProducts = useContext(CartContext).length;
  return (
    <nav className="absolute md:fixed w-full flex flex-row gap-3 h-20 justify-between items-center top-0 text-white  px-8 lg:px-24 font-montserrat text-xs md:text-sm font-light bg-gray-900 uppercase  z-10">
      <Link to="/">
        <img src={imageSmall} alt="smallicon" className="h-9 md:hidden" />
        <img
          src="https://grupojcs.cl/wp-content/uploads/2022/09/Partner-4.png"
          alt="logo"
          className="text-white hidden md:block md:h-11 lg:h-20"
        />
      </Link>
      <div className="flex flex-row gap-4 md:gap-10  ">
        <Link to="/">Home</Link>
        <Link to="/products/sneakers">Sneakers</Link>
        <Link to="/products/flats">Flats</Link>
        <Link to="/products/heels">Heels</Link>
      </div>
      <Link to="/products/cart" className="text-xl md:text-3xl flex flex-row justify-center items-center gap-1 md:gap-3">
        <FaBagShopping />
        {numberProducts > 0 && <span className="text-[9px] md:text-xs font-bold">{numberProducts}</span>}
      </Link>
    </nav>
  );
};

export default NavBarComponent;
