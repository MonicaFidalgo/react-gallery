import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import ImageDetail from "./pages/ImageDetail";
import NavBar from "./components/NavbarComponentNew";
import About from "./pages/About";
import Canvas from "./pages/Canvas";
import Exhibitions from "./pages/Exhibitions";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route exact path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />

          <Route exact path="/" element={<Canvas />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:state" element={<ImageDetail />} />
        </Routes>
        <Footer />
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
