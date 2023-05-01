// import React, { Component, Fragment } from 'react';
// import MetaTags from "react-meta-tags";
// import Header from '../layouts/Header';
// import Breadcrumb from '../layouts/Breadcrumb';
// import Footerthree from '../layouts/Footerthree';
// import Content from '../sections/pricing/Content';

// class Pricing extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <MetaTags>
//                     <title>Acres - Real Estate React Template | Pricing</title>
//                     <meta
//                         name="description"
//                         content="#"
//                     />
//                 </MetaTags>
//                 <Header/>
//                 <Breadcrumb breadcrumb={{pagename:'Pricing'}} />
//                 <Content/>
//                 <Footerthree/>
//             </Fragment>
//         );
//     }
// }

// export default Pricing;

//////////  /////////////////////////////   Functional Component //////////////////////////////////////////////////////////////////

import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footerthree from "../layouts/Footerthree";
import Content from "../sections/pricing/Content";

const Pricing = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Acres - Real Estate React Template | Pricing</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Pricing" }} />

      <Content />
      <Footerthree />
    </Fragment>
  );
};

export default Pricing;
