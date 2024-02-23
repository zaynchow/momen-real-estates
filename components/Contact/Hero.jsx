import React from "react";
import styled from "styled-components";
import Image from "next/image";
import wireframe from "../../public/img1.jpg";
import Button from "../lib/Button";

const ContactHeroWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding-top: 40px;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  gap: 50px;
  padding-bottom: 80px;
  h2 {
    font-weight: 400;
    font-size: 1rem;
  }
  h1 {
    font-weight: 600;
  }

  .action-btns {
    display: flex;
    gap: 20px;
    a {
      margin-top: 20px;
    }
  }

  .contact-hero-image {
    img {
      border-radius: 50%;
    }
  }
`;
const Hero = () => {
  return (
    <ContactHeroWrapper>
      <div className="hero-text">
        <h1>Come Visit Us</h1>
        <p>
          The chronicle of Navana Real Estate Ltd. (NREL) is a glorious history
          to be told. It is a history of one{" "}
        </p>
        <h2>
          Bari Momen's Heights, <br /> Plot-157, Road-12, Block- E,
          <br /> Banani, Dhaka - 1213 <br />
          Bangladesh
        </h2>
        <h2>
          {/* <PortableText
      content={ourStoryData[0]}
      serializers={{ break: (props) => <br /> }}
    /> */}
        </h2>
        <div className="action-btns">
          <Button href="/">Get Directions</Button>
          <Button href="/" light>
            Open Hours
          </Button>
        </div>
      </div>
      <div className="contact-hero-image">
        <Image
          src={wireframe}
          alt="about-hero-image"
          width={400}
          height={400}
        />
      </div>
    </ContactHeroWrapper>
  );
};

export default Hero;
