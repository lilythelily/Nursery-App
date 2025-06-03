import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import progressBar2 from "/assets/icons/progress-check2.png";
import user from "/assets/icons/user.svg";
import email from "/assets/icons/email.svg";
import locator from "/assets/icons/location.svg";
import globe from "/assets/icons/globe.svg";
import credit from "/assets/icons/card-02.svg";
import calendar from "/assets/icons/calendar-02.svg";
import credit2 from "/assets/icons/card-number.svg";
import rightArrowWhite from "/assets/icons/arrow-right-white.svg";
import leftArrow from "/assets/icons/arrow-left.svg";

const Shipping = () => {
  return (
    <>
      <section className="shipping-section">
        <img src={progressBar2} alt="progress-bar" className="progress-bar" />
        <h2 className="cart-h2">Shipping Address</h2>
        <p className="required">All fields are required.</p>
        <form>
          <div className="form-item">
            <label htmlFor="first-name">
              <img src={user} alt="user" />
              First Name
            </label>
            <input type="text" name="first-name" placeholder="Bethany"></input>
          </div>

          <div className="form-item">
            <label htmlFor="last-name">
              <img src={user} alt="user" />
              Last Name
            </label>
            <input type="text" name="last-name" placeholder="Fletcher"></input>
          </div>

          <div className="form-item">
            <label htmlFor="email">
              <img src={email} alt="email" />
              Email Address
            </label>
            <input type="email" name="email" placeholder="bf@gmail.com"></input>
          </div>

          <div className="form-item">
            <label htmlFor="Address">
              <img src={locator} alt="locator" />
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="1223 Jermain Street"
            ></input>
          </div>

          <div className="form-item">
            <label htmlFor="zip">
              <img src={locator} alt="locator" />
              Zip Code
            </label>
            <input type="text" name="zip" placeholder="1234"></input>
          </div>

          <div className="form-item">
            <label htmlFor="country">
              <img src={globe} alt="globe" />
              Country
            </label>
            <input type="text" name="country" placeholder="UK"></input>
          </div>
        </form>

        <h2 className="cart-h2">Payment Info</h2>
        <p className="required">All fields are required.</p>
        <form>
          <div className="form-item">
            <label htmlFor="holder">
              <img src={user} alt="user" />
              Card Holder
            </label>
            <input
              type="text"
              name="holder"
              placeholder="Bethany Fletcher"
            ></input>
          </div>

          <div className="form-item">
            <label htmlFor="card">
              <img src={credit} alt="card" />
              Credit Card
            </label>
            <div className="card-inputs">
              <input
                className="short-input"
                type="text"
                name="card"
                placeholder="1234"
              ></input>
              <input
                className="short-input"
                type="text"
                name="card"
                placeholder="1234"
              ></input>
              <input
                className="short-input"
                type="text"
                name="card"
                placeholder="1234"
              ></input>
              <input
                className="short-input"
                type="text"
                name="card"
                placeholder="1234"
              ></input>
            </div>
          </div>

          <div className="form-item">
            <label htmlFor="expiration">
              <img src={calendar} alt="calendar" />
              Expiration
            </label>
            <div className="card-inputs">
              <input
                className="short-input"
                type="text"
                name="expiration"
                placeholder="MM"
              ></input>
              <input
                className="short-input"
                type="text"
                name="expiration"
                placeholder="YY"
              ></input>
            </div>
          </div>

          <div className="form-item">
            <label htmlFor="cvc">
              <img src={credit2} alt="card" />
              CVV/CVC
            </label>
            <input
              className="short-input"
              type="text"
              name="cvc"
              placeholder="123"
            ></input>
          </div>
        </form>
        <div className="btns">
          <NavLink to="/products">
            <button className="outline-btn">
              <img src={leftArrow} alt="arrow" />
              Continue Shopping
            </button>
          </NavLink>

          <NavLink to="/confirmation">
            <button className="filled-btn3">
              Proceed
              <img src={rightArrowWhite} alt="arrow" />
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Shipping;
