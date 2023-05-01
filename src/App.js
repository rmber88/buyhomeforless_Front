// import React, { Suspense } from "react";
// import { Route, Routes } from "react-router-dom";

// // Preloader
// const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// // Home Pages
// // const Home = React.lazy(() => import("./components/pages/Home"));
// // const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
// // const Homethree = React.lazy(() => import("./components/pages/Homethree"));
// const Homefour = React.lazy(() => import("./components/pages/Homefour"));
// // const Homefive = React.lazy(() => import("./components/pages/Homefive"));
// // Blog
// const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
// const Bloglist = React.lazy(() => import("./components/pages/Bloglist"));
// const Blogsingle = React.lazy(() => import("./components/pages/Blogsingle"));
// // Pages
// const About = React.lazy(() => import("./components/pages/About"));
// const Services = React.lazy(() => import("./components/pages/Services"));
// const Faq = React.lazy(() => import("./components/pages/Faq"));
// const Pricing = React.lazy(() => import("./components/pages/Pricing"));
// const Contact = React.lazy(() => import("./components/pages/Contact"));
// const Comingsoon = React.lazy(() => import("./components/pages/Comingsoon"));
// const Error = React.lazy(() => import("./components/pages/Error"));
// const Login = React.lazy(() => import("./components/pages/Login"));
// const Register = React.lazy(() => import("./components/pages/Register"));
// const Legal = React.lazy(() => import("./components/pages/Legal"));
// // Listings
// const Listinggrid = React.lazy(() => import("./components/pages/Listinggrid"));
// const Listinglist = React.lazy(() => import("./components/pages/Listinglist"));
// const Listingmap = React.lazy(() => import("./components/pages/Listingmap"));
// const Listingdetailsone = React.lazy(() =>
//   import("./components/pages/Listingdetailsone")
// );
// const Listingdetailstwo = React.lazy(() =>
//   import("./components/pages/Listingdetailstwo")
// );
// const Listingdetailsthree = React.lazy(() =>
//   import("./components/pages/Listingdetailsthree")
// );
// const Submitlisting = React.lazy(() =>
//   import("./components/pages/Submitlisting")
// );
// const Comparelistings = React.lazy(() =>
//   import("./components/pages/Comparelistings")
// );
// // Agents
// const Agentarchive = React.lazy(() =>
//   import("./components/pages/Agentarchive")
// );
// const Agentdetails = React.lazy(() =>
//   import("./components/pages/Agentdetails")
// );
// const Profile = React.lazy(() => import("./components/pages/Profile"));
// const Profilelistings = React.lazy(() =>
//   import("./components/pages/Profilelistings")
// );
// const Profilesavedlistings = React.lazy(() =>
//   import("./components/pages/Profilesavedlistings")
// );
// // Agency
// const Agencyarchive = React.lazy(() =>
//   import("./components/pages/Agencyarchive")
// );
// const Agencydetails = React.lazy(() =>
//   import("./components/pages/Agencydetails")
// );

// function App() {
//   return (
//     <div>
//       <Suspense fallback={<div></div>}>
//         <Preloader />
//         <Routes>
//           {/* Homepages */}
//           <Route exact path="/" component={Homefour} />
//           {/* <Route path="/home-v2" component={Hometwo} />
//           <Route path="/home-v3" component={Homethree} /> */}
//           <Route path="/home-v4" component={Homefour} />
//           {/* <Route path="/home-v5" component={Homefive} /> */}
//           {/* Blog */}
//           <Route path="/blog-grid" component={Bloggrid} />
//           <Route path="/blog-list" component={Bloglist} />
//           <Route path="/blog-single" component={Blogsingle} />
//           {/* Pages */}
//           <Route path="/about" component={About} />
//           <Route path="/services" component={Services} />
//           <Route path="/faq" component={Faq} />
//           <Route path="/pricing" component={Pricing} />
//           <Route path="/contact" component={Contact} />
//           <Route path="/coming-soon" component={Comingsoon} />
//           <Route path="/error-404" component={Error} />
//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Register} />
//           <Route path="/legal" component={Legal} />
//           {/* Listings */}
//           <Route path="/listing-grid" component={Listinggrid} />
//           <Route path="/listing-list" component={Listinglist} />
//           <Route path="/listing-map" component={Listingmap} />
//           <Route path="/listing-details-v1" component={Listingdetailsone} />
//           <Route path="/listing-details-v2" component={Listingdetailstwo} />
//           <Route path="/listing-details-v3" component={Listingdetailsthree} />
//           <Route path="/submit-listing" component={Submitlisting} />
//           <Route path="/compare-listings" component={Comparelistings} />
//           {/* Agents */}
//           <Route path="/agent-archive" component={Agentarchive} />
//           <Route path="/agent-details" component={Agentdetails} />
//           <Route path="/profile" component={Profile} />
//           <Route path="/profile-listings" component={Profilelistings} />
//           <Route
//             path="/profile-saved-listings"
//             component={Profilesavedlistings}
//           />
//           {/* Agency */}
//           <Route path="/agency-archive" component={Agencyarchive} />
//           <Route path="/agency-details" component={Agencydetails} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// }

// export default App;

///////////////////////////////////////////////   Functional Components    //////////////////////////////////////////////////////////////////////

import React from "react";
import { Route, Routes } from "react-router-dom";
import Homefour from "./components/pages/Homefour";
import Chat from "./components/pages/Chat";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Retirement from "./components/pages/Agentarchive";
import Submitlisting from "./components/pages/Submitlisting";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Pricing from "./components/pages/Pricing";
import Sell from "./components/pages/Sell";
import Rent from "./components/pages/Rent";

import Distress from "./components/pages/Distress";
import Planing from "./components/pages/Planing";
import Modification from "./components/pages/Modification";
import Management from "./components/pages/Management";
import Planner from "./components/pages/Planner";

import Property from "./components/pages/Property";
import Terms from "./components/pages/Terms";
import Estate from "./components/pages/Estate";
import Retire from "./components/pages/Retire";

import Mortgage from "./components/pages/Mortgage";
import Invest from "./components/pages/Invest";
import Loans from "./components/pages/Loans";

import Listing from "./components/pages/Listingmap";
import Contact from "./components/pages/Contact";
import Admin from "./components/pages/AdminPanel";
import ListingDetailsOne from "./components/pages/Listingdetailsone";
import "./index.css";
import PropertyListing from "./components/pages/PropertyListing";
import View from "./components/sections/view-all/View-All";
// const Listingdetailsone = React.lazy(() =>
//   import("./components/pages/Listingdetailsone")

const App = () => {
  return (
    <div className="App">
      {/* asdhsv */}
      <Routes>
        {/* Homepages */}
        <Route exact path="/" element={<Homefour />} />
        <Route path="/submit-listing" element={<Submitlisting />} />
        <Route path="/about" element={<About />} />
        <Route path="/agent" element={<Retirement />} />
        <Route path="/services" element={<Services />} />
        <Route path="/buy" element={<Pricing />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/listing-details-v1/:id" element={<ListingDetailsOne />} />
        <Route path="/property/:type" element={<PropertyListing />} />
        <Route path="/view-all" element={<View />} />

        <Route path="/Distress" element={<Distress />} />
        <Route path="/Planing" element={<Planing />} />
        <Route path="/Modification" element={<Modification />} />
        <Route path="/Management" element={<Management />} />
        <Route path="/Planner" element={<Planner />} />

        <Route path="/Property" element={<Property />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Estate" element={<Estate />} />
        <Route path="/Retire" element={<Retire />} />

        <Route path="/Mortgage" element={<Mortgage />} />
        <Route path="/Invest" element={<Invest />} />
        <Route path="/Loans" element={<Loans />} />
        <Route path="/listing-map" element={<Listing />} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </div>
  );
};

export default App;
