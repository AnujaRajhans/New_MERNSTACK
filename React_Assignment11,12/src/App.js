import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import "./App.css";
import "./components/Theme.css";
import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Modalitem from "./components/Modalitem";

function App() {
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const handleregister = (username) => {
    setUsername(username);
    localStorage.setItem("username", username);
  };

  const addToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };

  const handleRemove = (id) => {
    setCart((cart) => cart.find((prodId) => prodId !== id));
  };

  const Products = [
    {
      prodId: 1,
      prodName: "Cookies",
      proddes:
        "Darkly colored, bitter, and slightly acidic, coffee",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1490288281947-6d3bf561c317?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      prodId: 2,
      prodName: "Cinnamon Jalapeno",
      proddes: "This dessert has also become an integral part of our american celebrations.",
      price: 400,
      image: "https://plus.unsplash.com/premium_photo-1699612395018-ccaace9d2294?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      prodId: 3,
      prodName: "Sprinkled cookies",
      proddes: "Sugar mixture (and brown sugar, raisins or other ingredients in some cases) is sprinkled over a thin coat of cookies.",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1506224477000-07aa8a76be20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      prodId: 4,
      prodName: "American Biscuits",
      proddes: " (American English) or biscuit (British English) is a baked snack or dessert that is typically small, flat, and sweet",
      price: 520,
      image:
        "https://images.unsplash.com/photo-1532452068958-99433c03a271?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      prodId: 5,
      prodName: "Pizza",
      proddes: "Pizza is an Italian food that was created in Italy (The Naples area). It is made with different toppings. ",
      price: 550,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      prodId: 6,
      prodName: "Pasta",
      proddes: "Pasta has been very popular in Italy and has also been eaten in many parts of Asia.",
      price: 600,
      image:
        "https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <Navbar count={cart} cart={cart} username={username} />
      <Modalitem cart={cart} handleRemove={handleRemove} />

      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route
          path="/register"
          element={<Register onRegister={handleregister} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={<Cart data={Products} addToCart={addToCart} />}
        />
        <Route
          path="/cart/:prodId/*"
          element={<ProductDetails data={Products} addToCart={addToCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
