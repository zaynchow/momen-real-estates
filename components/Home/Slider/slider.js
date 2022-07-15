import { useState } from "react";
import BtnSlider from "./BtnSlider.js";

import { urlFor } from "../../../lib/client.js";
import { useEffect } from "react";

const slider = ({ sliderContent }) => {
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
    <div className="container-slider">
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
              <a href="/projects">View Project</a>
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
      {/* <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => {
              setSlideIndex(index + 1);
            }}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default slider;
