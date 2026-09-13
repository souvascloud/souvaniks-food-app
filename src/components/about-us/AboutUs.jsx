import "./About.css";

const AboutUs = () => {
  return (
      <div className="about-page">
        <section className="about-hero">
          <div className="hero-text">
            <h1>Good Food. Happy People. ❤️</h1>
            <p>
              Welcome to <strong>Souvanik's Food App</strong> — a place where
              finding your favorite meal is as enjoyable as eating it. Whether
              you're craving a cheesy pizza, spicy biryani, or a comforting cup
              of coffee, we've got something waiting for you.
            </p>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop"
              alt="Delicious food"
            />
          </div>
        </section>

        <section className="about-section">
          <div className="about-card">
            <img
              src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=600&auto=format&fit=crop"
              alt="Food delivery"
            />
            <div className="about-card-content">
              <h2>Why We Built It</h2>
              <p>
                We wanted food ordering to feel simple and enjoyable. Instead of
                scrolling endlessly, our goal is to help you discover great
                restaurants, place orders quickly, and enjoy every meal with
                less hassle.
              </p>
            </div>
          </div>

          <div className="about-card">
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&auto=format&fit=crop"
              alt="Chef cooking"
            />
            <div className="about-card-content">
              <h2>Fresh Food, Real Choices</h2>
              <p>
                From iconic Kolkata restaurants to cozy cafés, we believe every
                meal has a story. That's why our app highlights a variety of
                cuisines, trusted restaurants, and dishes people genuinely love.
              </p>
            </div>
          </div>

          <div className="about-card">
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&auto=format&fit=crop"
              alt="Friends enjoying food"
            />
            <div className="about-card-content">
              <h2>More Than an App</h2>
              <p>
                This project is also a journey of learning—built with React and
                Node.js to create a modern, fast, and user-friendly experience
                that feels close to a real food delivery platform.
              </p>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <h2>What Makes Us Special</h2>

          <div className="mission-grid">
            <div className="mission-item">
              <span>🚀</span>
              <p>Quick Delivery</p>
            </div>

            <div className="mission-item">
              <span>🍽️</span>
              <p>30+ Restaurants</p>
            </div>

            <div className="mission-item">
              <span>⭐</span>
              <p>Top Rated Food</p>
            </div>

            <div className="mission-item">
              <span>🛡️</span>
              <p>Safe & Secure</p>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Your next favorite meal is waiting.</h2>
              <p>
                Every great meal begins with a craving. Whether it's a quick
                lunch, a family dinner, or a late-night snack, we're here to
                help you discover delicious food from restaurants you'll love.
              </p>

              <button className="cta-btn">Explore Restaurants 🍔</button>
            </div>

            <div className="cta-image">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop"
                alt="Pizza"
              />
            </div>
          </div>
        </section>
      </div>
  );
};

export default AboutUs;
