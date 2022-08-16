import {
  Contact,
  Tutorial,
  Statistics,
  About,
  Area,
  Featured,
  Hero,
} from "../components/Home";

import { client } from "../lib/client";


export default function Home({
  sliderData,
  places,
  about,
  stats,
  playLink,
  projects,
  testimonials,
}) {
  return (
    <div>
      <Hero sliderContent={sliderData} />
      <Featured projects={projects} />
      <Area places={places} />
      <About
        about={about}
        testimonials={testimonials}
        project_locations={projects}
      />
      <Statistics statData={stats} />
      <Tutorial playLink={playLink} />
      <Contact />
    </div>
  );
}

export const getStaticProps = async () => {
  const query = `*[_type=="content" && page=="Homepage"][0]{
    stats[]->,slider_images,places[]->,play_link,about_homepage,projects[]->,homepage_testimonials[]->
  }`;

  const data = await client.fetch(query);
  const sliderData = data.slider_images;
  const places = data.places;
  const about = data.about_homepage[0].children[0].text;
  const stats = data.stats;
  const playLink = data.play_link;
  const projects = data.projects;
  const testimonials = data.homepage_testimonials;

  return {
    props: {
      sliderData,
      places,
      about,
      stats,
      playLink,
      projects,
      testimonials,
    },
  };
};