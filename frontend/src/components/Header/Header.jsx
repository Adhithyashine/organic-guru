import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Organic Guru</h2>
        <p>Directly From Farmers | All Kinds of Organic Products.</p>
        {/* <button>View Products</button> */}
        <button
          onClick={() =>
            document
              .getElementById("explore-menu")
              .scrollIntoView({ behavior: "smooth" })}
        >
          View Products
        </button>
      </div>
    </div>
  );
};

export default Header;
