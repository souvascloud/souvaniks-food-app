import './popularRestaurants.css';
import RestaurantCard from "./RestaurantCard";
import restaurants from "../../data/restaurants";
const PopularRestaurants = () => {
  return (
    <div className="popular-restaurants">
      <h2>Popular Restaurants</h2>

      <ul className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <RestaurantCard
              name={restaurant.name}
              image={restaurant.image}
              cuisine={restaurant.cuisine}
              price={restaurant.price}
              rating={restaurant.rating}
              deliveryTime={restaurant.deliveryTime}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularRestaurants;
