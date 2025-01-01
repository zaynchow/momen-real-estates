import Testimonial from "./Testimonial/Testimonial";
import styled from "styled-components";
import darkBg from "../../public/home-dark-bg.jpeg";

const AboutWrapper = styled.div`
  width: 100%;
  background-image: url(${darkBg?.src});
  background-size: cover;
  height: 100%;
  padding: 100px;
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
`;

const About = ({ testimonials }) => {
  return (
    <AboutWrapper>
      <div className="about-section">
        <h2>What People Say</h2>
        <Testimonial testimonials={testimonials} />
      </div>
    </AboutWrapper>
  );
};

export default About;
