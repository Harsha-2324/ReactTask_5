import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Check if the current route is "/cart"
  if (location.pathname === "/cart") {
    return null; // Don't render the Header component on the "Cart" page
  }
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./image/Iphone_15Pro.png"
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="./image/Airpods_Pro_2.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="./image/Apple_Watch.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="./image/IpadPro.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="./image/ipad_Air.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src="./image/Mac.png" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img
              src="./image/MacBook_Air.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="./image/HomePod.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="./image/Apple_TV.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Header;
