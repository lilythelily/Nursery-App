import { NavLink } from "react-router";
import logo from "/assets/img/logo.svg";
import ig from "/assets/icons/ig.svg";
import fb from "/assets/icons/fb.svg";
import tiktok from "/assets/icons/tiktok.svg";
import email from "/assets/icons/email.svg";

const Footer = () => {
  return (
    <footer>
      <NavLink to="/">
        <img src={logo} alt="logo" width="100" />
      </NavLink>

      <div className="footer-container">
        <ul className="footer-ul">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/products">
            <li>Products</li>
          </NavLink>

          <NavLink to="/about">
            <li>About</li>
          </NavLink>
        </ul>
        <ul className="footer-ul">
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
        </ul>
        <div className="social-email">
          <div className="social">
            <img src={ig} alt="instagram" />
            <img src={tiktok} alt="tiktok" />
            <img src={fb} alt="facebook" />
          </div>
          <div className="email">
            <img src={email} alt="email" />
            <p className="email-address">inquiry@serene.com</p>
          </div>
        </div>
      </div>
      <small>&copy;2025 Serene Nursery. All Rights Reserved.</small>
    </footer>
  );
};

export default Footer;
