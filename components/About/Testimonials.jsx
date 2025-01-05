import styled from "styled-components";
import home from "../../public/home.jpeg";
import Image from "next/image";
import bgLines from "../../public/bg-lines.png";
import { useState, useEffect } from "react";
import { urlFor } from "../../lib/client";

const TestimonialsWrapper = styled.div`
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  background-color: white;
  .inner-wrapper {
    width: 85%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 6rem 0;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 3rem;
      font-weight: 700;
      color: var(--secondary);
      text-align: center;
      line-height: 1;
      margin-bottom: 0;
    }
    .single-testimonial {
      display: flex;
      flex-direction: column;
      margin: 3rem 0;

      justify-content: center;
      align-items: center;

      img {
        margin: 2rem 0 1rem 0;
        border-radius: 50%;
      }
      .testimonial-body {
        text-align: center;
        font-size: 1.2rem;
      }
      .testimonial-name {
        font-weight: 600;
        font-size: 1.2rem;
        margin-bottom: 0;
      }
      .testimonial-designation {
        margin-top: 0;
        color: var(--secondary);
      }
    }
    .progress {
      ul {
        display: flex;
        gap: 20px;
        padding: 0;
        li {
          cursor: pointer;
          display: block;
          width: 18px;
          height: 18px;
          background: white;

          border: solid 2px #000;
          border-radius: 50%;

          transition: all ease 0.2s;
          position: relative;
          &.active {
            background: var(--secondary);
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    .inner-wrapper {
      padding: 8rem;
    }
  }
`;

const data = [
  {
    name: "Zayn Chowdhury",
    body: "They are in real estate business for quite sometime and are providing the best solutions",
    designation: "CEO of Deep Blue Creatives",
    image: home,
  },
  {
    name: "Zayn ",
    body: "They are in real estat and are providing the best solutions",
    designation: "CEO of Deep Blue Creatives",
    image: home,
  },
  {
    name: "Zayn ",
    body: "They are in real estat and are providing the best solutions",
    designation: "CEO of Deep Blue Creatives",
    image: home,
  },
];

const Testimonials = ({ testimonialsData }) => {
  const [currSlideIdx, setCurrSlideIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrSlideIdx((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currSlideIdx]);

  return (
    <TestimonialsWrapper currSlideIdx={currSlideIdx}>
      <div className="inner-wrapper">
        <h2>
          Over 10000 satisfied <br />
          customers
        </h2>

        <div className="single-testimonial">
          <Image
            src={urlFor(testimonialsData[currSlideIdx]?.person_img).url()}
            alt="portfolio-image"
            width={100}
            height={100}
          />
          <p className="testimonial-body">
            {testimonialsData[currSlideIdx]?.desc
              ? testimonialsData[currSlideIdx].desc[0]?.children[0]?.text
              : ""}
          </p>
          <p className="testimonial-name">
            {testimonialsData[currSlideIdx]?.name}
          </p>
          <p className="testimonial-designation">
            {testimonialsData[currSlideIdx]?.affiliations}
          </p>
        </div>
        <div className="progress">
          <ul>
            {testimonialsData.map((obj, idx) => (
              <li
                key={idx}
                onClick={() => setCurrSlideIdx(idx)}
                className={idx === currSlideIdx ? `active` : undefined}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
