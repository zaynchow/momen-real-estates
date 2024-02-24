import React from "react";
import AllProjectMap from "../../lib/all-project-map";
import { useLoadScript } from "@react-google-maps/api";
 //TODO: change to Env variabale  google map key
const Map = ({ project_locations }) => {
  const { isLoaded } = useLoadScript({
    mapIds: ["9efe4a9ca33bc8b6", "84c888cfd3f4c0db"],
    googleMapsApiKey: process.env.MAP_API_KEY,
  });

  return isLoaded ? (
    <AllProjectMap project_locations={project_locations} />
  ) : null;
};

export default Map;
