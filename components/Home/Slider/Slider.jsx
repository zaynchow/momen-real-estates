import { useState } from "react";
import BtnSlider from "./BtnSlider.js";

import { urlFor } from "../../../lib/client.js";
import { useEffect } from "react";
import Button from "../../lib/Button.jsx";
import styled from "styled-components";

const SliderWrapper = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;

  .desc a {
    margin-top: 4rem;
  }

  .desc h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 900;
    font-size: 4.5rem;
    margin: 0;
    color: #ffffff;
    text-shadow: 3.07px 2.07px 12px #000000;
    text-shadow: 18.0642px 18.0642px 36.1284px rgba(0, 0, 0, 0.75);
    line-height: 1;
  }

  .desc h3 {
    font-family: "Playfair Display", serif;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    color: #ffffff;
    text-shadow: 3.07px 2.07px 12px #000000;
    text-shadow: 18.0642px 18.0642px 36.1284px rgba(0, 0, 0, 0.75);
    line-height: 0;
  }

  .desc {
    position: absolute;
    top: 35%;
    margin-left: 1rem;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
  }

  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .active-anim {
    opacity: 1;
  }

  .btn-slide {
    position: absolute;
    display: none;
  }

  .prev {
    right: 150px;
  }
  .next {
    right: 100px;
  }

  .text-active {
    opacity: 1;
  }

  @media only screen and (min-width: 600px) {
    width: 72%;
    height: 100vh;
    .desc {
      margin-left: 3rem;
    }
    .desc h2 {
      font-size: 6rem;
      line-height: 0.8;
    }

    .desc h3 {
      font-size: 40px;
    }
    .btn-slide {
      display: inline-block;
      padding: 0.5rem 1.1rem;

      background-color: white;
      color: black;
      font-size: 2rem;
      bottom: 30px;
      cursor: pointer;
      border: none;
    }
  }
`;

const Slider = ({ sliderContent }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    timer();
  }, [slideIndex]);

  const timer = () => {
    if (animation) {
      setTimeout(() => {
        if (slideIndex !== sliderContent.length) {
          setSlideIndex(slideIndex + 1);
        } else if (slideIndex === sliderContent.length) {
          setSlideIndex(1);
        }
      }, 5000);
    }
  };

  const nextSlide = () => {
    setAnimation(false);
    if (slideIndex !== sliderContent.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderContent.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    setAnimation(false);
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderContent.length);
    }
  };

  return (
    <SliderWrapper>
      {sliderContent.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            key={index}
          >
            <img
              className="slide-img"
              src={urlFor(sliderContent[index])}
              alt=""
            />
            <div
              className={slideIndex === index + 1 ? "desc text-active" : "desc"}
            >
              <h3>{obj.subtitle}</h3>
              <h2>{obj.caption}</h2>
              <Button href={"/projects"} isLink>
                View Projects
              </Button>
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
    </SliderWrapper>
  );
};

export default Slider;
