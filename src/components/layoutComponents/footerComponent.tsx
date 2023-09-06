import { SiFacebook, SiTwitter, SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
const FooterComponent = () => {
  return (
    <footer className=" w-full bg-gray-900 h-[250px] text-indigo-50 flex flex-row justify-around items p-5">
      <div>
        <img
          src="https://grupojcs.cl/wp-content/uploads/2022/09/Partner-4.png"
          alt="logo"
          className="h-[40%]"
        />
        <p className="text-lg font-light font-lato text-center">© Shoe Store 2023</p>
      </div>
      <div className="flex flex-row gap-10">
        <div>
          <p className="footer-header">Shop</p>
          <ul className="item-list">
            <Link to={"products/sneakers"}>
              <li>Sneakers</li>
            </Link>
            <Link to={"products/heels"}>
              <li>Heels</li>
            </Link>
            <Link to={"products/flats"}>
              <li>Flats</li>
            </Link>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="footer-header">About</p>
          <ul className="item-list">
            <li><Link to={"/"}>Privacy Policy</Link></li>
            <li><Link to={"/"}>Faq</Link></li>
            <li><Link to={"/"}>Terms of Use</Link></li>
            <li><Link to={"/"}>Who are we</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-header text-center"> Find Us</p>
          <div className="text-2xl flex flex-row gap-5">
            <Link to={"/"}><SiFacebook/></Link>
            <Link to={"/"}><SiInstagram/></Link>
            <Link to={"/"}><SiTwitter/></Link>
            <Link to={"/"}><SiLinkedin/></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
