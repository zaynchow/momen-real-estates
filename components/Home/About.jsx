import Testimonial from "./Testimonial/Testimonial";
import Map from "./Map";
import styled from "styled-components";
import darkBg from "../../public/home-dark-bg.jpeg";
import PortableText from "react-portable-text";

const AboutWrapper = styled.div`
  width: 100%;
  background-image: url(${darkBg?.src});
  background-size: cover;
  height: 100%;

  .about-section {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding-top: 0;
  }

  .left {
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 2rem 0 2rem 0;
  }

  .left h2 {
    font-weight: 700;
  }

  .left p {
    font-weight: 400;
  }
  .map-container {
    height: 500px;
    width: 100%;

    margin: 2rem 0;
  }
  .map-info-window h5 {
    font-size: 1.4rem;
    margin: 0;
    margin: 6px 0;
    color: var(--secondary);
  }

  .map-info-window a {
    font-size: 0.9rem;
    text-decoration: underline;
  }

  @media only screen and (min-width: 600px) {
    .about-section {
      flex-direction: row;
      padding: 5.6rem 0;
    }
    .map-container {
      width: 50%;
    }
    .left {
      padding: 3rem;
      width: 50%;
    }
  }
`;

const About = ({ about, testimonials, project_locations }) => {
  return (
    <AboutWrapper>
      <div className="about-section">
        <div className="left">
          <div className="bio">
            <h2>Who are we</h2>
            <PortableText
              content={about}
              serializers={{ break: (props) => <br /> }}
            />
          </div>
          <Testimonial testimonials={testimonials} />
        </div>
        <Map project_locations={project_locations} />
      </div>
    </AboutWrapper>
  );
};

export default About;
