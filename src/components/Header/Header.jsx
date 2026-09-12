import "./Header.css";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Souvanik's Food App Logo" />
      </div>
      <div className="location">📍 Kolkata , West Bengal,India</div>
      <div className="cart">
        <button className="cart-button">Cart 🛒</button>
      </div>
    </div>
  );
};

export default Header;