import {
  Contact,
  Tutorial,
  Statistics,
  WhatClientsSay,
  Featured,
  Hero,
  WhoAreWe,
  Partners,
} from "../components/Home";
import Head from "next/head";

import { client } from "../lib/client";

export default function Home({
  partnerLogos,
  sliderData,
  about,
  stats,
  playLink,
  projects,
  testimonials,
  allProjectLocations,
}) {
  return (
    <div>
      <Head>
        <title>Momen Real Estates Limited</title>
      </Head>
      <Hero sliderContent={sliderData} />
      <Featured projects={projects} />
      <WhoAreWe about={about} project_locations={allProjectLocations} />
      <Tutorial playLink={playLink} />
      <WhatClientsSay testimonials={testimonials} />
      <Statistics statData={stats} />
      <Partners partnerLogos={partnerLogos} />
      <Contact />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `{
  'homepageContent':*[_type=="content" && page=="Homepage"][0]{
    stats[]->,slider_images,places[]->,play_link,about_homepage,projects[]->,homepage_testimonials[]->
  },
  'partners':*[_type=="partners"][0],
  'allProjects':*[_type=="projects"]{name, map_pos, _id, images, slug}}`;

  const data = await client.fetch(query);
  const partnerLogos = data.partners.partner_logos;
  const sliderData = data.homepageContent.slider_images;
  const about = data.homepageContent.about_homepage;
  const stats = data.homepageContent.stats;
  const playLink = data.homepageContent.play_link;
  const projects = data.homepageContent.projects;
  const testimonials = data.homepageContent.homepage_testimonials;
  const allProjectLocations = data.allProjects;

  return {
    props: {
      partnerLogos,
      sliderData,
      about,
      stats,
      playLink,
      projects,
      testimonials,
      allProjectLocations,
    },
  };
};