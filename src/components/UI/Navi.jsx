import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/Navi.css';
import logo from '../../assets/all-images/logo bg removed (2).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext'; 

function Navigation(){
  const { getCartCount } = useCart();
  return (
    <nav className="container nav">
    <div className="logo">
      <img src={logo} alt="NXT LVL" />
      {/* <span>NXT LVL</span> */}
    </div>
    <ul>
      <li>
        <Link to="/" className="selected">
          Home
        </Link>
      </li>
      
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/services">Service</Link>
      </li> 
      {/* <li>
        <Link to="/Login">Login</Link>
      </li> */}
      
    </ul>
    <div className="icon-link">
    <Link to="/Cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                {getCartCount() > 0 && (
                    <span className="cart-count">{getCartCount()}</span>
                )}
            </Link>
      </div>
    {/* <div className="icon-link">
    <Link to="/Login">
                <FontAwesomeIcon icon={faUser} />
               
            </Link>
      </div> */}
  </nav>
    
  );
}

export default Navigation;