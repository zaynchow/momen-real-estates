import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import styled from "styled-components";

const Btn = styled.div`
  .btn {
    display: inline-block;
    padding: 0.25rem;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.arrowColor};
    font-size: 2rem;

    bottom: 0;
    cursor: pointer;
    border: none;
  }
  .btn:hover {
    color: ${(props) => props.hoverColor};
  }
  .next {
    right: 0;
  }

  .prev {
    right: 2.6rem;
  }
`;

const SliderButton = ({
  moveSlide,
  direction,
  backgroundColor,
  arrowColor,
  hoverColor,
}) => {
  return (
    <Btn
      backgroundColor={backgroundColor}
      arrowColor={arrowColor}
      hoverColor={hoverColor}
    >
      <a
        type="button"
        className={direction === "next" ? "btn next" : "btn prev"}
        onClick={moveSlide}
      >
        {direction === "next" ? (
          <ArrowForwardOutlinedIcon />
        ) : (
          <ArrowBackOutlinedIcon />
        )}
      </a>
    </Btn>
  );
};

export default SliderButton;
