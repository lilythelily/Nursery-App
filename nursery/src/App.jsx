import React from "react";
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
import Confirmation from './components/Confirmation';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/empty" element={<EmptyCart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
