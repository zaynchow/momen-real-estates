import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import content from "./content";
import location from "./location";
import testimonials from "./testimonials";
import statistics from "./statistics";
import projects from "./projects";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    content,
    projects,
    location,
    testimonials,
    statistics,
  ]),
});
