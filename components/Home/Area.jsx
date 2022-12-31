import React from "react";
import Image from "next/image";
import { urlFor } from "../../lib/client";

const Area = ({ places }) => {
  return (
    <div className="area-wrapper">
      <div className="area">
        <h2>Most Popular Areas</h2>
        <h4>Find yourself a home in the area you love</h4>
        <div className="area-section">
          <div className="area-container">
            <div className="column1">
              <Image
                loader={() => urlFor(places[0].location_img).url()}
                src={urlFor(places[0].location_img).url()}
                fill
                alt="home"
              />
              <div className="location-name">
                <h2>{places[0].location_name}</h2>
              </div>
            </div>
            <div className="column2">
              <div className="row1">
                <Image
                  loader={() => urlFor(places[1].location_img).url()}
                  src={urlFor(places[1].location_img).url()}
                  layout="fill"
                  alt="home"
                />
                <div className="location-name">
                  <h2>{places[1].location_name}</h2>
                </div>
              </div>
              <div className="row2">
                <Image
                  loader={() => urlFor(places[2].location_img).url()}
                  src={urlFor(places[2].location_img).url()}
                  layout="fill"
                  alt="home"
                />
                <div className="location-name">
                  <h2>{places[2].location_name}</h2>
                </div>
              </div>
            </div>
            <div className="column3">
              <Image
                loader={() => urlFor(places[3].location_img).url()}
                src={urlFor(places[3].location_img).url()}
                layout="fill"
                alt="home"
              />
              <div className="location-name">
                <h2>{places[3].location_name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Area;
