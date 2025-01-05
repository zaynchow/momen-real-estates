import styled from "styled-components";
import {
  Hero,
  WhyUs,
  ProjectTimeline,
  Highlights,
  Staff,
  Testimonials,
} from "../../components/About";
import { client } from "../../lib/client";
import bgLines from "../../public/bg-lines.png";
import Head from "next/head";

export const Wrapper = styled.div`
  margin: 0 auto;
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  width: 100%;
`;

const About = ({ aboutPageContent, testimonials, timeline, staff }) => {
  return (
    <Wrapper>
      <Head>
        <title>About - Momen Real Estates Limited</title>
      </Head>
      <Hero ourStoryData={aboutPageContent.our_story} />
      <WhyUs whyUsData={aboutPageContent.why_us} />
      <ProjectTimeline timelineData={timeline} />
      <Highlights highlightsData={aboutPageContent.highlights} />
      <Staff staffData={staff} />
      <Testimonials testimonialsData={testimonials} />
    </Wrapper>
  );
};

export const getServerSideProps = async () => {
  let data = await client.fetch(`{
    'aboutPageContent': *[_type=="about_page"][0]{highlights[]->, our_story, why_us},
    'testimonials': *[_type=="testimonials"],
    'timeline': *[_type=="timeline"] | order(year asc),
    'staff': *[_type=="staff"] | order(_createdAt asc),
  }`);

  return {
    props: {
      aboutPageContent: data.aboutPageContent,
      testimonials: data.testimonials,
      timeline: data.timeline,
      staff: data.staff,
    },
  };
};

export default About;
