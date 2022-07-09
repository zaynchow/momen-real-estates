import FeaturedProject from "./FeaturedProject";

const Featured = () => {
  return (
    <div className="featured-section">
      <h2> Featured Projects</h2>
      <h4>
        Partner with the best Artisan, to transform your land into a milestone
      </h4>
      <div className="all-featured-projects">
        <FeaturedProject />
        <FeaturedProject />
        <FeaturedProject />
        <FeaturedProject />
      </div>
      <a href="/projects">View All Projects</a>
    </div>
  );
};

export default Featured;
