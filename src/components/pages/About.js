import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/pricing/Content";

const About = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Acres - Real Estate React Template | About Us</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "About Us" }} />
      <Content />
      <Footerthree />
    </Fragment>
  );
};

export default About;
