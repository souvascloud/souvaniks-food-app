import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>🍔 Souvanik's Food App</h3>
      <p>Delicious food delivered to your doorstep.</p>

      <div className="footer-links">
        <span>About</span>
        <span>Contact</span>
        <span>Privacy</span>
      </div>

      <hr />

      <p className="copyright">
        © {new Date().getFullYear()} Souvanik's Food App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;