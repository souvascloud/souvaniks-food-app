import "./Contact.css";

const ContactUs = () => {
  return (
      <div className="contact-page">
        <section className="contact-hero">
          <div className="hero-overlay">
            <h1>Let's Talk! 🍔</h1>
            <p>
              Whether it's a question, feedback, or just saying hello, we'd love
              to hear from you.
            </p>
          </div>
        </section>

        <section className="contact-info">
          <div className="info-card">
            <span>📍</span>
            <h3>Visit Us</h3>
            <p>Kolkata, West Bengal, India</p>
          </div>

          <div className="info-card">
            <span>📧</span>
            <h3>Email</h3>
            <p>support@souvafoodapp.com</p>
          </div>

          <div className="info-card">
            <span>📞</span>
            <h3>Call Us</h3>
            <p>+91 8016654604</p>
          </div>

          <div className="info-card">
            <span>⏰</span>
            <h3>Support</h3>
            <p>10:00 AM – 11:00 PM</p>
          </div>
        </section>

        <section className="contact-container">
          <div className="contact-left">
            <h2>We're Always Here for You</h2>
            <p>
              Food tastes even better when the experience is smooth. If you have
              questions about orders, restaurants, or suggestions for improving
              the app, our team is ready to help.
            </p>

            <img
              src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=700&auto=format&fit=crop"
              alt="Food delivery"
            />
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />

            <textarea
              rows="5"
              placeholder="Tell us how we can help..."
            ></textarea>

            <button>Send Message</button>
          </div>
        </section>

        <section className="map-section">
          <h2>Serving Kolkata with ❤️</h2>
          <p>Fast delivery across your favorite neighborhoods.</p>

          <div className="map-container">
            <iframe
              title="Kolkata Map"
              src="https://www.google.com/maps?q=Kolkata,West+Bengal&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
  );
};

export default ContactUs;
