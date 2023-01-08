import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import bgLines from "../../public/bg-lines.png";
import { useRef } from "react";
import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const HeroImageContainer = styled.div`
  overflow: hidden;
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;

  margin: auto;
  padding: 40px 0px 50px 0px;

  div {
    display: flex;

    column-gap: 25px;
    overflow: scroll;
    cursor: grab;
    justify-content: flex-start;

    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    img {
      width: auto;
      display: block;
    }
  }
`;

const HeroImages = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollLeft = 774;
  });

  return (
    <HeroImageContainer>
      <ScrollContainer ref={ref} id="scroll" className="scroll">
        <Image src="/img2.jpg" width={500} height={300} />
        <Image src="/img3.jpg" width={500} height={300} />
        <Image src="/img1.jpg" width={700} height={300} />
        <Image src="/img1.jpg" width={500} height={300} />
        <Image src="/home.jpeg" width={500} height={300} />
        <Image src="/img1.jpg" width={500} height={300} />
        <Image src="/img1.jpg" width={500} height={300} />
        <Image src="/img3.jpg" width={500} height={300} />
      </ScrollContainer>
    </HeroImageContainer>
  );
};

export default HeroImages;
