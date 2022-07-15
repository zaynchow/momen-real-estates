import { client } from "../../lib/client";

const About = ({ about }) => {
  return (
    <div className="about-section">
      <div className="left">
        <div className="bio">
          <h2>Who are we</h2>
          <p>{about}</p>
        </div>
        <div className="testimonial">
          <h2>What People Say</h2>
          <p>
            They are in real estate business for quite sometime and are
            providing the best solutions.
          </p>
        </div>
      </div>
      <div className="map">
        <div>fdf</div>
      </div>
    </div>
  );
};

export default About;
