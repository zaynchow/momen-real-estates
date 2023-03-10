import { useRef } from "react";
import Hero from "../../components/Single-Project/Hero";
import { client } from "../../lib/client";

import {
  Video,
  Location,
  Features,
  Overview,
  Floor,
  Similar,
  Contact,
  HeroImages,
} from "../../components/Single-Project";

const SingleProject = ({
  projects,
  currProj,
  nearbyRestaurants,
  nearbySchools,
  nearbyHospitals,
}) => {
  const scrollRef = useRef();
  return (
    <>
      <HeroImages />
      <Hero scrollRef={scrollRef} />
      <Overview />
      <Features />
      <Location
        currProj={currProj}
        nearbyRestaurants={nearbyRestaurants.results}
        nearbySchools={nearbySchools.results}
        nearbyHospitals={nearbyHospitals.results}
      />
      <Video />
      <Floor />
      <Similar projects={projects} />
      <Contact scrollRef={scrollRef} />
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

export const getStaticProps = async (context) => {
  const query = `*[_type=="projects"]`;

  let projects = await client.fetch(query);
  let currProj;
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].slug.current == context.params.slug) {
      currProj = projects[i];
    }
  }

  let nearbyRestaurants = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currProj.map_pos.lat}%2C${currProj.map_pos.lng}&radius=1000&type=restaurant&key=AIzaSyAGussVUAxuUeKa3y1-SmS1hddouoRy4PA`
  ).then((res) => res.json());

  let nearbySchools = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currProj.map_pos.lat}%2C${currProj.map_pos.lng}&radius=1000&type=school&key=AIzaSyAGussVUAxuUeKa3y1-SmS1hddouoRy4PA`
  ).then((res) => res.json());
  let nearbyHospitals = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currProj.map_pos.lat}%2C${currProj.map_pos.lng}&radius=1000&type=hospital&key=AIzaSyAGussVUAxuUeKa3y1-SmS1hddouoRy4PA`
  ).then((res) => res.json());
  //TODO: change to Env variabale  google map key

  return {
    props: {
      projects,
      currProj,
      nearbyRestaurants,
      nearbySchools,
      nearbyHospitals,
    },
  };
};
