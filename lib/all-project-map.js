import React, { useState, useRef, useEffect } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import Image from "next/image";
import { urlFor } from "./client";
import Logo from "../public/logo/MREL-Logo.png";

const Map = ({ project_locations, secondary_locations }) => {
  const [activeMarker, setActiveMarker] = useState(null);
  const mapRef = useRef(null);
  const [positions, setPositions] = useState([]);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  useEffect(() => {
    const updatedPos = [];
    project_locations &&
      project_locations.forEach((obj) => {
        let lng = obj?.map_pos?.lng;
        let lat = obj?.map_pos?.lat;
        if (!(lng === undefined && lat === undefined)) {
          updatedPos.push({ lng, lat });
        }
      });

    secondary_locations &&
      secondary_locations.forEach((obj) => {
        let lng = obj?.geometry?.location.lng;
        let lat = obj?.geometry?.location.lat;
        if (!(lng === undefined && lat === undefined)) {
          updatedPos.push({ lng, lat });
        }
      });

    setPositions(updatedPos);
  }, [project_locations, secondary_locations]);

  useEffect(() => {
    const bounds = new google.maps.LatLngBounds();

    positions.map((obj) => {
      bounds.extend(obj);
    });

    mapRef?.current?.fitBounds(bounds);
  }, [positions]);

  const handleOnLoad = (map) => {
    mapRef.current = map;
  };

  const options = { mapId: "202fbbbe7e974226" };
  const chooseIcon = (types) => {
    if (types.includes("school")) {
      return "/icons/school-marker.png";
    } else if (types.includes("restaurant")) {
      return "/icons/restaurant-marker.png";
    } else if (types.includes("hospital")) return "/icons/hospital-marker.png";
  };

  return (
    <GoogleMap
      options={options}
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerClassName="map-container"
    >
      {project_locations &&
        project_locations.map(({ name, map_pos, _id, images, slug }) => {
          return (
            <Marker
              // icon={
              //   "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMREL-Logo.11d04520.png&w=256&q=75"
              // }

              key={_id}
              position={map_pos}
              onClick={() => handleActiveMarker(_id)}
            >
              {activeMarker === _id ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <div className="map-info-window">
                    <Image
                      loader={() => urlFor(images[0]).url()}
                      src={urlFor(images[0]).url()}
                      width={100}
                      height={100}
                      alt="property-image"
                    />
                    <h5>{name}</h5>
                    <a href={`/projects/${slug.current}`}>View Project</a>
                  </div>
                </InfoWindow>
              ) : null}
            </Marker>
          );
        })}
      {secondary_locations &&
        secondary_locations.map(({ name, geometry, reference, types }) => {
          return (
            <Marker
              icon={chooseIcon(types)}
              key={reference}
              position={geometry.location}
              onClick={() => handleActiveMarker(reference)}
            >
              {/* {activeMarker === _id ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <div className="map-info-window">
                    <Image
                      loader={() => urlFor(images[0]).url()}
                      src={urlFor(images[0]).url()}
                      width={100}
                      height={100}
                      alt="property-image"
                    />
                    <h5>{name}</h5>
                    <a href={`/projects/${slug.current}`}>View Project</a>
                  </div>
                </InfoWindow>
              ) : null} */}
            </Marker>
          );
        })}
    </GoogleMap>
  );
};

export default Map;
