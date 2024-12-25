import Image from "next/image";
import SliderButton from "../../lib/SliderButton";
import { useState } from "react";
import { useEffect } from "react";
import { urlFor } from "../../../lib/client";
import styled from "styled-components";

const TestimonialWrapper = styled.div`
  .test-img {
    position: relative;
    display: inline-block;
    width: 4rem;
    height: 4rem;
  }

  .test-img img {
    border-radius: 50% !important;
  }

  .author-info {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    width: 100%;
  }

  .test-author {
    display: flex;
    align-items: center;
  }
  .test-author p {
    font-size: 0.8rem;
  }

  .test-author p span {
    font-size: 1rem;
  }

  .test-btn-container {
    position: relative;
  }

  .test-btn {
    display: inline-block;
    padding: 0.4rem;
    background-color: var(--secondary);
    color: black;
    font-size: 2rem;
    bottom: 0;
    cursor: pointer;
    border: none;
  }
  .test-btn:hover {
    color: white;
  }
  .test-next {
    right: 0;
  }

  .test-prev {
    right: 2.6rem;
  }
  .single-testimonial {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .single-slide {
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
  }

  .active-animation {
    opacity: 1;
    display: block;
  }

  .testimonial-section {
    width: 72%;
  }

  .test-buttons,
  .test-btn,
  .test-btn-container {
    display: flex;
    column-gap: 5px;
    opacity: 1;
    transition: none;
  }
`;

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
    <TestimonialWrapper>
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
    </TestimonialWrapper>
  );
};

export default Testimonial;
