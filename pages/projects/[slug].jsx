import { useRef, useState, useEffect } from "react";
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

const SingleProject = ({ projects, currProj, contactInfo }) => {
  const scrollRef = useRef();
  const [nearbyRestaurants, setNearbyRestaurants] = useState([]);
  const [nearbySchools, setNearbySchools] = useState([]);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currProj?.map_pos?.lat}%2C${currProj?.map_pos?.lng}&radius=1000&type=restaurant&key=AIzaSyAGussVUAxuUeKa3y1-SmS1hddouoRy4PA`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const res = await response.json();
        setNearbyRestaurants(res.results);

        const response2 = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currProj?.map_pos?.lat}%2C${currProj?.map_pos?.lng}&radius=1000&type=school&key=AIzaSyAGussVUAxuUeKa3y1-SmS1hddouoRy4PA`
        );
        if (!response2.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const res2 = await response2.json();
        setNearbySchools(res2.results);
        const response3 = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currProj?.map_pos?.lat}%2C${currProj?.map_pos?.lng}&radius=1000&type=hospital&key=AIzaSyAGussVUAxuUeKa3y1-SmS1hddouoRy4PA`
        );
        if (!response3.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const res3 = await response3.json();
        setNearbyHospitals(res3.results);
        console.log(response3);
      } catch (error) {
        console.log("ERROR", error);
      }
    };
    fetchData();
  }, [currProj]);
  console.log(nearbyHospitals);
  return (
    <>
      <HeroImages />
      <Hero scrollRef={scrollRef} currProj={currProj} />
      <Overview currProj={currProj} />
      <Features currProj={currProj} />
      <Location
        currProj={currProj}
        nearbyRestaurants={nearbyRestaurants}
        nearbySchools={nearbySchools}
        nearbyHospitals={nearbyHospitals}
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
  console.log("COMING");

  return {
    props: {
      projects,
      currProj,
      contactInfo,
    },
  };
};
