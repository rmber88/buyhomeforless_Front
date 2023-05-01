import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Content from "../sections/listing-details-v1/Content";

const Listingdetailsone = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Acres - Real Estate React Template | Listing Details</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Listingdetailsone;
