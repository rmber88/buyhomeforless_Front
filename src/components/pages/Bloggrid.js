// import React, { Component, Fragment } from "react";
// import MetaTags from "react-meta-tags";
// import Header from "../layouts/Header";
// import Breadcrumb from "../layouts/Breadcrumb";
// import Footer from "../layouts/Footer";
// import Content from "../sections/bloggrid/Content";

// class Bloggrid extends Component {
//   render() {
//     return (
//       <Fragment>
//         <MetaTags>
//           <title>Acres - Real Estate React Template | Blog Grid</title>
//           <meta name="description" content="#" />
//         </MetaTags>
//         <Header />
//         <Breadcrumb breadcrumb={{ pagename: "Blog Grid" }} />
//         <Content />
//         <Footer />
//       </Fragment>
//     );
//   }
// }

// export default Bloggrid;

///////////////////////////////////////   Functional Component   //////////////////////////////////////////////////////////

import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/bloggrid/Content";

const Bloggrid = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Acres - Real Estate React Template | Blog Grid</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Blog Grid" }} />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Bloggrid;
