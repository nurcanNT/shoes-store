import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Skechers from "./components/Product/Skechers";
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
     <Router>
      <div>
      <h1 className="heading">All Categories</h1>
      <div className="category-menu">
        <Link to="/adidas"><div><a href="#" className="btn">Adidas</a></div></Link>  <Link to="/nike"><div><a href="#" className="btn">Nike</a></div></Link>
        <Link to="/heeled"><div><a href="#" className="btn">Heeled</a></div></Link> <Link to="/skechers"><div><a href="#" className="btn">Skechers</a></div></Link>
      </div>
      </div>
      <Switch>
        <Route path="/heeled">{<Heeled/>}</Route>
        <Route path="/nike">{<Nike/>}</Route>
        <Route path="/adidas">{<Adidas/>}</Route>
        <Route path="/skechers">{<Skechers/>}</Route>
      </Switch>
    </Router>
     <Banner1/>
     <Footer/>
    </div>
  );
}

export default App;
