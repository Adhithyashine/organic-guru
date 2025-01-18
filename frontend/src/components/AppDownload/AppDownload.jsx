import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <section className="app-download" id="app-download">
      <div className="about-header">
        <h1>About Us</h1>
      </div>

      <div className="about-content-grid">
        {/* Column 1 */}
        <div className="about-column">
          <h2>Who We Are</h2>
          <p>
            At Organic Guru, we are committed to connecting rural farmers with urban consumers, creating a reliable and direct supply chain. By promoting traditional farming and natural fertilization, we provide high-quality, healthy food that is free from preservatives and adulteration. Our mission is to ensure fair prices for farmers, reduce wastage, and offer genuine organic products to urban families who are increasingly health-conscious and looking for authenticity.
          </p>
        </div>

        {/* Column 2 */}
        <div className="about-column">
          <h2>What We Do</h2>
          <div className="sub-sections">
            <div className="section-for">
              <h3>For Farmers:</h3>
              <ul>
                <li>Provide direct access to urban markets at fair prices.</li>
                <li>Support sustainable farming practices for eco-friendly production.</li>
                <li>Help reduce wastage by sourcing fresh produce directly from the farm.</li>
              </ul>
            </div>
            <div className="section-for">
              <h3>For Urban Consumers:</h3>
              <ul>
                <li>Deliver fresh, healthy, and truly organic food straight from the farms.</li>
                <li>Ensure all products are free from harmful additives and preservatives.</li>
                <li>Help support local farmers while enjoying authentic, high-quality organic produce.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="about-column">
          <h2>Why Join Us?</h2>
          <div className="sub-sections">
            <div className="section-for">
              <h3>For Farmers:</h3>
              <ul>
                <li>Access to fair prices and trustworthy buyers.</li>
                <li>Benefit from a platform promoting sustainability and eco-friendliness.</li>
                <li>Join a network of farmers committed to providing healthy, organic products.</li>
              </ul>
            </div>
            <div className="section-for">
              <h3>For Urban Consumers:</h3>
              <ul>
                <li>Genuine organic products sourced from dedicated farmers.</li>
                <li>Support a movement bridging rural farmers and urban consumers.</li>
                <li>Enjoy fresh organic products delivered to your door.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* AppDownload Section */}
      <div className="app-download-content">
        <h5>Welcome to Organic Guru</h5>
        <div className="logo-container">
          <img src={assets.logo} alt="Organic Guru Logo" className="logo" />
        </div>

        <p>
          Welcome to Organic Guru, your trusted partner in bringing nature's finest to your doorstep. We believe in the power of organic products to nurture not only your body but also the planet. Our mission is to offer sustainably sourced, chemical-free, and wholesome products that promote a healthy lifestyle. Founded by a team of passionate individuals dedicated to promoting a healthier way of living, Organic Guru curates a wide range of organic goods—from fresh produce to eco-friendly home products. We are committed to supporting local farmers and businesses, ensuring that every product we offer is ethically sourced and of the highest quality. At Organic Guru, we believe that small changes can make a big difference. Join us in embracing a more sustainable future, one organic product at a time.
        </p>
      </div>
    </section>
  );
};

export default AppDownload;
