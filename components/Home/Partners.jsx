import React from "react";
import styled from "styled-components";
import bgLines from "../../public/bg-lines.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { urlFor } from "../../lib/client";

const PartnerWrapper = styled.div`
  background-color: rgba(184, 184, 184, 0.3);
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;

  .partners-section {
    margin: 0 auto;
    width: 85%;
    max-width: 1200px;
    padding: 3rem 0rem;
    display: flex;
    justify-content: center;

    > div:nth-child(1) {
      width: 30%;
      h3 {
        font-size: 1.8rem;
        font-weight: 700;
      }
    }
    > div:nth-child(2) {
      width: 70%;
    }
  }
`;

const Partners = ({ partnerLogos }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <PartnerWrapper>
      <div className="partners-section">
        <div>
          <h3>Our Partners</h3>
        </div>
        <div>
          <Slider {...settings}>
            {partnerLogos?.map((logo) => (
              <div className="slide">
                <img src={urlFor(logo.image).url()} height={100} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </PartnerWrapper>
  );
};

export default Partners;
