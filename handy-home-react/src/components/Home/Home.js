import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";

function Home() {
  return (
    <div className="home">
      {/* <h1>Home</h1> */}
      {/* <Carousel/> */}
      
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="home-container">
            <h3>Handy Home Serviceman & Painting Services</h3>
            <h5>Complete Home Repair and Debris Removal</h5>
            <h6>Keith McDonald</h6>
              <h6>Hemet, CA</h6>
              
              <h6><a href="mailto:KeithMcDonald1971@gmail.com" className="email-link">KeithMcDonald1971@gmail.com</a></h6>
              
              <h6><a href="tel:9514426208" className="email-link">951-442-6208</a></h6>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
      
    </div>
  );
}

export default Home;
