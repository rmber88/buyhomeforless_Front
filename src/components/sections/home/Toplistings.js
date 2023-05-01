// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { OverlayTrigger, Tooltip, Dropdown, NavLink } from "react-bootstrap";
// import Slider from "react-slick";
// import listing from "../../../data/listings";

// const gallerytip = <Tooltip>Gallery</Tooltip>;
// const bedstip = <Tooltip>Beds</Tooltip>;
// const bathstip = <Tooltip>Bathrooms</Tooltip>;
// const areatip = <Tooltip>Square Feet</Tooltip>;

// class Toplistings extends Component {
//   constructor(props) {
//     super(props);
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//   }
//   next() {
//     this.slider.slickNext();
//   }
//   previous() {
//     this.slider.slickPrev();
//   }
//   render() {
//     const settings = {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       dots: false,
//       autoplay: true,
//       responsive: [
//         {
//           breakpoint: 991,
//           settings: {
//             arrows: false,
//           },
//         },
//       ],
//     };
//     return (
//       <div className="section light-bg">
//         <div className="container top-listings">
//           <div className="acr-arrows">
//             <i
//               className="slider-prev fas fa-arrow-left slick-arrow"
//               onClick={this.previous}
//             />
//             <i
//               className="slider-next fas fa-arrow-right slick-arrow"
//               onClick={this.next}
//             />
//           </div>
//           <div className="section-title-wrap section-header">
//             <h5 className="custom-primary">Trending</h5>
//             <h2 className="title">Our Top Listings</h2>
//           </div>
//           <Slider
//             className="top-listings-slider col-12"
//             ref={(c) => (this.slider = c)}
//             {...settings}
//           >
//             {/* Top Item Start */}
//             {listing.slice(0, 4).map((item, i) => (
//               <div key={i}>
//                 <div
//                   className="acr-top-listing-item bg-cover dark-overlay bg-center"
//                   style={{
//                     backgroundImage:
//                       "url(" +
//                       process.env.PUBLIC_URL +
//                       "/" +
//                       item.gridimg +
//                       ")",
//                   }}
//                 >
//                   <div className="row">
//                     <div className="col-lg-6">
//                       <div className="acr-top-listing-body listing">
//                         <div className="listing-body">
//                           <h5 className="listing-title">
//                             {" "}
//                             <Link to="/listing-details-v1" title={item.title}>
//                               {item.title}
//                             </Link>{" "}
//                           </h5>
//                           <div className="listing-author">
//                             <img
//                               src={
//                                 process.env.PUBLIC_URL + "/" + item.authorimg
//                               }
//                               alt="author"
//                             />
//                             <div className="listing-author-body">
//                               <p>
//                                 {" "}
//                                 <Link to="#">{item.authorname}</Link>{" "}
//                               </p>
//                               <span className="listing-date">
//                                 {item.postdate}
//                               </span>
//                             </div>
//                             <Dropdown className="options-dropdown">
//                               <Dropdown.Toggle as={NavLink}>
//                                 <i className="fas fa-ellipsis-v" />
//                               </Dropdown.Toggle>
//                               <Dropdown.Menu className="dropdown-menu-right">
//                                 <ul>
//                                   <li>
//                                     {" "}
//                                     <Link to="tel:+123456789">
//                                       {" "}
//                                       <i className="fas fa-phone" /> Call Agent
//                                     </Link>{" "}
//                                   </li>
//                                   <li>
//                                     {" "}
//                                     <Link to="mailto:+123456789">
//                                       {" "}
//                                       <i className="fas fa-envelope" /> Send
//                                       Message
//                                     </Link>{" "}
//                                   </li>
//                                   <li>
//                                     {" "}
//                                     <Link to="/listing-details-v1">
//                                       {" "}
//                                       <i className="fas fa-bookmark" /> Book
//                                       Tour
//                                     </Link>{" "}
//                                   </li>
//                                 </ul>
//                               </Dropdown.Menu>
//                             </Dropdown>
//                           </div>
//                           <span className="listing-price">
//                             {new Intl.NumberFormat().format(
//                               item.monthlyprice.toFixed(2)
//                             )}
//                             $ <span>/month</span>{" "}
//                           </span>
//                           <p className="listing-text">{item.text}</p>
//                           <div className="acr-listing-icons">
//                             <OverlayTrigger overlay={bedstip}>
//                               <div className="acr-listing-icon">
//                                 <i className="flaticon-bedroom" />
//                                 <span className="acr-listing-icon-value">
//                                   {item.beds}
//                                 </span>
//                               </div>
//                             </OverlayTrigger>
//                             <OverlayTrigger overlay={bathstip}>
//                               <div className="acr-listing-icon">
//                                 <i className="flaticon-bathroom" />
//                                 <span className="acr-listing-icon-value">
//                                   {item.bathrooms}
//                                 </span>
//                               </div>
//                             </OverlayTrigger>
//                             <OverlayTrigger overlay={areatip}>
//                               <div className="acr-listing-icon">
//                                 <i className="flaticon-ruler" />
//                                 <span className="acr-listing-icon-value">
//                                   {new Intl.NumberFormat().format(item.area)}
//                                 </span>
//                               </div>
//                             </OverlayTrigger>
//                           </div>
//                           <div className="listing-gallery-wrapper">
//                             <Link
//                               to="/listing-details-v1"
//                               className="btn-custom btn-sm secondary"
//                             >
//                               View Details
//                             </Link>
//                             <OverlayTrigger overlay={gallerytip}>
//                               <Link to="#" className="listing-gallery">
//                                 {" "}
//                                 <i className="fas fa-camera" />{" "}
//                               </Link>
//                             </OverlayTrigger>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             {/* Top Item End */}
//           </Slider>
//         </div>
//       </div>
//     );
//   }
// }

// export default Toplistings;

/////////////////////////////////////////  Functional Components ////////////////////////////////////////////////////////////////

import React from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from "react-bootstrap";
import Slider from "react-slick";
import listing from "../../../data/listings";

const gallerytip = <Tooltip>Gallery</Tooltip>;
const bedstip = <Tooltip>Beds</Tooltip>;
const bathstip = <Tooltip>Bathrooms</Tooltip>;
const areatip = <Tooltip>Square Feet</Tooltip>;

const Toplistings = () => {
  const next = () => {
    Slider.slickNext();
  };
  const previous = () => {
    Slider.slickPrev();
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="section light-bg">
      <div className="container top-listings">
        <div className="acr-arrows">
          <i
            className="slider-prev fas fa-arrow-left slick-arrow"
            onClick={() => previous()}
          />
          <i
            className="slider-next fas fa-arrow-right slick-arrow"
            onClick={() => next()}
          />
        </div>
        <div className="section-title-wrap section-header">
          <h5 className="custom-primary">Trending</h5>
          <h2 className="title">Our Top Listings</h2>
        </div>
        <Slider
          className="top-listings-slider col-12"
          ref={(c) => (Slider = c)}
          {...settings}
        >
          {/* Top Item Start */}
          {listing.slice(0, 4).map((item, i) => (
            <div key={i}>
              <div
                className="acr-top-listing-item bg-cover dark-overlay bg-center"
                style={{
                  backgroundImage:
                    "url(" + process.env.PUBLIC_URL + "/" + item.gridimg + ")",
                }}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="acr-top-listing-body listing">
                      <div className="listing-body">
                        <h5 className="listing-title">
                          {" "}
                          <Link to="/listing-details-v1" title={item.title}>
                            {item.title}
                          </Link>{" "}
                        </h5>
                        <div className="listing-author">
                          <img
                            src={process.env.PUBLIC_URL + "/" + item.authorimg}
                            alt="author"
                          />
                          <div className="listing-author-body">
                            <p>
                              {" "}
                              <Link to="#">{item.authorname}</Link>{" "}
                            </p>
                            <span className="listing-date">
                              {item.postdate}
                            </span>
                          </div>
                          <Dropdown className="options-dropdown">
                            <Dropdown.Toggle as={NavLink}>
                              <i className="fas fa-ellipsis-v" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-right">
                              <ul>
                                <li>
                                  {" "}
                                  <Link to="tel:+123456789">
                                    {" "}
                                    <i className="fas fa-phone" /> Call Agent
                                  </Link>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <Link to="mailto:+123456789">
                                    {" "}
                                    <i className="fas fa-envelope" /> Send
                                    Message
                                  </Link>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <Link to="/listing-details-v1">
                                    {" "}
                                    <i className="fas fa-bookmark" /> Book Tour
                                  </Link>{" "}
                                </li>
                              </ul>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <span className="listing-price">
                          {new Intl.NumberFormat().format(
                            item.monthlyprice.toFixed(2)
                          )}
                          $ <span>/month</span>{" "}
                        </span>
                        <p className="listing-text">{item.text}</p>
                        <div className="acr-listing-icons">
                          <OverlayTrigger overlay={bedstip}>
                            <div className="acr-listing-icon">
                              <i className="flaticon-bedroom" />
                              <span className="acr-listing-icon-value">
                                {item.beds}
                              </span>
                            </div>
                          </OverlayTrigger>
                          <OverlayTrigger overlay={bathstip}>
                            <div className="acr-listing-icon">
                              <i className="flaticon-bathroom" />
                              <span className="acr-listing-icon-value">
                                {item.bathrooms}
                              </span>
                            </div>
                          </OverlayTrigger>
                          <OverlayTrigger overlay={areatip}>
                            <div className="acr-listing-icon">
                              <i className="flaticon-ruler" />
                              <span className="acr-listing-icon-value">
                                {new Intl.NumberFormat().format(item.area)}
                              </span>
                            </div>
                          </OverlayTrigger>
                        </div>
                        <div className="listing-gallery-wrapper">
                          <Link
                            to="/listing-details-v1"
                            className="btn-custom btn-sm secondary"
                          >
                            View Details
                          </Link>
                          <OverlayTrigger overlay={gallerytip}>
                            <Link to="#" className="listing-gallery">
                              {" "}
                              <i className="fas fa-camera" />{" "}
                            </Link>
                          </OverlayTrigger>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Top Item End */}
        </Slider>
      </div>
    </div>
  );
};

export default Toplistings;
