import { NavLink } from "react-router";
import logo from "/assets/img/logo.svg";
import cart from "/assets/icons/cart-outline.svg";

function NavBar() {
  return (
    <nav>
      <NavLink to="">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="ul-cart">
        <ul className="nav-bar">
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
        <img src={cart} alt="cart" />
      </div>
    </nav>
  );
}

export default NavBar;
