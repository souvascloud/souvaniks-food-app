import "./RestaurantDetails.css";

const menuData = [
  {
    category: "Recommended",
    items: [
      {
        id: 1,
        name: "Chelo Kebab",
        price: 545,
        description:
          "Peter Cat's signature kebab served with butter rice.",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop",
      },
      {
        id: 2,
        name: "Chicken Steak",
        price: 495,
        description: "Grilled chicken with vegetables and pepper sauce.",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        id: 3,
        name: "Chocolate Brownie",
        price: 225,
        description: "Warm brownie served with vanilla ice cream.",
        image:
          "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=500&auto=format&fit=crop",
      },
    ],
  },
];

const RestaurantDetails = () => {
  return (
    <div className="restaurant-page">
      {/* Hero Banner */}

      <div className="hero-banner">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1400&auto=format&fit=crop"
          alt="Peter Cat"
        />
      </div>

      {/* Restaurant Info */}

      <div className="restaurant-card">
        <div className="restaurant-header">
          <div>
            <h1>Peter Cat</h1>

            <p>Mughlai • Continental • Park Street, Kolkata</p>
          </div>

          <div className="rating-box">
            ⭐ 4.8
            <span>12.5k ratings</span>
          </div>
        </div>

        <div className="restaurant-meta">
          <div>
            <strong>28-35 min</strong>

            <span>Delivery Time</span>
          </div>

          <div>
            <strong>₹900</strong>

            <span>For Two</span>
          </div>

          <div>
            <strong>3.2 km</strong>

            <span>Distance</span>
          </div>
        </div>

        <div className="offer-strip">
          🎉 Flat ₹150 OFF on orders above ₹799
        </div>
      </div>

      {/* Menu */}

      {menuData.map((section) => (
        <section className="menu-section" key={section.category}>
          <h2>{section.category}</h2>

          {section.items.map((item) => (
            <div className="menu-item" key={item.id}>
              <div className="menu-info">
                <h3>{item.name}</h3>

                <p className="price">₹{item.price}</p>

                <p className="description">{item.description}</p>
              </div>

              <div className="menu-image">
                <img src={item.image} alt={item.name} />

                <button>ADD</button>
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default RestaurantDetails;