import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/ThinkToKnow/EstateContent";
import Download from "../layouts/App"

const Estate = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Acres - Real Estate React Template | Thailand real estate laws</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Thailand real estate laws" }} />

      <Content />
      <Download />
      <Footerthree />
    </Fragment>
  );
};

export default Estate;
