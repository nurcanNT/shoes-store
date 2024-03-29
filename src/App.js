import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Skechers from "./components/Product/Skechers";
import Adidas from "./components/Product/Adidas";
import Banner1 from "./components/Banner1/Banner1";
import Nike from "./components/Product/Nike";
import Footer from "./components/Footer/Footer";
import HomeTitle from "./components/HomeTitle/Home";
import Heeled from "./components/Product/Heeled";
import Basket from "./components/Basket/Basket";

function App() {
  const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [title2, setTitle2] = useState("");
    const [title3, setTitle3] = useState("");
    const [title4, setTitle4] = useState("");
    const [title5, setTitle5] = useState("");
    const [card, setCard] = useState({});
    const [basketCount, setBasketCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTitle("All Categories");
        },1000)
    })
    useEffect(() => {
      setTimeout(() => {
          setLoading(false);
          setTitle2(<Link to="/shoes-store/adidas"><div><a href="#" className="btn">Adidas</a></div></Link> );
      },1000)
  })
  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
        setTitle3(<Link to="/shoes-store/nike"><div><a href="#" className="btn">Nike</a></div></Link>);
    },1000)
})
useEffect(() => {
  setTimeout(() => {
      setLoading(false);
      setTitle4(<Link to="/shoes-store/heeled"><div><a href="#" className="btn">Heeled</a></div></Link>);
  },1000)
})
useEffect(() => {
  setTimeout(() => {
      setLoading(false);
      setTitle5(<><Link to="/shoes-store/skechers"><div><a href="#" className="btn">Skechers</a></div></Link> 
       <Link to="/shoes-store/basket"> <div><a  href="#" className="btn">Basket</a></div></Link></>);
  },1000)
})

  return (
    <React.Fragment>
    <div className="App">
     
     <Router>
     <Navbar basketCount={basketCount} setBasketCount={setBasketCount}/>
     <HomeTitle/> <div> <h1 className="heading">{title || <Skeleton  baseColor="#d3cce3" width="250px"/>}</h1> <div className="category-menu"> {title2 || <Skeleton  baseColor="#d3cce3" width="150px" height="50px"/>}  {title3 || <Skeleton  baseColor="#d3cce3" width="150px" height="50px" />} {title4 || <Skeleton  baseColor="#d3cce3" width="150px" height="50px" />}  {title5 || <Skeleton  baseColor="#d3cce3" width="150px" height="50px" />} </div> </div>
      <Switch>
        <Route path="/shoes-store/heeled">{<Heeled card={card} setCard={setCard} basketCount={basketCount} setBasketCount={setBasketCount} />}</Route>
        <Route path="/shoes-store/nike">{<Nike card={card} setCard={setCard} basketCount={basketCount} setBasketCount={setBasketCount} />}</Route>

        <Route path="/shoes-store/adidas">{<Adidas card={card} setCard={setCard} basketCount={basketCount} setBasketCount={setBasketCount} />}</Route>
        <Route path="/shoes-store/skechers">{<Skechers card={card} setCard={setCard} basketCount={basketCount} setBasketCount={setBasketCount} />}</Route>
        <Route path="/shoes-store/basket"><Basket card={card} setCard={setCard} basketCount={basketCount} setBasketCount={setBasketCount} /></Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
     <Banner1/>
     <Footer/>
    </div>
    </React.Fragment>
  );
}

export default App;
