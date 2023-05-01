import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/Finance/LoansContent";
import Download from "../layouts/App"

const Loans = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Acres - Real Estate React Template | Can you get a loans in Thailand</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Can you get a loans in Thailand" }} />

      <Content />
      <Download />
      <Footerthree />
    </Fragment>
  );
};

export default Loans;
