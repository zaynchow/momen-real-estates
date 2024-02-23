import Image from "next/image";
import img from "../../../public/img1.jpg";
import SliderButton from "../../lib/SliderButton";
import { useState } from "react";
import { useEffect } from "react";
import { urlFor } from "../../../lib/client";

const Testimonial = ({ testimonials }) => {
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
                    <Image
                      loader={() => urlFor(obj.person_img).url()}
                      src={urlFor(obj.person_img).url()}
                      fill
                      alt="testimonial photo"
                    />
                  </span>
                  <p>
                    <span style={{ fontSize: "1.3rem" }}> {obj.name}</span>
                    <br />
                    {obj.affiliations}
                  </p>
                </div>
                <div className="test-buttons">
                  <SliderButton
                    moveSlide={prevSlide}
                    direction="prev"
                    backgroundColor="var(--secondary)"
                    arrowColor="black"
                    hoverColor="white"
                  />
                  <SliderButton
                    moveSlide={nextSlide}
                    direction="next"
                    backgroundColor="var(--secondary)"
                    arrowColor="black"
                    hoverColor="white"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
