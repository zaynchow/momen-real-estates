import Testimonial from "./Testimonial/Testimonial";
import Map from "./Map";

const About = ({ about, testimonials, project_locations }) => {
  return (
    <div className="about-wrapper">
      <div className="about-section">
        <div className="left">
          <div className="bio">
            <h2>Who are we</h2>
            <p>{about}</p>
          </div>
          <Testimonial testimonials={testimonials} />
        </div>

        <Map project_locations={project_locations} />
      </div>
    </div>
  );
};

export default About;
