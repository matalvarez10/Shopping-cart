import { SiFacebook, SiTwitter, SiInstagram, SiLinkedin } from "react-icons/si";
const FooterComponent = () => {
  return (
    <footer className=" w-full bg-gray-900 h-[300px] text-indigo-50 flex flex-row justify-around p-5">
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
            <li>All Products</li>
            <li>Sneakers</li>
            <li>Heels</li>
            <li>Flats</li>
            <li>Home</li>
          </ul>
        </div>
        <div>
          <p className="footer-header">About</p>
          <ul className="item-list">
            <li>Privacy Policy</li>
            <li>Faq</li>
            <li>Terms of Use</li>
            <li>Who are we</li>
          </ul>
        </div>
        <div>
          <p className="footer-header"> Find Us</p>
          <div className="text-2xl flex flex-row gap-5">
            <SiFacebook/>
            <SiInstagram/>
            <SiTwitter/>
            <SiLinkedin/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
