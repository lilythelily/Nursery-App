import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Products from './components/Products';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
