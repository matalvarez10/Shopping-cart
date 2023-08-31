import {Link} from "react-router-dom";
const NavBarComponent = () => {
  return (
    <nav>
      <Link to="/">Click here to homepagek</Link>
      <Link to="/products/sneakers">Sneakers</Link>
      <Link to="/products/flats">Flats</Link>
      <Link to="/products/sandals">Sandals</Link>
      <div>This is the shopping cart</div>
    </nav>

  );
};

export default NavBarComponent;
