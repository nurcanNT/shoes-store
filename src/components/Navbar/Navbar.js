import { Component } from "react";
import "./NavbarStyles.css";
import { FaShoppingCart, FaHeart, FaUserCircle } from "react-icons/fa";
class Navbar extends Component{
    state = {clicked:false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        const styles = { //icon color
            color: 'rgba(255, 166, 0, 0.801)',
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
            {/* <div className="icons">
                <div className="menu-icon">
                    <a href="#" className="fas" > <FaShoppingCart/></a>
                    <a href="#heart" className="fas "> <FaHeart/></a>
                    <a href="#" className="fas "> <FaUserCircle/></a>
                </div>
            </div> */}
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><a href="#" className="fas" > <FaShoppingCart/></a></li>
                    <li> <a href="#heart" className="fas "> <FaHeart/></a></li>
                    <li> <a href="#" className="fas "> <FaUserCircle/></a></li>
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