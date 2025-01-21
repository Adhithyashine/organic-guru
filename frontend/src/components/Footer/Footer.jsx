import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img src={assets.logo} alt=""/> */}
          {/* <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link> */}
          <h2>Organic Guru</h2>
          <p>
            Based in the vibrant city of Bangalore, Karnataka, Organic Guru is
            dedicated to connecting you with authentic, farm-fresh organic
            products. We work closely with local farmers to bring you a diverse
            range of high-quality goods that promote a healthy lifestyle while
            supporting sustainable agriculture. Our mission is to create a
            community that values purity, eco-consciousness, and the hard work
            of farmers, fostering a greener and healthier future for all.
          </p>
          <h5>Follow Us On</h5>
          <div className="footer-social-icons">
            <a
              href="https://www.instagram.com/organic_fresh_guru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.instagram_icon} alt="Instagram Icon" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Organic Guru</h2>
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="#explore-menu">
              <li>Products</li>
            </a>
            <a href="#app-download">
             <li>About Us</li>
            </a>
            <a to="#footer">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
        {/* <div className="footer-content-right">
            <h2>Feel Free To Contact Us</h2>
            <ul> <li>PH: +91 9482764364</li>
                 <li>PH: +91 9663970627</li>
                 <li>Email:organicgurufresh@gmail.com</li>
            </ul>
        </div> */}
        <div className="footer-content-right">
          <h2>Feel Free To Contact Us</h2>
          <ul>
            <li>
              <a
                href="tel:+919482764364"
                className="hover:underline text-blue-500"
              >
                PH: +91 9482764364
              </a>
            </li>
            <li>
              <a
                href="tel:+919663970627"
                className="hover:underline text-blue-500"
              >
                PH: +91 9663970627
              </a>
            </li>
            <li>
              <a
                href="mailto:organicgurufresh@gmail.com"
                className="hover:underline text-blue-500"
              >
                Email:info@theorganicguru.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © organicguru | All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
