import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Badge } from 'react-bootstrap';
import "./NavbarStyles.css";
import { FaShoppingCart, FaHeart, FaUserCircle } from "react-icons/fa";

class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        clicked: false,
        cartItems: [],
        cartItemCount: 0
      };
    }
  
    componentDidMount() {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const cartItemCount = cartItems.reduce(
        (count, item) => count + item.quantity,
        0
      );
      this.setState({ cartItems, cartItemCount });
    }
  
    componentDidUpdate() {
      localStorage.setItem("cartItems", JSON.stringify(this.state.cartItems));
    }
  
    handleClick = () => {
       
      this.setState({ clicked: !this.state.clicked });
    };
  
    render() {
      const props = this.props
      console.log('thisprops::', props)
      
      const styles = { color: "#FBD786" };
      
      const basketRedirect = () => {
        window.location.replace("/basket")
      };

      return(
          <>
          <nav>
              <div id="left-text">
              <a href="index.html">
              <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> 
              <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> 
              <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path>
              <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg>
              </a>
              <h2 className="text"> Talk Shoes</h2>
              </div>
              <div>
                  <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                      <li><a className="active" href="index.html">Home</a></li>
                      <li><Link to="/shoes-store/basket"><a className="basket" href="basket" ><FaShoppingCart /><Badge variant="warning">{props.basketCount}</Badge></a></Link></li>
                      <li> <a href="index.html" className="fas "> <FaHeart/></a></li>
                      <li> <a href="index.html" className="fas "> <FaUserCircle/></a></li>
                  </ul>
              </div>
              <div id="mobile" onClick={this.handleClick}>
                   <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} style={styles} ></i>
              </div>
          </nav>
          </>
      )
    }
}

export default Navbar;