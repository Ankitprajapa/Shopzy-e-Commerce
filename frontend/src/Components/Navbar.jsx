import React, { useContext } from "react";
import "../styles/Navbar.css";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthContext } from "../Context/AuthContext";


const Navbar = () => {
  // Get user and logout function from AuthContext
  const { user, logout } = useContext(AuthContext);

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Used to navigate programmatically
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">

      {/* Logo and Brand */}
      <div className="navbar-brand">
        <Link to="/">
          <img
            src="/Shopzylogo.png"
            alt="Shopzy"
            style={{
              height: "36px",
              width: "36px",
              borderRadius: "8px",
              objectFit: "cover",
              filter:
                "drop-shadow(0 2px 8px rgba(249, 115, 22, 0.35))",
            }}
          />
          Shopzy
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">

        {/* Shop */}
        <li>
          <Link to="/shop">Shop</Link>
        </li>

        {/* Cart */}
        <li>
          <Link to="/cart">
            Cart ({cartItems.length})
          </Link>
        </li>

        {/* Profile */}
        <li>
          <Link to="/profile">Profile</Link>
        </li>

        {/* User is logged in */}
        {user ? (
          <>
            {/* Username */}
            <li>
              <Link to="/profile">
                Hi, {user.name}
              </Link>
            </li>

            {/* Admin link only for admin */}
            {user.role === "admin" && (
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            )}

            {/* Logout */}
            <li>
              <button
                onClick={handleLogout}
                className="btn-logout"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          /* User is not logged in */
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}

      </ul>
    </nav>
  );
};

export default Navbar;