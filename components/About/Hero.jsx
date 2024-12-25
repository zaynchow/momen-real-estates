import React from "react";
import wireframe from "../../public/img1.jpg";
import Image from "next/image";
import styled from "styled-components";
import PortableText from "react-portable-text";

const AboutHeroWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding-top: 40px;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  flex-direction: column;
  padding-bottom: 60px;
  .about-hero-image {
    position: relative;
    max-width: 1200px;
    width: 85%;
    column-gap: 100px;
    padding-bottom: 60px;
    height: 500px;
    max-height: 500px;
  }
  .hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    * {
      margin: 0;
    }
    h3 {
      margin-top: 50px;

      color: var(--secondary);
    }
    h1 {
      font-weight: 700;
      margin-top: 20px;
      margin-bottom: 30px;
    }
    h2 {
      text-align: center;
      font-weight: 400;
      font-size: 1.2rem;
    }
  }
`;

const Hero = ({ ourStoryData }) => {
  return (
    <AboutHeroWrapper>
      <div className="about-hero-image">
        <Image src={wireframe} alt="about-hero-image" fill />
      </div>
      <div className="hero-text">
        <h3>Bold . Definitive . Professional</h3>
        <h1>Our Story</h1>
        <h2>
          <PortableText
            content={ourStoryData[0]}
            serializers={{ break: (props) => <br /> }}
          />
        </h2>
      </div>
    </AboutHeroWrapper>
  );
};

export default Hero;
