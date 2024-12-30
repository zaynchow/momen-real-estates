import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import bgLines from "../../public/bg-lines.png";
import { useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { urlFor } from "../../lib/client";

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

const HeroImages = ({ currProj }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollLeft = 774;
  });

  return (
    <HeroImageContainer>
      <ScrollContainer ref={ref} id="scroll" className="scroll">
        {currProj?.images?.map((image, index) => (
          <img src={urlFor(image).url()} height={300} alt="home" key={index} />
        ))}
      </ScrollContainer>
    </HeroImageContainer>
  );
};

export default HeroImages;
