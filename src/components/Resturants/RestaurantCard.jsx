import "./RestaurantCard.css";
import { useState } from "react";
const RestaurantCard = ({
  name,
  image,
  cuisine,
  price,
  rating,
  deliveryTime,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="restaurant-card">
      <div className="image-wrapper">
        <img src={image} alt={name} />

        <span className="heart" onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? "❤️" : "🤍"}
        </span>

        <div className="image-overlay">
          <h3>{name}</h3>
        </div>
      </div>

      <div className="card-content">
        <div className="top-row">
          <span className="cuisine">{cuisine}</span>
          <span className="rating-badge">⭐ {rating}</span>
        </div>

        <p className="price">₹{price} for one</p>

        <p className="delivery">🛵 {deliveryTime}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
