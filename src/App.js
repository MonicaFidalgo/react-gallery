import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Products from "./Products";
import NavBar from "./NavBarComponent";
import ProductDetail from "./ProductDetail";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/products" element={<Products />} />

          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
        {/*
              Route between 2 components depending on the path:
              1. Home page ("/")
              2. Products Page ("/products")
              
              ** Home Page **
              • Can be a basic home page, maybe welcoming the user to your site and giving some background about yourself as a developer
              
              ** Products Page **
              • Using an array of data for your products (provided for you), map over that data to show each item and some information on the products page as a list of available products.
          */}
      </Router>
    </div>
  );
}

export default App;
