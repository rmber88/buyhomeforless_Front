import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/ThinkToKnow/PropertyContent";
import Download from "../layouts/App"

const Property = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Acres - Real Estate React Template | How to buy property in Thailand</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "How to buy property in Thailand" }} />

      <Content />
      <Download />
      <Footerthree />
    </Fragment>
  );
};

export default Property;
