import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";
import progressBar2 from "/assets/icons/progress-check2.png";
import user from "/assets/icons/user.svg";
import emailImg from "/assets/icons/email.svg";
import locator from "/assets/icons/location.svg";
import globe from "/assets/icons/globe.svg";
import credit from "/assets/icons/card-02.svg";
import calendar from "/assets/icons/calendar-02.svg";
import credit2 from "/assets/icons/card-number.svg";
import rightArrowWhite from "/assets/icons/arrow-right-white.svg";
import leftArrow from "/assets/icons/arrow-left.svg";


const Shipping = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zip: "",
    country: "",
    holder: "",
    card: "",
    expirationMonth: "",
    expirationYear: "",
    cvc: "",
  });
  const [error, setError] = useState(false);
  const errorStyle = {
    borderColor: "#e38482",
  };

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'email') {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setError(prevError => ({ ...prevError, email: !isValid }));
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "address",
      "zip",
      "country",
      "holder",
      "cardPart1",
      "cardPart2",
      "cardPart3",
      "cardPart4",
      "expirationMonth",
      "expirationYear",
      "cvc",
    ];
    let hasError = false;
    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        hasError = true;
      }
    });
    const emailIsValid =
      !error.email && formData.email && formData.email.trim() !== "";
    setError((prevError) => ({
      ...prevError,
      form: hasError || !emailIsValid
    }));
    if (!hasError && emailIsValid) {
      // console.log("Form submitted successfully!", formData);
      navigate('/confirmation');
    }
  };

  return (
    <>
      <section className="shipping-section">
        <img src={progressBar2} alt="progress-bar" className="progress-bar" />
        <h2 className="cart-h2">Shipping Address</h2>
        <p className="required">All fields are required.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="firstName">
              <img src={user} alt="user" />
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Bethany"
              value={formData.firstName}
              onChange={handleInputChange}
              style={
                error &&
                (!formData.firstName || formData.firstName.trim() === "")
                  ? errorStyle
                  : {}
              }
            ></input>
            {error.form && !formData.firstName && (
              <p className="error-msg">This field is required.</p>
            )}
          </div>

          <div className="form-item">
            <label htmlFor="lastName">
              <img src={user} alt="user" />
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Fletcher"
              value={formData.lastName}
              onChange={handleInputChange}
              style={
                error && (!formData.lastName || formData.lastName.trim() === "")
                  ? errorStyle
                  : {}
              }
            ></input>
            {error.form && !formData.lastName && (
              <p className="error-msg">This field is required.</p>
            )}
          </div>

          <div className="form-item">
            <label htmlFor="email">
              <img src={emailImg} alt="email" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="bf@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              style={
                error &&
                (!formData.email ||
                  formData.email.trim() === "" ||
                  (error.email && formData.email.trim() !== ""))
                  ? errorStyle
                  : {}
              }
            ></input>
            {error.email ? (
              <p className="error-msg">Please enter a valid email.</p>
            ) : (
              error.form &&
              !formData.email && (
                <p className="error-msg">This field is required.</p>
              )
            )}
          </div>

          <div className="form-item">
            <label htmlFor="address">
              <img src={locator} alt="locator" />
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="1223 Jermain Street"
              value={formData.address}
              onChange={handleInputChange}
              style={
                error && (!formData.address || formData.address.trim() === "")
                  ? errorStyle
                  : {}
              }
            ></input>
            {error.form && !formData.address && (
              <p className="error-msg">This field is required.</p>
            )}
          </div>

          <div className="form-item">
            <label htmlFor="zip">
              <img src={locator} alt="locator" />
              Zip Code
            </label>
            <input
              type="text"
              name="zip"
              placeholder="1234"
              value={formData.zip}
              onChange={handleInputChange}
              style={
                error && (!formData.zip || formData.zip.trim() === "")
                  ? errorStyle
                  : {}
              }
            ></input>
            {error.form && !formData.zip && (
              <p className="error-msg">This field is required.</p>
            )}
          </div>

          <div className="form-item">
            <label htmlFor="country">
              <img src={globe} alt="globe" />
              Country
            </label>
            <input
              type="text"
              name="country"
              placeholder="UK"
              value={formData.country}
              onChange={handleInputChange}
              style={
                error && (!formData.country || formData.country.trim() === "")
                  ? errorStyle
                  : {}
              }
            ></input>
            {error.form && !formData.country && (
              <p className="error-msg">This field is required.</p>
            )}
          </div>
        </form>

        <h2 className="cart-h2">Payment Info</h2>
        <p className="required">All fields are required.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="holder">
              <img src={user} alt="user" />
              Card Holder
            </label>
            <input
              type="text"
              name="holder"
              placeholder="Bethany Fletcher"
              value={formData.holder}
              onChange={handleInputChange}
              style={
                error && (!formData.holder || formData.holder.trim() === "")
                  ? errorStyle
                  : {}
              }
            ></input>
            {error.form && !formData.holder && (
              <p className="error-msg">This field is required.</p>
            )}
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
                name="cardPart1"
                placeholder="1234"
                value={formData.cardPart1}
                maxLength="4"
                onChange={handleInputChange}
                style={
                  error &&
                  (!formData.cardPart1 || formData.cardPart1.trim() === "")
                    ? errorStyle
                    : {}
                }
              ></input>

              <input
                className="short-input"
                type="text"
                name="cardPart2"
                placeholder="1234"
                value={formData.cardPart2}
                maxLength="4"
                onChange={handleInputChange}
                style={
                  error &&
                  (!formData.cardPart2 || formData.cardPart2.trim() === "")
                    ? errorStyle
                    : {}
                }
              ></input>
              <input
                className="short-input"
                type="text"
                name="cardPart3"
                placeholder="1234"
                value={formData.cardPart3}
                maxLength="4"
                onChange={handleInputChange}
                style={
                  error &&
                  (!formData.cardPart3 || formData.cardPart3.trim() === "")
                    ? errorStyle
                    : {}
                }
              ></input>
              <input
                className="short-input"
                type="text"
                name="cardPart4"
                placeholder="1234"
                value={formData.cardPart4}
                maxLength="4"
                onChange={handleInputChange}
                style={
                  error &&
                  (!formData.cardPart4 || formData.cardPart4.trim() === "")
                    ? errorStyle
                    : {}
                }
              ></input>
            </div>
            {error.form && <p className="error-msg">This field is required.</p>}
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
                name="expirationMonth"
                placeholder="MM"
                value={formData.expirationMonth}
                maxLength="2"
                onChange={handleInputChange}
                style={
                  error &&
                  (!formData.expirationMonth ||
                    formData.expirationMonth.trim() === "")
                    ? errorStyle
                    : {}
                }
              ></input>
              <input
                className="short-input"
                type="text"
                name="expirationYear"
                placeholder="YY"
                value={formData.expirationYear}
                maxLength="2"
                onChange={handleInputChange}
                style={
                  error &&
                  (!formData.expirationYear ||
                    formData.expirationYear.trim() === "")
                    ? errorStyle
                    : {}
                }
              ></input>
            </div>
            {error.form && <p className="error-msg">This field is required.</p>}
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
              value={formData.cvc}
              maxLength="3"
              onChange={handleInputChange}
              style={
                error && (!formData.cvc || formData.cvc.trim() === "")
                  ? errorStyle
                  : {}
              }
            ></input>
          </div>
          {error.form && <p className="error-msg">This field is required.</p>}
        </form>
        <div className="btns">
          <NavLink to="/products">
            <button className="outline-btn">
              <img src={leftArrow} alt="arrow" />
              Continue Shopping
            </button>
          </NavLink>

          {/* <NavLink to="/confirmation"> */}
          <button type="submit" className="filled-btn3" onClick={handleSubmit}>
            Proceed
            <img src={rightArrowWhite} alt="arrow" />
          </button>
          {/* </NavLink> */}
        </div>
      </section>
    </>
  );
};

export default Shipping;
