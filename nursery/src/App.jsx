import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";
import EmptyCart from "./components/EmptyCart";
import Shipping from "./components/Shipping";
import Confirmation from "./components/Confirmation";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartQty, setCartQty] = useState(() => {
    const savedQty = localStorage.getItem("cartQty");
    return savedQty ? JSON.parse(savedQty) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cartQty", JSON.stringify(cartQty));
  }, [cartQty, cartItems]);

  const updateCartQty = (newQty) => {
    setCartQty(newQty);
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <NavBar cartItems={cartItems} cartQty={cartQty} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/products"
          element={<Products setCartItems={setCartItems} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              updateCartQty={updateCartQty}
            />
          }
        />
        <Route path="/empty" element={<EmptyCart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
