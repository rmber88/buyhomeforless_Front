// import React, { Component, Fragment } from "react";
// import MetaTags from "react-meta-tags";
// import Header from "../layouts/Headerfour";
// import Footer from "../layouts/Footerthree";
// import Content from "../sections/homefour/Content";

// class Homefour extends Component {
//   render() {
//     return (
//       <Fragment>
//         <MetaTags>
//           <title>Acres - Real Estate React Template | Homepage</title>
//           <meta name="description" content="#" />
//         </MetaTags>
//         <Header />
//         <Content />
//         <Footer />
//       </Fragment>
//     );
//   }
// }

// export default Homefour;

///////////////////////////////////////////////   Functional Components    //////////////////////////////////////////////////////////////////////

import React from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Headerfour";
import Footer from "../layouts/Footerthree";
import Content from "../sections/homefour/Content";

const Homefour = () => {
  return (
    <div>
      <MetaTags>
        <title>Acres - Real Estate React Template | Homepage</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Homefour;
