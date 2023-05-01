import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/agency-archive/Content';

class Agencyarchive extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Acres - Real Estate React Template | Agency Archive</title>
                    <meta
                        name="description"
                        content="#" 
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Agency Archive'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Agencyarchive;