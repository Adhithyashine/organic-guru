import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <h5>About Us</h5>
      <div className="logo-container">
          <img src={assets.logo} alt="Organic Guru Logo" className="logo" />
        </div>
      
      <p>
        Welcome to Organic Guru, your trusted partner in bringing natures
        finest to your doorstep. We believe in the power of organic products to
        nurture not only your body but also the planet. Our mission is to offer
        sustainably sourced, chemical-free, and wholesome products that promote
        a healthy lifestyle. Founded by a team of passionate individuals who are
        dedicated to promoting a healthier way of living, Organic Guru curates a
        wide range of organic goods—from fresh produce to eco-friendly home
        products. We are committed to supporting local farmers and businesses,
        ensuring that every product we offer is ethically sourced and of the
        highest quality. At Organic Guru, we believe that small changes can make
        a big difference. Join us in embracing a more sustainable future, one
        organic product at a time.
      </p>
      {/* <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div> */}
    </div>
  );
};

export default AppDownload;
