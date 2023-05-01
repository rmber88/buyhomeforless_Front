/////////////////////     Functional Component ////////////////////////////
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/submit-listing/Content";

const Submitlisting = () => {
  // const location = useLocation();
  // const data = location.state;

  // const handleList = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:3003/submitlisting/submit",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           mode: "no-cors",
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log("Error: ", error.message);
  //   }
  // };
  return (
    <Fragment>
      <MetaTags>
        <title>Acres - Real Estate React Template | Submit Listing</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Submit Listing" }} />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Submitlisting;

// import React, { Component, Fragment } from "react";
// import MetaTags from "react-meta-tags";
// import Header from "../layouts/Header";
// import Breadcrumb from "../layouts/Breadcrumb";
// import Footer from "../layouts/Footer";
// import Content from "../sections/submit-listing/Content";

// class Submitlisting extends Component {
//   render() {
//     return (
//       <Fragment>
//         <MetaTags>
//           <title>Acres - Real Estate React Template | Submit Listing</title>
//           <meta name="description" content="#" />
//         </MetaTags>
//         <Header />
//         <Breadcrumb breadcrumb={{ pagename: "Submit Listing" }} />
//         <div>

//         </div>
//         <Content />
//         <Footer />
//       </Fragment>
//     );
//   }
// }

// export default Submitlisting;
