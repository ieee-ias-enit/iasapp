import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="product-img">
          <img
            src="https://www.jotform.com/blog/wp-content/uploads/2020/06/7-Best-work-from-home-software-700x545.png"
            height="320"
            width="320"
            alt="Searching for internship"
          />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>IAS WEB APP</h1>
            <h2>by IEEE IAS ENIT SBC</h2>
            <p>
              Looking for an internship ?
              <br />
              Gain work experience
              <br />
              kickstart your career.
              <br />
              <strong>Find the right internship company for you !</strong>
            </p>
          </div>
          <div className="product-price-btn">
            <Link to="/iasapplication/About">
              <button>Know us !</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
