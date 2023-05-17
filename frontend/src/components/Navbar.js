import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = ({click}) => {
    return (
        <nav className="navbar">
            {/*lgogo*/}
            <div className="navbar__logo">
                <h2>Shopping Cart</h2>
            </div>

            {/*links*/}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__links">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                        Cart
                        <span className="cartlogo__badge">0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
            </ul>

            {/*hamburger menu*/}
            <div className="hamberger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
};

export default Navbar;
