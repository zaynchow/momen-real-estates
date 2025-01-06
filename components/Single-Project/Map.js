import React from "react";

import AllProjectMap from "../../lib/all-project-map";
import { useLoadScript } from "@react-google-maps/api";



const Map = ({
  currProj,
  type,
  nearbySchools,
  nearbyHospitals,
  nearbyRestaurants,
}) => {
  const { isLoaded } = useLoadScript({
    mapIds: ["9efe4a9ca33bc8b6", "84c888cfd3f4c0db"],
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
  });

  let secondary_locations = null;

  switch (type) {
    case "all":
      secondary_locations = nearbySchools
        .concat(nearbyHospitals)
        .concat(nearbyRestaurants);
      break;
    case "nearbySchools":
      secondary_locations = nearbySchools;
      break;
    case "nearbyRestaurants":
      secondary_locations = nearbyRestaurants;
      break;
    case "nearbyHospitals":
      secondary_locations = nearbyHospitals;
      break;
    default:
      secondary_locations = null;
  }

  let project_locations = [currProj];

  return isLoaded ? (
    <AllProjectMap
      project_locations={project_locations}
      secondary_locations={secondary_locations}
    />
  ) : null;
};

export default Map;
