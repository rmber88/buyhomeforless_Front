import React, { Fragment } from "react";
import Header from "../../layouts/Header";
import Breadcrumb from "../../layouts/Breadcrumb";
import MetaTags from "react-meta-tags";
import Content from "./Content";

const View = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Acres - Real Estate React Template | Veiw All</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Veiw All" }} />
      <Content />
    </Fragment>
  );
};

export default View;
