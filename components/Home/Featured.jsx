import FeaturedProject from "./FeaturedProject";

const Featured = ({ projects }) => {

  return (
    <div className="featured-section">
      <h2> Featured Projects</h2>
      <h3>
        Partner with the best Artisan, to transform your land into a milestone
      </h3>
      <div className="all-featured-projects">
        {projects.map((obj, index) => (
          <FeaturedProject key={index} project={obj} />
        ))}
      </div>
      <a href="/projects" className="more-projects">
        View All Projects
      </a>
    </div>
  );
};

export default Featured;
