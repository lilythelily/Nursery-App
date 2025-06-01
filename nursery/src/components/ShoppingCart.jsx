import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import progress from "/assets/icons/progress-check.png";
import plus from "/assets/icons/plus-01.svg";
import minus from "/assets/icons/minus.svg";
import trash from "/assets/icons/trash-02.svg";
import rightArrowWhite from "/assets/icons/arrow-right-white.svg";
import leftArrow from "/assets/icons/arrow-left.svg";

const ShoppingCart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/plants.json")
      .then((response) => response.json())
      .then((data) => setData(data.items))
      .catch((error) => console.error("failed to fetch", error));
  }, []);

  const [cactiData, setCactiData] = useState([]);
  useEffect(() => {
    fetch("/cacti.json")
      .then((response) => response.json())
      .then((cactiData) => setCactiData(cactiData.cacti))
      .catch((error) => console.error("failed tofetch", error));
  }, []);

  const [qty, setQty] = useState(1);

  const handleIncrement = () => {
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };
  return (
    <section className="shopping-cart">
      <img src={progress} alt="progress-bar" className="progress-bar" />
      <h2 className="cart-h2">Shopping Cart</h2>

      {data.length > 0 ? (
        <>
          <div className="item-card">
            <div className="cart-img-container">
              <img className="cart-img" src={data[0].img} width="100" />
            </div>
            <div className="name-price">
              <p className="card-name">{data[0].name}</p>
              <p className="card-unit-price">{data[0].price}</p>
            </div>

            <div className="label-stepper">
              <p className="quantity">Quantity</p>
              <p className="qty-stepper">
                <img
                  src={minus}
                  alt="minus"
                  className="qty-control"
                  onClick={handleDecrement}
                />
                <output className="qty-output">{qty}</output>

                <img
                  src={plus}
                  alt="plus"
                  className="qty-control"
                  onClick={handleIncrement}
                />
              </p>
            </div>

            <p className="item-total">USD 10.00</p>
            <img src={trash} alt="trash" className="delete-btn" />
          </div>

          <div className="item-card">
            <div className="cart-img-container">
              <img className="cart-img" src={data[4].img} width="100" />
            </div>
            <div className="name-price">
              <p className="card-name">{data[4].name}</p>
              <p className="card-unit-price">{data[4].price}</p>
            </div>

            <div className="label-stepper">
              <p className="quantity">Quantity</p>
              <p className="qty-stepper">
                <img
                  src={minus}
                  alt="minus"
                  className="qty-control"
                  onClick={handleDecrement}
                />
                <output className="qty-output">{qty}</output>

                <img
                  src={plus}
                  alt="plus"
                  className="qty-control"
                  onClick={handleIncrement}
                />
              </p>
            </div>

            <p className="item-total">USD 24.00</p>
            <img src={trash} alt="trash" className="delete-btn" />
          </div>

          <div className="subtotal-section">
            <div className="label-sub">
              <p className="quantity">Sub-Total</p>
              <p className="sub-price">USD 43.00</p>
            </div>
            <div className="label-sub">
              <p className="quantity">Shipping</p>
              <p className="sub-price">USD 5.00</p>
            </div>
          </div>

          <div className="label-total">
            <p className="total">Total</p>
            <p className="total-price">USD 48.00</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <div className="btns">
        <NavLink to="/products">
          <button className="outline-btn">
            <img src={leftArrow} alt="arrow" />
            Continue Shopping
          </button>
        </NavLink>

        <button className="filled-btn3">
          Proceed
          <img src={rightArrowWhite} alt="arrow" />
        </button>
      </div>
    </section>
  );
};

export default ShoppingCart;
