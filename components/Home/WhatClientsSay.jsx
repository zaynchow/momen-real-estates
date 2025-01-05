import Testimonial from "./Testimonial/Testimonial";
import styled from "styled-components";
import darkBg from "../../public/home-dark-bg.jpeg";

const WhatClientsSayWrapper = styled.div`
  width: 100%;
  background-image: url(${darkBg?.src});
  background-size: cover;
  height: 100%;
  padding: 50px 0;
  .about-section {
    color: white;
    width: 85%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding-top: 0;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (min-width: 768px) {
    padding: 100px;
  }
`;

const WhatClientsSay = ({ testimonials }) => {
  return (
    <WhatClientsSayWrapper>
      <div className="about-section">
        <h2>What Our Clients Say</h2>
        <Testimonial testimonials={testimonials} />
      </div>
    </WhatClientsSayWrapper>
  );
};

export default WhatClientsSay;
