import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import progressBar3 from "/assets/icons/progress-check3.png";
import user from "/assets/icons/user.svg";
import email from "/assets/icons/email.svg";
import locator from "/assets/icons/location.svg";
import globe from "/assets/icons/globe.svg";
import credit from "/assets/icons/card-02.svg";
import x from "/assets/icons/x-02.svg";
import check from "/assets/icons/check-02.svg";
import flowers from "/assets/img/flowers_1.svg";

const Confirmation = () => {
  return (
    <>
      <section className="shipping-section">
        <div className="overlay"></div>
        <img src={progressBar3} alt="progress-bar" className="progress-bar" />
        <h2 className="cart-h2">Confirmation</h2>
        <form>
          <div className="form-item">
            <label htmlFor="first-name">
              <img src={user} alt="user" />
              First Name
            </label>
            <input type="text" name="first-name"></input>
          </div>

          <div className="form-item">
            <label htmlFor="last-name">
              <img src={user} alt="user" />
              Last Name
            </label>
            <input type="text" name="last-name"></input>
          </div>

          <div className="form-item">
            <label htmlFor="email">
              <img src={email} alt="email" />
              Email Address
            </label>
            <input type="email" name="email"></input>
          </div>

          <div className="form-item">
            <label htmlFor="Address">
              <img src={locator} alt="locator" />
              Address
            </label>
            <input type="text" name="address"></input>
          </div>

          <div className="form-item">
            <label htmlFor="zip">
              <img src={locator} alt="locator" />
              Zip Code
            </label>
            <input type="text" name="zip"></input>
          </div>

          <div className="form-item">
            <label htmlFor="country">
              <img src={globe} alt="globe" />
              Country
            </label>
            <input type="text" name="country"></input>
          </div>

          <div className="form-item">
            <label htmlFor="credit">
              <img src={credit} alt="card" />
              Payment
            </label>
            <input type="text" name="credit"></input>
          </div>
        </form>

        <div className="btns">
          <NavLink to="/products">
            <button className="outline-btn2">
              <img src={x} alt="x" />
              Cancel
            </button>
          </NavLink>

          <button className="filled-btn5">
            CONFIRM
            <img src={check} alt="check" />
          </button>
        </div>

        <div className="thanks-pop">
          <img src={flowers} alt="flowers" className="flowers" />
          <p className="thanks">Thank you!</p>
          <p className="thanks-text">
            We will ship your item(s)<br></br>within a few days!
          </p>
        </div>
      </section>
    </>
  );
};

export default Confirmation;
