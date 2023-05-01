// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import agents from "../../../data/agents";

// class Agentsslider extends Component {
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
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       arrows: false,
//       dots: false,
//       responsive: [
//         {
//           breakpoint: 991,
//           settings: {
//             slidesToShow: 2,
//           },
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 1,
//           },
//         },
//       ],
//     };
//     return (
//       <div className="section pt-0 agents">
//         <div className="container">
//           <div className="section-title-wrap section-header flex-header">
//             <div className="section-title-text">
//               <h5 className="custom-primary">Our Back bone</h5>
//               <h2 className="title">Meet Our Agents</h2>
//             </div>
//             <div className="acr-arrows primary-arrows">
//               <i
//                 className="slider-prev fas fa-arrow-left slick-arrow"
//                 onClick={this.previous}
//               />
//               <i
//                 className="slider-next fas fa-arrow-right slick-arrow"
//                 onClick={this.next}
//               />
//             </div>
//           </div>
//           <Slider
//             className="agents-slider"
//             ref={(c) => (this.slider = c)}
//             {...settings}
//           >
//             {/* Agent Start */}
//             {agents.slice(0, 4).map((item, i) => (
//               <div key={i} className="col-12">
//                 <div className="acr-agent">
//                   {item.star === true ? (
//                     <div className="listing-badge featured">
//                       <i className="fas fa-star" />
//                     </div>
//                   ) : (
//                     ""
//                   )}
//                   <div className="acr-dots-wrapper acr-agent-thumb">
//                     <div className="acr-dots" />
//                     <Link to="/agent-details">
//                       <img
//                         src={process.env.PUBLIC_URL + "/" + item.img}
//                         alt="agent"
//                       />
//                     </Link>
//                   </div>
//                   <div className="acr-agent-body">
//                     <h6>
//                       {" "}
//                       <Link to="/agent-details">{item.name}</Link>{" "}
//                     </h6>
//                     <span>{item.post}</span>
//                     <p>{item.text}</p>
//                     <Link
//                       to="/agent-details"
//                       className="btn-custom secondary btn-sm"
//                     >
//                       View Profile
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             {/* Agent End */}
//           </Slider>
//         </div>
//       </div>
//     );
//   }
// }

// export default Agentsslider;

////////////////////////////////////////////// Functional Component  //////////////////////////////////////////////////////////////////

import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import agents from "../../../data/agents";

const Agentsslider = () => {
  const next = () => {
    Slider.slickNext();
  };
  const previous = () => {
    Slider.slickPrev();
  };

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="section pt-0 agents">
      <div className="container">
        <div className="section-title-wrap section-header flex-header">
          <div className="section-title-text">
            <h5 className="custom-primary">Our Back bone</h5>
            <h2 className="title">Meet Our Agents</h2>
          </div>
          <div className="acr-arrows primary-arrows">
            <i
              className="slider-prev fas fa-arrow-left slick-arrow"
              onClick={() => previous()}
            />
            <i
              className="slider-next fas fa-arrow-right slick-arrow"
              onClick={() => next()}
            />
          </div>
        </div>
        <Slider
          className="agents-slider"
          ref={(c) => (Slider = c)}
          {...settings}
        >
          {/* Agent Start */}
          {agents.slice(0, 4).map((item, i) => (
            <div key={i} className="col-12">
              <div className="acr-agent">
                {item.star === true ? (
                  <div className="listing-badge featured">
                    <i className="fas fa-star" />
                  </div>
                ) : (
                  ""
                )}
                <div className="acr-dots-wrapper acr-agent-thumb">
                  <div className="acr-dots" />
                  <Link to="/agent-details">
                    <img
                      src={process.env.PUBLIC_URL + "/" + item.img}
                      alt="agent"
                    />
                  </Link>
                </div>
                <div className="acr-agent-body">
                  <h6>
                    {" "}
                    <Link to="/agent-details">{item.name}</Link>{" "}
                  </h6>
                  <span>{item.post}</span>
                  <p>{item.text}</p>
                  <Link
                    to="/agent-details"
                    className="btn-custom secondary btn-sm"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* Agent End */}
        </Slider>
      </div>
    </div>
  );
};

export default Agentsslider;
