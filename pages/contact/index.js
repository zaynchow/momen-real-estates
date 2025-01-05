import React from "react";
import styled from "styled-components";
import bgLines from "../../public/bg-lines.png";
import { client } from "../../lib/client";
import { Hero, ContactSection } from "../../components/Contact";
import Head from "next/head";

export const Wrapper = styled.div`
  margin: 0 auto;
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  width: 100%;
`;

const Contact = ({ contactInfo, hoursOfOperation, contactPageContent }) => {
  return (
    <Wrapper>
      <Head>
        <title>Contact - Momen Real Estates Limited</title>
      </Head>
      <Hero
        officeAddress={hoursOfOperation.office_address}
        contactPageContent={contactPageContent}
      />
      <ContactSection
        contactInfo={contactInfo}
        hoursOfOperation={hoursOfOperation}
      />
    </Wrapper>
  );
};

export const getServerSideProps = async () => {
  let data = await client.fetch(`{
    'contactInfo': *[_type=="contact"][0],
    'hoursOfOperation': *[_type=="hours_of_operation"][0],
    'contactPageContent': *[_type=="contact_page"][0]
  }`);

  return {
    props: {
      contactInfo: data?.contactInfo,
      hoursOfOperation: data?.hoursOfOperation,
      contactPageContent: data?.contactPageContent,
    },
  };
};

export default Contact;
