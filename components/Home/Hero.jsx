import React from "react";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

import Slider from "./Slider/slider";

const Hero = ({ sliderContent }) => {
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
      <Slider sliderContent={sliderContent} />
    </div>
  );
};

export default Hero;
