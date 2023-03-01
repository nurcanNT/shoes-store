import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import Adidas from "./components/Product/Adidas";
import Banner from "./components/Banner/Banner";
import Banner1 from "./components/Banner1/Banner1";
import Banner2 from "./components/Banner2/Banner2";
import Nike from "./components/Product/Nike";
import Footer from "./components/Footer/Footer";
import HomeTitle from "./components/HomeTitle/Home";
import Heeled from "./components/Product/Heeled";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HomeTitle/>
     <Heeled/>
     <Nike/>
     <Banner1/>
     <Adidas/>
     <Banner/>
     <Product/>
     <Banner2/>
     <Footer/>
    </div>
  );
}

export default App;
