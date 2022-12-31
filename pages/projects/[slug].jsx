import React from "react";
import Hero from "../../components/Single-Project/Hero";
import { client } from "../../lib/client";
import Overview from "../../components/Single-Project/Overview";
import Features from "../../components/Single-Project/Features";
import Location from "../../components/Single-Project/Location";

const SingleProject = ({ projects }) => {
  return (
    <>
      <Hero />
      <Overview />
      <Features />
      <Location projects={projects} />
    </>
  );
};

export default SingleProject;

export async function getStaticPaths() {
  const query = `*[_type=="projects"]{slug{current}}`;

  let projects = await client.fetch(query);

  const paths = projects.map((proj) => ({
    params: {
      slug: proj.slug.current,
    },
  }));

  return { paths, fallback: "blocking" };
}

export const getStaticProps = async () => {
  const query = `*[_type=="projects"]`;

  let projects = await client.fetch(query);

  return {
    props: {
      projects,
    },
  };
};
