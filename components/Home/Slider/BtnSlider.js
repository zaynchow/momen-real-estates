import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const BtnSlider = ({ moveSlide, direction }) => {
  return (
    <a
      type="button"
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      onClick={moveSlide}
    >
      {direction === "next" ? (
        <ArrowForwardOutlinedIcon />
      ) : (
        <ArrowBackOutlinedIcon />
      )}
    </a>
  );
};

export default BtnSlider;
