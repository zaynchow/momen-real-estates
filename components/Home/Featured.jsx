import styled from "styled-components";
import FeaturedProject from "./FeaturedProject";
import bgLines from "../../public/bg-lines.png";

const FeaturedWrapper = styled.div`
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;

  padding-top: 3rem;
  text-align: center;
  padding-bottom: 8rem;
  position: relative;

  .featured-container {
    width: 85%;
    max-width: 1200px;
    margin: auto;
  }
  .more-projects {
    padding: 1rem 2.5rem;

    margin-top: 4rem;
    color: white;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: transparent;
      color: var(--secondary);
      outline: var(--secondary);
      border: 1px solid var(--secondary);
    }

    display: inline-block;
    padding: 15px 30px;
    background-color: #e7ae4b;
  }

  h2 {
    text-align: center;
    font-weight: 700;
    line-height: 0;
    margin: 10px;
  }

  h4 {
    font-weight: 400;
    text-align: center;
  }

  .all-featured-projects {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 50px;
    margin-top: 2rem;
    padding: 0 20px;
  }

  @media only screen and (min-width: 600px) {
    padding-top: 8rem;
    .all-featured-projects {
      margin-top: 3.5rem;
      flex-direction: row;
      padding: 0;
      gap: 30px;
    }
    h2 {
      margin: inherit;
    }
  }
`;

const Featured = ({ projects }) => {
  return (
    <FeaturedWrapper id="home-featured">
      <div className="featured-container">
        <h2> Featured Projects</h2>
        <h3>Discover iconic homes crafted with excellence</h3>
        <div className="all-featured-projects">
          {projects.map((obj, index) => (
            <FeaturedProject key={index} project={obj} />
          ))}
        </div>
        <a href="/projects" className="more-projects">
          View All Projects
        </a>
      </div>
    </FeaturedWrapper>
  );
};

export default Featured;
