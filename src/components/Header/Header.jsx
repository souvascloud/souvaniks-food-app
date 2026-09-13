import "./Header.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [siginBtnName, setSignInButtonName] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Souvanik's Food App Logo" />
        </Link>
      </div>
      <div className="location">📍 Kolkata , West Bengal,India</div>
      <nav className="nav-links">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <div className="header-actions">
        <button className="cart-button">Cart 🛒</button>
        <div className="user-section">
          <button
            className="login-btn"
            onClick={() => {
              setSignInButtonName((prev) =>
                prev === "Login" ? "Logout" : "Login",
              );
            }}
          >
            {siginBtnName === "Logout" && <span>👤</span>}
            {siginBtnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
