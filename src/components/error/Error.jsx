import {  useRouteError } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <div className="error-card">
        <div className="error-emoji">🍔</div>

        <h1>{error?.status || "404"}</h1>

        <h2>Oops! This page is not on the menu.</h2>

        <p>
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to something delicious.
        </p>

        {/* <Link to="/" className="home-btn">
          🍕 Back to Home
        </Link> */}
      </div>
    </div>
  );
};

export default Error;