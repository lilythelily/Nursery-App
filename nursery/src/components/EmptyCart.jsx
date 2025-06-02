import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import empty from '/assets/img/empty-cart.svg';
import leftArrow from "/assets/icons/arrow-left.svg";

const EmptyCart = () => {
  return (
    <section className="empty-section">
      <div className="empty-card">
      <img src={empty} alt="empty-cart" className="empty-img" />
      <p className='empty-title'>Your cart is empty...</p>
  </div>
      <NavLink to="/products">
        <button className="filled-btn4">
          <img src={leftArrow} alt="arrow"/>
          Continue Shopping
        </button>
      </NavLink>
      </section>
  );
};

export default EmptyCart;
