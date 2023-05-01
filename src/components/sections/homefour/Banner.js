// import React, { Component } from "react";
// import Data from "../../../data/select";
// import Select2 from "react-select2-wrapper";
// import classNames from "classnames";

// class Banner extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       advancesearch: false,
//     };
//     this.advancetoggle = this.advancetoggle.bind(this);
//   }
//   advancetoggle() {
//     this.setState({
//       advancesearch: !this.state.advancesearch,
//     });
//   }
//   render() {
//     const {
//       locationlist,
//       statuslist,
//       pricerangelist,
//       bedslist,
//       bathroomslist,
//       typelist,
//       diameterlist,
//     } = Data;

//     return (
//       <div
//         className="banner banner-1 banner-3 dark-overlay bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url(" + process.env.PUBLIC_URL + "/assets/img/banner/3.jpg)",
//         }}
//       >
//         <div className="container">
//           <div className="banner-item">
//             <div className="banner-inner">
//               <div className="banner-text">
//                 <h1 className="title text-white">
//                   Find The Best Deal On The Market Today
//                 </h1>
//                 <p className="subtitle text-white">
//                   Thousands of people have their flats up for grabs. Don't miss
//                   your chance to grab your own house today.
//                 </p>
//               </div>
//               <div className="acr-filter-form">
//                 <form method="post">
//                   <div className="row">
//                     <div className="col-lg-3 col-md-6">
//                       <div className="form-group acr-custom-select">
//                         <label>Location: </label>
//                         <Select2
//                           data={locationlist}
//                           options={{
//                             placeholder: "Any Location",
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6">
//                       <div className="form-group acr-custom-select">
//                         <label>Status: </label>
//                         <Select2
//                           data={statuslist}
//                           options={{
//                             placeholder: "Any Status",
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6">
//                       <div className="form-group acr-custom-select">
//                         <label>Price Range: </label>
//                         <Select2
//                           data={pricerangelist}
//                           options={{
//                             placeholder: "Any Range",
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div className="submit-btn col-lg-2 col-md-6">
//                       <div className="form-group">
//                         <button
//                           type="submit"
//                           className="btn-custom secondary btn-block"
//                           name="button"
//                         >
//                           Search listings
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     className={classNames("advanced-search", {
//                       "d-block": this.state.advancesearch,
//                     })}
//                   >
//                     <div className="row">
//                       <div className="col-lg-3 col-md-6">
//                         <div className="acr-custom-select form-group">
//                           <label>Beds: </label>
//                           <Select2
//                             data={bedslist}
//                             options={{
//                               placeholder: "Any amount",
//                             }}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-6">
//                         <div className="acr-custom-select form-group">
//                           <label>Bathrooms: </label>
//                           <Select2
//                             data={bathroomslist}
//                             options={{
//                               placeholder: "Any amount",
//                             }}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-6">
//                         <div className="acr-custom-select form-group">
//                           <label>Type: </label>
//                           <Select2
//                             data={typelist}
//                             options={{
//                               placeholder: "Any Type",
//                             }}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-6">
//                         <div className="acr-custom-select form-group">
//                           <label>Diameter: </label>
//                           <Select2
//                             data={diameterlist}
//                             options={{
//                               placeholder: "Any Range",
//                             }}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//                 <div
//                   className={classNames("advanced-search-trigger semi-circle", {
//                     active: this.state.advancesearch,
//                   })}
//                   onClick={this.advancetoggle}
//                 >
//                   <i className="fas fa-chevron-down" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Banner;

/////////////////////////////////////////////// Functional Component //////////////////////////////////////////////////////////

import React, { useState } from "react";
import Data from "../../../data/select";
import ListingFilter from "../pricing/ListingFilter";

const Banner = () => {
  const [state, setState] = useState([]);
  const [filter, setFilter] = useState([]);
  const [advanceSearch, setAdvanceSearch] = useState(true);
  const [screen2, setScreen2] = useState(null);

  const {
    locationlist,
    statuslist,
    pricerangelist,
    bedslist,
    bathroomslist,
    typelist,
    diameterlist,
  } = Data;

  const filterData = (data) => {
    setScreen2(true);

    const price =
      data.price === 0 ? ["0", "900000000007676780"] : data.price.split(",");
    const status = data.status === undefined ? "" : data.status;
    const bed = data.bed === "Any amount" ? 0 : data.bed;
    const bathroom = data.bathroom === "Any amount" ? 0 : data.bathroom;

    //////   Filtering Data With Conditions

    if (status === "") {
      const abc = state.filter((item) => {
        return (
          parseInt(item.Details.beds) >= bed &&
          parseInt(item.Details.bathrooms) >= bathroom &&
          parseInt(item.BasicInformation.price) >= parseInt(price[0]) &&
          parseInt(item.BasicInformation.price) <= parseInt(price[1])
        );
      });
      setFilter(abc);
    } else {
      const abc = state.filter((item) => {
        return (
          parseInt(item.Details.beds) >= bed &&
          parseInt(item.Details.bathrooms) >= bathroom &&
          parseInt(item.BasicInformation.price) >= parseInt(price[0]) &&
          parseInt(item.BasicInformation.price) <= parseInt(price[1]) &&
          item.BasicInformation.type === status
        );
      });
      setFilter(abc);
    }
  };

  return (
    <div
      className="banner banner-1 banner-3 dark-overlay bg-cover bg-center"
      style={{
        backgroundImage:
          "url(" + process.env.PUBLIC_URL + "/assets/img/banner/3.jpg)",
      }}
    >
      <div className="container">
        <div className="banner-item">
          <div className="banner-inner">
            <h1 className="title text-white">
              Find The Best Deal On The Market Today
            </h1>
            <div className="banner-text">
              <p className="subtitle text-white">
                Thousands of people have their flats up for grabs. Don't miss
                your chance to grab your own house today.
              </p>
            </div>
            <ListingFilter getData={filterData} />

            {/* <div className="acr-filter-form">
              <form method="post">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="form-group acr-custom-select">
                      <label>Location: </label>
                      <Select2
                        data={locationlist}
                        options={{
                          placeholder: "Any Location",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="form-group acr-custom-select">
                      <label>Status: </label>
                      <Select2
                        data={statuslist}
                        options={{
                          placeholder: "Any Status",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="form-group acr-custom-select">
                      <label>Price Range: </label>
                      <Select2
                        data={pricerangelist}
                        options={{
                          placeholder: "Any Range",
                        }}
                      />
                    </div>
                  </div>
                  <div className="submit-btn col-lg-2 col-md-6">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn-custom secondary btn-block"
                        name="button"
                      >
                        Search listings
                      </button>
                    </div>
                  </div>
                </div>
                <div className={advanceSearch ? "advanced-search" : "d-block"}>
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="acr-custom-select form-group">
                        <label>Beds: </label>
                        <Select2
                          data={bedslist}
                          options={{
                            placeholder: "Any amount",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="acr-custom-select form-group">
                        <label>Bathrooms: </label>
                        <Select2
                          data={bathroomslist}
                          options={{
                            placeholder: "Any amount",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="acr-custom-select form-group">
                        <label>Type: </label>
                        <Select2
                          data={typelist}
                          options={{
                            placeholder: "Any Type",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="acr-custom-select form-group">
                        <label>Diameter: </label>
                        <Select2
                          data={diameterlist}
                          options={{
                            placeholder: "Any Range",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div
                className={
                  advanceSearch
                    ? "advanced-search-trigger semi-circle active"
                    : "advanced-search-trigger semi-circle"
                }
                onClick={() => setAdvanceSearch(!advanceSearch)}
              >
                <i className="fas fa-chevron-up" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
