import React from "react";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-sidebar">
        <div className="hero-sidebar-content">
          <h1>
            Join with Momen Real Estates LTD for a commitment to quality &
            attention to sofistication.
          </h1>
          <span>
            <ArrowDownwardOutlinedIcon className="hero-sidebar-icon" />
          </span>
        </div>
      </div>
      <div className="hero-slider">
        <div className="slider-images">
          <div className="desc">
            <h3>Momen's</h3>
            <h2>Apon nibash</h2>
            <a href="/projects">View Project</a>
          </div>
        </div>
        <span>
          <ArrowBackOutlinedIcon className="hero-slider-icon slider-left-arrow" />
        </span>
        <span>
          <ArrowForwardOutlinedIcon className="hero-slider-icon slider-right-arrow" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
