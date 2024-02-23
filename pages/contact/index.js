import React from "react";
import styled from "styled-components";
import bgLines from "../../public/bg-lines.png";
import { Hero, ContactSection } from "../../components/Contact";

export const Wrapper = styled.div`
  margin: 0 auto;
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  width: 100%;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Hero />
      <ContactSection />
    </Wrapper>
  );
};

export default Contact;
