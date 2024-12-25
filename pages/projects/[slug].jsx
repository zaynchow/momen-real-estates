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
  contactInfo,
  nearbyRestaurants,
  nearbySchools,
  nearbyHospitals,
}) => {
  const scrollRef = useRef();

  return (
    <>
      <HeroImages />
      <Hero scrollRef={scrollRef} currProj={currProj} />
      <Overview currProj={currProj} />
      <Features currProj={currProj} />
      <Location
        currProj={currProj}
        nearbyRestaurants={nearbyRestaurants.results}
        nearbySchools={nearbySchools.results}
        nearbyHospitals={nearbyHospitals.results}
      />
      <Video currProj={currProj} />
      <Floor currProj={currProj} />
      <Similar projects={projects} />
      <Contact
        scrollRef={scrollRef}
        projectName={currProj.name}
        contactInfo={contactInfo}
      />
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
  const query = `{
    'contactInfo': *[_type=="contact"][0],
    'projects': *[_type=="projects"]
    }`;

  let data = await client.fetch(query);
  const { projects, contactInfo } = data;
  let currProj;
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].slug.current == context.params.slug) {
      currProj = projects[i];
    }
  }

  let nearbyRestaurants = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currProj?.map_pos?.lat}%2C${currProj?.map_pos?.lng}&radius=1000&type=restaurant&key=AIzaSyAGussVUAxuUeKa3y1-SmS1hddouoRy4PA`
  ).then((res) => res.json());

  let nearbySchools = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currProj?.map_pos?.lat}%2C${currProj?.map_pos?.lng}&radius=1000&type=school&key=AIzaSyAGussVUAxuUeKa3y1-SmS1hddouoRy4PA`
  ).then((res) => res.json());
  let nearbyHospitals = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currProj?.map_pos?.lat}%2C${currProj?.map_pos?.lng}&radius=1000&type=hospital&key=AIzaSyAGussVUAxuUeKa3y1-SmS1hddouoRy4PA`
  ).then((res) => res.json());
  //TODO: change to Env variabale  google map key

  return {
    props: {
      projects,
      currProj,
      contactInfo,
      nearbyRestaurants,
      nearbySchools,
      nearbyHospitals,
    },
  };
};
