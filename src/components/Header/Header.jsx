import "./Header.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [siginBtnName, setSignInButtonName] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Souvanik's Food App Logo" />
      </div>
      <div className="location">📍 Kolkata , West Bengal,India</div>
      <div className="header-actions">
        <button className="cart-button">Cart 🛒</button>
        <div className="user-section">
          {siginBtnName === "Logout" && (
            <button className="profile-btn">👤</button>
          )}
          <button
            className="login-btn"
            onClick={() => {
              setSignInButtonName((prev) =>
                prev === "Login" ? "Logout" : "Login",
              );
            }}
          >
            {siginBtnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
