import Image from "next/image";
import img from "../../../public/img1.jpg";
import TestimonialBtn from "./TestimonialBtn";
import { useState } from "react";
import { useEffect } from "react";
import { urlFor } from "../../../lib/client";

const testimonial = ({ testimonials }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    timer();
  }, [slideIndex]);

  const timer = () => {
    if (animation) {
      setTimeout(() => {
        if (slideIndex !== testimonials.length) {
          setSlideIndex(slideIndex + 1);
        } else if (slideIndex === testimonials.length) {
          setSlideIndex(1);
        }
      }, 5000);
    }
  };

  const nextSlide = () => {
    setAnimation(false);
    if (slideIndex !== testimonials.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === testimonials.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    setAnimation(false);
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(testimonials.length);
    }
  };

  return (
    <div className="testimonial-section">
      <h2>What People Say</h2>
      <div className="single-testimonial">
        {testimonials.map((obj, index) => {
          return (
            <div
              className={
                slideIndex === index + 1
                  ? "single-slide  active-animation"
                  : " single-slide "
              }
              key={index}
            >
              <p>{obj.desc[0].children[0].text}</p>
              <div className="test-author">
                <div className="author-info">
                  <span className="test-img">
                    <Image src={urlFor(obj.person_img).url()} layout="fill" />
                  </span>
                  <p>
                    <span style={{ fontSize: "1.3rem" }}> {obj.name}</span>
                    <br />
                    {obj.affiliations}
                  </p>
                </div>
                <div className="test-btn-container">
                  <div className="test-buttons">
                    <TestimonialBtn moveSlide={prevSlide} direction="prev" />
                    <TestimonialBtn moveSlide={nextSlide} direction="next" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default testimonial;
