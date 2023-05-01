import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/agency-details/Content';

class Agencydetails extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Acres - Real Estate React Template | Agency Details</title>
                    <meta
                        name="description"
                        content="#" 
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Agency Details'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Agencydetails;