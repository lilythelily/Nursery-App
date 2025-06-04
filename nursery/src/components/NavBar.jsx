import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import logo from "/assets/img/logo.svg";
import cart from "/assets/icons/cart-outline.svg";
import hamburger from "/assets/icons/menu-03.svg";
import Hamburger from "./Hamburger";

function NavBar({ cartQty, cartItems }) {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <nav>
        <NavLink to="">
          <img src={logo} alt="logo" className="nav-logo" />
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
          <p className="cart-qty">
            {cartItems.length}
            {/* {Object.values(cartQty).reduce((sum, q) => sum + q, 0)} */}
          </p>
          <NavLink to="/cart">
            <img src={cart} alt="cart" className="cart-icon" />
          </NavLink>
          <img
            src={hamburger}
            alt="hamburger"
            className="hamburger"
            onClick={handleMenu}
          />
        </div>
      </nav>
      {menu && <Hamburger menu={menu} onClose={handleMenu} />}
    </>
  );
}

export default NavBar;
