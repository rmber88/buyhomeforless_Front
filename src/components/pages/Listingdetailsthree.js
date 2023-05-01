import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/listing-details-v3/Content';

class Listingdetailsthree extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Acres - Real Estate React Template | Listing Details</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <div className="headerstyle">
                    <Header />
                </div>
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Listingdetailsthree;