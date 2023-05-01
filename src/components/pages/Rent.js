import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/rent/Content";

const Pricing = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Acres - Real Estate React Template | Pricing</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Rent" }} />

      <Content />
      <Footerthree />
    </Fragment>
  );
};

export default Pricing;
