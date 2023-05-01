import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/Finance/MortgageContent";
import Download from "../layouts/App"

const Mortgage = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Acres - Real Estate React Template | How to get a mortgage loan in Thailand</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "How to get a mortgage loan in Thailand" }} />

      <Content />
      <Download />
      <Footerthree />
    </Fragment>
  );
};

export default Mortgage;
