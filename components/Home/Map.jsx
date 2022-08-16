import React from "react";
import AllProjectMap from "../../lib/all-project-map";
import { useLoadScript } from "@react-google-maps/api";

const Map = ({ project_locations }) => {
  const { isLoaded } = useLoadScript({
    mapIds: ["9efe4a9ca33bc8b6", "84c888cfd3f4c0db"],
    googleMapsApiKey: "AIzaSyAGussVUAxuUeKa3y1-SmS1hddouoRy4PA",
  });
  return isLoaded ? (
    <AllProjectMap project_locations={project_locations} />
  ) : null;
};

export default Map;
