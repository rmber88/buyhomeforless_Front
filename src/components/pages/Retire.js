import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/ThinkToKnow/RetireContent";
import Download from "../layouts/App"

const Retire = () => (
  <Fragment>
    <MetaTags>
      <title>Acres - Real Estate React Template | How to retire in Thailand</title>
      <meta name="description" content="#" />
    </MetaTags>
    <Header />
    <Breadcrumb breadcrumb={{ pagename: "How to retire in Thailand" }} />

    <Content />
    <Download />
    <Footerthree />
  </Fragment>
);

export default Retire;
