import React from "react";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Image from "next/image";
import Logo from "../../public/logo/MREL-Logo.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-sidebar">
        <span id="hero-logo">
          <Image src={Logo} alt="logo" layout="fill" />
        </span>

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
