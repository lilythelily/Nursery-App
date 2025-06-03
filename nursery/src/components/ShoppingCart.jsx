import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import progress from "/assets/icons/progress-check.png";
import plus from "/assets/icons/plus-01.svg";
import minus from "/assets/icons/minus.svg";
import trash from "/assets/icons/trash-02.svg";
import rightArrowWhite from "/assets/icons/arrow-right-white.svg";
import leftArrow from "/assets/icons/arrow-left.svg";
import EmptyCart from "./EmptyCart";

const ShoppingCart = ({
  cartItems,
  onRemoveFromCart,
}) => {
  const [qty, setQty] = useState({});
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const shipping = 5;

  useEffect(() => {
    const savedQty = localStorage.getItem("cartQty");
    if (savedQty) {
      setQty(JSON.parse(savedQty));
    } else {
      const initialQty = {};
      cartItems.forEach((item) => {
        initialQty[item.id] = 0;
      });
      setQty(initialQty);
    }
  }, [cartItems]);

  useEffect(() => {
    if (Object.keys(qty).length > 0) {
      localStorage.setItem("cartQty", JSON.stringify(qty));
    }
  }, [qty]);

  const calculateTotals = () => {
    const newSubtotal = cartItems.reduce((acc, item) => {
      return acc + item.price * (qty[item.id] || 1);
    }, 0);
    setSubtotal(newSubtotal);
    setTotal(newSubtotal + shipping);
  };

  useEffect(() => {
    calculateTotals();
  }, [qty, cartItems]);

  const handleIncrement = (itemId) => {
    setQty((prevQty) => ({ ...prevQty, [itemId]: (prevQty[itemId] || 0) + 1 }));
  };

  const handleDecrement = (itemId) => {
    setQty((prevQty) => ({
      ...prevQty,
      [itemId]: Math.max((prevQty[itemId] || 0) - 1, 1),
    }));
  };

  return (
    <section className="shopping-cart">
      <img src={progress} alt="progress-bar" className="progress-bar" />
      <h2 className="cart-h2">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className="item-card" key={item.id}>
              <div className="cart-img-container">
                <img className="cart-img" src={item.img} width="100" />
              </div>
              <div className="name-price">
                <p className="card-name">{item.name}</p>
                <p className="card-unit-price">USD {item.price.toFixed(2)}</p>
              </div>

              <div className="label-stepper">
                <p className="quantity">Quantity</p>
                <p className="qty-stepper">
                  <img
                    src={minus}
                    alt="minus"
                    className="qty-control"
                    onClick={() => handleDecrement(item.id)}
                  />
                  <output className="qty-output">{qty[item.id] || 1}</output>

                  <img
                    src={plus}
                    alt="plus"
                    className="qty-control"
                    onClick={() => handleIncrement(item.id)}
                  />
                </p>
              </div>

              <p className="item-total">
                USD {(item.price * (qty[item.id] || 1)).toFixed(2)}
              </p>
              <img
                src={trash}
                alt="trash"
                className="delete-btn"
                onClick={() => onRemoveFromCart(item.id)}
              />
            </div>
          ))}
          <div className="subtotal-section">
            <div className="label-sub">
              <p className="quantity">Sub-Total</p>
              <p className="sub-price">USD {subtotal.toFixed(2)}</p>
            </div>
            <div className="label-sub">
              <p className="quantity">Shipping</p>
              <p className="sub-price">USD {shipping.toFixed(2)}</p>
            </div>

            <div className="label-total">
              <p className="total">Total</p>
              <p className="total-price">USD {total.toFixed(2)}</p>
            </div>
          </div>
          <div className="btns">
            <NavLink to="/products">
              <button className="outline-btn">
                <img src={leftArrow} alt="arrow" />
                Continue Shopping
              </button>
            </NavLink>

            <NavLink to="/shipping">
              <button className="filled-btn3">
                Proceed
                <img src={rightArrowWhite} alt="arrow" />
              </button>
            </NavLink>
          </div>
        </>
      )}
    </section>
  );
};

export default ShoppingCart;
