import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Button from "../lib/Button";
import PortableText from "react-portable-text";
import { urlFor } from "../../lib/client";

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
    max-width: 320px;
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

  .hero-text {
    h2 {
      font-weight: 500;
    }
  }

  .contact-hero-image {
    display: none;
    img {
      border-radius: 50%;
      border: 10px solid var(--secondary);
    }
  }
  @media only screen and (min-width: 600px) {
    .contact-hero-image {
      display: inline-block;
    }
  }
`;
const Hero = ({ officeAddress, contactPageContent }) => {
  return (
    <ContactHeroWrapper>
      <div className="hero-text">
        <h1>Come Visit Us</h1>
        <p>
          <PortableText
            content={contactPageContent.hero_description}
            serializers={{ break: (props) => <br /> }}
          />
        </p>
        <h2>{`Address: ${officeAddress}`}</h2>
        <h2></h2>
        <div className="action-btns">
          <Button
            href="https://maps.app.goo.gl/7tw28Dv3URrBstyY6"
            openInNewTab
            isLink
          >
            Get Directions
          </Button>
          <Button href="#footer-contact" light isLink>
            Open Hours
          </Button>
        </div>
      </div>
      <div className="contact-hero-image">
        <Image
          src={urlFor(contactPageContent.hero_image).url()}
          alt="about-hero-image"
          width={400}
          height={400}
        />
      </div>
    </ContactHeroWrapper>
  );
};

export default Hero;
