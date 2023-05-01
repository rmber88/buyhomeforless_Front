/*
  // import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import listing from "../../../data/listings";
// import Data from "../../../data/select";
// import { OverlayTrigger, Tooltip, Dropdown, NavLink } from "react-bootstrap";
// import Calculator from "../../layouts/Calculator";
// import Select2 from "react-select2-wrapper";

// const gallerytip = <Tooltip>Gallery</Tooltip>;
// const bedstip = <Tooltip>Beds</Tooltip>;
// const bathstip = <Tooltip>Bathrooms</Tooltip>;
// const areatip = <Tooltip>Square Feet</Tooltip>;

// class Listings extends Component {
//   render() {
//     const {
//       locationlist,
//       statuslist,
//       pricerangelist,
//       bedslist,
//       bathroomslist,
//       typelist,
//       diameterlist,
//       floorlist,
//       sortbylist,
//     } = Data;
//     return (
//       <div className="section pt-0">
//         <div className="container">
//           <div className="row">
//             {/* Sidebar Start */

//             <div className="col-lg-4">
//               <div className="sidebar sidebar-left">
//                 <div className="sidebar-widget">
//                   <h5>Filter Listings</h5>
//                   <div className="acr-filter-form">
//                     <form>
//                       <div className="acr-custom-select form-group">
//                         <label>Location: </label>
//                         <Select2
//                           data={locationlist}
//                           options={{
//                             placeholder: "Any Location",
//                           }}
//                         />
//                       </div>
//                       <div className="acr-custom-select form-group">
//                         <label>Status: </label>
//                         <Select2
//                           data={statuslist}
//                           options={{
//                             placeholder: "Any Status",
//                           }}
//                         />
//                       </div>
//                       <div className="acr-custom-select form-group">
//                         <label>Price Range: </label>
//                         <Select2
//                           data={pricerangelist}
//                           options={{
//                             placeholder: "Any Range",
//                           }}
//                         />
//                       </div>
//                       <div className="acr-custom-select form-group">
//                         <label>Beds: </label>
//                         <Select2
//                           data={bedslist}
//                           options={{
//                             placeholder: "Any amount",
//                           }}
//                         />
//                       </div>
//                       <div className="acr-custom-select form-group">
//                         <label>Bathrooms: </label>
//                         <Select2
//                           data={bathroomslist}
//                           options={{
//                             placeholder: "Any amount",
//                           }}
//                         />
//                       </div>
//                       <div className="acr-custom-select form-group">
//                         <label>Type: </label>
//                         <Select2
//                           data={typelist}
//                           options={{
//                             placeholder: "Any Type",
//                           }}
//                         />
//                       </div>
//                       <button
//                         type="submit"
//                         className="btn-block btn-custom"
//                         name="button"
//                       >
//                         Apply filters
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//                 <div className="sidebar-widget">
//                   <h5>Recent Listing</h5>
//                   {/* Listing Start */}
//                   {listing
//                     .filter(function (item) {
//                       return item.recent === true;
//                     })
//                     .slice(0, 3)
//                     .map((item, i) => (
//                       <div key={i} className="listing listing-list">
//                         <div className="listing-thumbnail">
//                           <Link to="/listing-details-v1">
//                             <img
//                               src={process.env.PUBLIC_URL + "/" + item.gridimg}
//                               alt="listing"
//                             />
//                           </Link>
//                         </div>
//                         <div className="listing-body">
//                           <h6 className="listing-title">
//                             {" "}
//                             <Link to="/listing-details-v1" title={item.title}>
//                               {item.title}
//                             </Link>{" "}
//                           </h6>
//                           <span className="listing-price">
//                             {new Intl.NumberFormat().format(
//                               item.monthlyprice.toFixed(2)
//                             )}
//                             $ <span>/month</span>{" "}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   {/* Listing End */}
//                 </div>
//                 <div className="sidebar-widget">
//                   <h5>Mortgage Calculator</h5>
//                   <Calculator />
//                 </div>
//               </div>
//             </div>
//             {/* Sidebar End */}
//             {/* Posts Start */}
//             <div className="col-lg-8">
//               {/* Listing Start */}
//               {listing.slice(0, 4).map((item, i) => (
//                 <div key={i} className="listing listing-list">
//                   <div className="listing-thumbnail">
//                     <Link to="/listing-details-v1">
//                       <img
//                         src={process.env.PUBLIC_URL + "/" + item.listimg}
//                         alt="listing"
//                       />
//                     </Link>
//                     <div className="listing-badges">
//                       {item.star === true ? (
//                         <span className="listing-badge featured">
//                           {" "}
//                           <i className="fas fa-star" />{" "}
//                         </span>
//                       ) : (
//                         ""
//                       )}
//                       {item.sale === true ? (
//                         <span className="listing-badge sale">On Sale</span>
//                       ) : (
//                         ""
//                       )}
//                       {item.pending === true ? (
//                         <span className="listing-badge pending"> Pending</span>
//                       ) : (
//                         ""
//                       )}
//                       {item.rental === true ? (
//                         <span className="listing-badge rent"> Rental</span>
//                       ) : (
//                         ""
//                       )}
//                     </div>
//                     <div className="listing-controls">
//                       <Link to="#" className="favorite">
//                         <i className="far fa-heart" />
//                       </Link>
//                       <Link to="#" className="compare">
//                         <i className="fas fa-sync-alt" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="listing-body">
//                     <div className="listing-author">
//                       <img
//                         src={process.env.PUBLIC_URL + "/" + item.authorimg}
//                         alt="author"
//                       />
//                       <div className="listing-author-body">
//                         <p>
//                           {" "}
//                           <Link to="#">{item.authorname}</Link>{" "}
//                         </p>
//                         <span className="listing-date">{item.postdate}</span>
//                       </div>
//                       <Dropdown className="options-dropdown">
//                         <Dropdown.Toggle as={NavLink}>
//                           <i className="fas fa-ellipsis-v" />
//                         </Dropdown.Toggle>
//                         <Dropdown.Menu className="dropdown-menu-right">
//                           <ul>
//                             <li>
//                               {" "}
//                               <Link to="tel:+123456789">
//                                 {" "}
//                                 <i className="fas fa-phone" /> Call Agent
//                               </Link>{" "}
//                             </li>
//                             <li>
//                               {" "}
//                               <Link to="mailto:+123456789">
//                                 {" "}
//                                 <i className="fas fa-envelope" /> Send Message
//                               </Link>{" "}
//                             </li>
//                             <li>
//                               {" "}
//                               <Link to="/listing-details-v1">
//                                 {" "}
//                                 <i className="fas fa-bookmark" /> Book Tour
//                               </Link>{" "}
//                             </li>
//                           </ul>
//                         </Dropdown.Menu>
//                       </Dropdown>
//                     </div>
//                     <h5 className="listing-title">
//                       {" "}
//                       <Link to="/listing-details-v1" title={item.title}>
//                         {item.title}
//                       </Link>{" "}
//                     </h5>
//                     <span className="listing-price">
//                       {new Intl.NumberFormat().format(
//                         item.monthlyprice.toFixed(2)
//                       )}
//                       $ <span>/month</span>{" "}
//                     </span>
//                     <p className="listing-text">{item.text}</p>
//                     <div className="acr-listing-icons">
//                       <OverlayTrigger overlay={bedstip}>
//                         <div className="acr-listing-icon">
//                           <i className="flaticon-bedroom" />
//                           <span className="acr-listing-icon-value">
//                             {item.beds}
//                           </span>
//                         </div>
//                       </OverlayTrigger>
//                       <OverlayTrigger overlay={bathstip}>
//                         <div className="acr-listing-icon">
//                           <i className="flaticon-bathroom" />
//                           <span className="acr-listing-icon-value">
//                             {item.bathrooms}
//                           </span>
//                         </div>
//                       </OverlayTrigger>
//                       <OverlayTrigger overlay={areatip}>
//                         <div className="acr-listing-icon">
//                           <i className="flaticon-ruler" />
//                           <span className="acr-listing-icon-value">
//                             {new Intl.NumberFormat().format(item.area)}
//                           </span>
//                         </div>
//                       </OverlayTrigger>
//                     </div>
//                     <div className="listing-gallery-wrapper">
//                       <Link
//                         to="/listing-details-v1"
//                         className="btn-custom btn-sm secondary"
//                       >
//                         View Details
//                       </Link>
//                       <OverlayTrigger overlay={gallerytip}>
//                         <Link to="#" className="listing-gallery">
//                           {" "}
//                           <i className="fas fa-camera" />{" "}
//                         </Link>
//                       </OverlayTrigger>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               {/* Listing End */}
//             </div>
//             {/* Posts End */}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Listings;

///////////////////////////////////////////////    Functional Componenets //////////////////////////////////////////////////////////

import React, { useState, useEffect, useReducer } from "react";
import { useNavigate, Link } from "react-router-dom";
import Data from "../../../data/select";
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from "react-bootstrap";
import Calculator from "../../layouts/Calculator";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import ListingReducer from "../../../reducers/ListingReducer";
import Gallery from "../services/Gallery";

const gallerytip = <Tooltip>Gallery</Tooltip>;
const bedstip = <Tooltip>Beds</Tooltip>;
const bathstip = <Tooltip>Bathrooms</Tooltip>;
const areatip = <Tooltip>Square Feet</Tooltip>;

var ListingData = {};

const Listings = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const { chats, setChats, setSelectedChat } = user ? ChatState() : "";

  const [state, setState] = useState([]);
  const [filter, setFilter] = useState([]);
  const [screen2, setScreen2] = useState(null);

  /// Using Reducer For ListingFilter
  const [listingState, ListingDispatch] = useReducer(
    ListingReducer,
    ListingData
  );

  /// /////  Fetching Data From Api

  const SubmitlistingData = async () => {
    const resposne = await fetch("http://localhost:3003/submitlisting/submit");
    const data = await resposne.json();
    setState(data.result);
  };

  useEffect(() => {
    SubmitlistingData();
  }, []);

  const filterData = () => {
    ListingData = {
      bed: listingState.bed === undefined ? 0 : listingState.bed,
      bathroom: listingState.bathroom === undefined ? 0 : listingState.bathroom,
      price: listingState.price === undefined ? "0" : listingState.price,
      status: listingState.status === "Any Status" ? "" : listingState.status,
      location: listingState.location,
      type: listingState.type,
    };
    setScreen2(true);

    const price =
      ListingData.price === 0
        ? ["0", "900000000007676780"]
        : ListingData.price.split(",");
    const status = ListingData.status === undefined ? "" : ListingData.status;
    const bed = ListingData.bed === "Any amount" ? 0 : ListingData.bed;
    const bathroom =
      ListingData.bathroom === "Any amount" ? 0 : ListingData.bathroom;

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

  /////  Acessing Chat
  const acessChat = async (userId) => {
    if (!user) {
      alert("you need to login in first");
    } else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };

        const { data } = await axios.post(
          "http://localhost:3003/api/chat",
          { userId },
          config
        );
        if (!chats.find((c) => c.id === data.id)) setChats([data, ...chats]);
        setSelectedChat(data);
        console.log(data);
        navigate("/chat");
        window.location.reload(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const {
    locationlist,
    statuslist,
    pricerangelist,
    bedslist,
    bathroomslist,
    typelist,
  } = Data;

  return (
    <div className="section pt-0">
      <div className="container">
        <div className="row">
          {/* Sidebar Start */}
          <div className="col-lg-4">
            <div className="sidebar sidebar-left">
              <div className="sidebar-widget">
                <h5>Filter Listings</h5>
                <div className="acr-filter-form">
                  {/* <form> */}
                  <div className="">
                    <select
                      className="form-control"
                      name="location"
                      style={{
                        fontWeight: "bold",
                        marginBottom: "15px",
                        padding: "10px",
                      }}
                      value={listingState.location}
                      onChange={(e) =>
                        ListingDispatch({
                          type: "UPDATE",
                          value: e.target.value,
                          key: "location",
                        })
                      }
                    >
                      <option value="" hidden>
                        Location
                      </option>
                      {locationlist.map((res) => {
                        return (
                          <option className="form-control" value={res}>
                            {res}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="">
                    <select
                      defaultValue="Any Status"
                      className="form-control"
                      name="Status"
                      style={{ fontWeight: "bold", marginBottom: "15px" }}
                      value={listingState.status}
                      onChange={(e) =>
                        ListingDispatch({
                          type: "UPDATE",
                          value: e.target.value,
                          key: "status",
                        })
                      }
                    >
                      <option value="" hidden>
                        Status
                      </option>
                      {statuslist.map((res) => {
                        return (
                          <option className="form-control" value={res}>
                            {res}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="">
                    <select
                      className="form-control"
                      value={listingState.price}
                      style={{
                        fontWeight: "bold",
                        marginBottom: "15px",
                        padding: "10px",
                      }}
                      onChange={(e) =>
                        ListingDispatch({
                          type: "UPDATE",
                          value: e.target.value,
                          key: "price",
                        })
                      }
                    >
                      <option value="" hidden>
                        Price Range
                      </option>
                      {pricerangelist.map((res) => {
                        return (
                          <option className="form-control" value={res.value}>
                            {res.res}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="">
                    <select
                      className="form-control"
                      value={listingState.bed}
                      style={{
                        fontWeight: "bold",
                        marginBottom: "15px",
                        padding: "10px",
                      }}
                      onChange={(e) =>
                        ListingDispatch({
                          type: "UPDATE",
                          value: e.target.value,
                          key: "bed",
                        })
                      }
                    >
                      <option value="" hidden>
                        Beds
                      </option>
                      {bedslist.map((res) => {
                        return (
                          <option className="form-control" value={res}>
                            {res}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="">
                    <select
                      className="form-control"
                      value={listingState.bathroom}
                      style={{
                        fontWeight: "bold",
                        marginBottom: "15px",
                        padding: "10px",
                      }}
                      onChange={(e) =>
                        ListingDispatch({
                          type: "UPDATE",
                          value: e.target.value,
                          key: "bathroom",
                        })
                      }
                    >
                      <option value="" hidden>
                        Bathrooms
                      </option>
                      {bathroomslist.map((res) => {
                        return (
                          <option className="form-control" value={res}>
                            {res}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="">
                    <select
                      className="form-control"
                      value={listingState.type}
                      style={{
                        fontWeight: "bold",
                        marginBottom: "15px",
                        padding: "10px",
                      }}
                      onChange={(e) =>
                        ListingDispatch({
                          type: "UPDATE",
                          value: e.target.value,
                          key: "type",
                        })
                      }
                    >
                      <option value="" hidden>
                        Type
                      </option>
                      {typelist.map((res) => {
                        return (
                          <option className="form-control" value={res}>
                            {res}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <button
                    onClick={() => filterData()}
                    className="btn-block btn-custom"
                  >
                    Apply filters
                  </button>
                  {/* </form> */}
                </div>
              </div>
              <div className="sidebar-widget">
                <h5>Recent Listing</h5>
                Listing Start
                {state.map((res) => {
                  const basicInformation = res.BasicInformation;
                  const Gallery = res.Gallery;
                  console.log(Gallery.picture[0]);
                  return (
                    <div className="listing listing-list ">
                      <div className="listing-thumbnail">
                        <Link
                          onClick={() => {
                            navigate(`/listing-details-v1/${res._id}`);
                            window.location.reload(false);
                          }}
                        >
                          <img
                            src={`http://localhost:3003/${Gallery.file}`}
                            alt="listing"
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </Link>
                      </div>
                      <div className="listing-body">
                        <h5 className="listing-title">
                          {" "}
                          <Link
                            onClick={() => {
                              navigate(`/listing-details-v1/${res._id}`);
                              window.location.reload(false);
                            }}
                          >
                            {basicInformation.name}
                          </Link>{" "}
                        </h5>
                        <span className="listing-price">
                          {basicInformation.price}
                          {/* {new Intl.NumberFormat().format(
                          item.monthlyprice.toFixed(2)
                        )} */}
                          ${" "}
                          {basicInformation.period === "Monthly" ||
                          basicInformation.period === "Yearly" ? (
                            <span>/{basicInformation.period}</span>
                          ) : (
                            <></>
                          )}{" "}
                        </span>
                      </div>
                    </div>
                  );
                })}
                Listing End
              </div>
              <div className="sidebar-widget">
                <h5>Mortgage Calculator</h5>
                <Calculator />
              </div>
            </div>
          </div>
          {/* Sidebar End */}
          {/* Posts Start */}
          <div className={`${!screen2 ? "col-lg-8 self-center" : "col-lg-8"}`}>
            {/* Listing Start */}
            {/* {listing.slice(0, 4).map((item, i) => ( */}
            {screen2 ? (
              filter.length === 0 ? (
                <div className="flex justify-center">
                  <div className="md:w-9/12 lg:w-4/6  border p-10 border-gray-500 rounded-lg flex justify-between items-center">
                    <div className="w-32 pr-12">
                      <img
                        src="http://localhost:3000/assets/img/exclaimationMark.png "
                        width={"100%"}
                      />
                    </div>
                    <div className="w-10/12">
                      <h2 className="mb-4 text-gray italic">{`Property Not Found `}</h2>
                      <p className="text-gray-200">
                        Sorry, the specific type of property you are searching
                        for is currently not available on our website. Please
                        check back later or contact us for further assistance
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    {filter.slice(0, 3).map((res) => {
                      const basicInformation = res.BasicInformation;
                      const deatils = res.Details;
                      const author = res.Author;
                      // console.log(author);
                      console.log(Gallery.picture);
                      return (
                        <div className="listing listing-list ">
                          <div
                            className="listing-thumbnail"
                            style={{ width: "60%" }}
                          >
                            <Link
                              onClick={() => {
                                navigate(`/listing-details-v1/${res._id}`);
                                window.location.reload(false);
                              }}
                            >
                              <img
                                src={Gallery.picture}
                                alt="listing"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </Link>
                            <div className="listing-badges">
                              <span className="listing-badge featured">
                                {" "}
                                <i className="fas fa-star" />{" "}
                              </span>

                              <span className="listing-badge sale">
                                On Sale
                              </span>

                              <span className="listing-badge pending">
                                {" "}
                                Pending
                              </span>

                              <span className="listing-badge rent">
                                {" "}
                                Rental
                              </span>
                            </div>
                            <div className="listing-controls">
                              <Link to="#" className="favorite">
                                <i className="far fa-heart" />
                              </Link>
                              <Link to="#" className="compare">
                                <i className="fas fa-sync-alt" />
                              </Link>
                            </div>
                          </div>
                          <div
                            className="listing-body"
                            style={{ width: "70%" }}
                          >
                            <div className="listing-author">
                              <img
                                src={
                                  "http://localhost:3000/assets/img/people/2.jpg"
                                }
                                alt="author"
                              />
                              <div className="listing-author-body">
                                <p>
                                  {" "}
                                  <Link to="#">{author.authorname}</Link>{" "}
                                </p>
                                <span className="listing-date">
                                  {"item.postdate"}
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
                                        <i className="fas fa-phone" /> Call
                                        Agent
                                      </Link>{" "}
                                    </li>
                                    <li
                                      onClick={() => acessChat(author.authorId)}
                                    >
                                      <Link to="/chat">
                                        <i className="fas fa-envelope" /> Send
                                        Message
                                      </Link>
                                    </li>
                                    <li>
                                      {" "}
                                      <Link to="/listing-details-v1">
                                        {" "}
                                        <i className="fas fa-bookmark" /> Book
                                        Tour
                                      </Link>{" "}
                                    </li>
                                  </ul>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <h5 className="listing-title">
                              {" "}
                              <Link
                                to="/listing-details-v1"
                                title={basicInformation.name}
                              >
                                {basicInformation.name}
                              </Link>{" "}
                            </h5>
                            <span className="listing-price">
                              {basicInformation.price}
                              {/* {new Intl.NumberFormat().format(
                                  item.monthlyprice.toFixed(2)
                                )} */}
                              $ <span>/{basicInformation.period}</span>{" "}
                            </span>
                            <p className="listing-text">
                              {basicInformation.description}
                            </p>
                            <div className="acr-listing-icons">
                              <OverlayTrigger overlay={bedstip}>
                                <div className="acr-listing-icon">
                                  <i className="flaticon-bedroom" />
                                  <span className="acr-listing-icon-value">
                                    {deatils.beds}
                                  </span>
                                </div>
                              </OverlayTrigger>
                              <OverlayTrigger overlay={bathstip}>
                                <div className="acr-listing-icon">
                                  <i className="flaticon-bathroom" />
                                  <span className="acr-listing-icon-value">
                                    {deatils.bathrooms}
                                  </span>
                                </div>
                              </OverlayTrigger>
                              <OverlayTrigger overlay={areatip}>
                                <div className="acr-listing-icon">
                                  <i className="flaticon-ruler" />
                                  <span className="acr-listing-icon-value">
                                    {basicInformation.space}
                                    {/* {new Intl.NumberFormat().format(item.area)} */}
                                  </span>
                                </div>
                              </OverlayTrigger>
                            </div>
                            <div className="listing-gallery-wrapper">
                              <Link
                                onClick={() => {
                                  navigate(`/listing-details-v1/${res._id}`);
                                  window.location.reload(false);
                                }}
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
                      );
                    })}
                  </div>
                  {filter.length >= 4 ? (
                    <div
                      className="text-themeColor cursor-pointer text-center"
                      onClick={() => {
                        navigate("/view-all", { state: filter });
                      }}
                    >
                      View All
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              )
            ) : !state ? (
              <div className="">
                <div className="flex justify-center">
                  <img src="http://localhost:3000/assets/img/Loading.gif" />
                </div>
                <p className="text-center my-4 text-xl font-medium ">
                  Loading .....
                </p>
              </div>
            ) : (
              <div>
                <div>
                  {state.slice(0, 3).map((res) => {
                    const basicInformation = res.BasicInformation;
                    const deatils = res.Details;
                    const author = res.Author;
                    const Gallery = res.Gallery;
                    // console.log(author);
                    // console.log(gallery.picture);
                    return (
                      <div className="listing listing-list ">
                        <div
                          className="listing-thumbnail"
                          style={{ width: "60%" }}
                        >
                          <Link
                            onClick={() => {
                              navigate(`/listing-details-v1/${res._id}`);
                              window.location.reload(false);
                            }}
                          >
                            <img
                              src={`http://localhost:3003/${Gallery.file}`}
                              alt="listing"
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </Link>
                          <div className="listing-badges">
                            <span className="listing-badge featured">
                              {" "}
                              <i className="fas fa-star" />{" "}
                            </span>

                            <span className="listing-badge sale">On Sale</span>

                            <span className="listing-badge pending">
                              {" "}
                              Pending
                            </span>

                            <span className="listing-badge rent"> Rental</span>
                          </div>
                          <div className="listing-controls">
                            <Link to="#" className="favorite">
                              <i className="far fa-heart" />
                            </Link>
                            <Link to="#" className="compare">
                              <i className="fas fa-sync-alt" />
                            </Link>
                          </div>
                        </div>
                        <div className="listing-body" style={{ width: "70%" }}>
                          <div className="listing-author">
                            <img
                              src={
                                "http://localhost:3000/assets/img/people/2.jpg"
                              }
                              alt="author"
                            />
                            <div className="listing-author-body">
                              <p>
                                {" "}
                                <Link to="#">{author.authorname}</Link>{" "}
                              </p>
                              <span className="listing-date">
                                {"item.postdate"}
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
                                  <li
                                    onClick={() => acessChat(author.authorId)}
                                  >
                                    <Link to="/chat">
                                      <i className="fas fa-envelope" /> Send
                                      Message
                                    </Link>
                                  </li>
                                  <li>
                                    {" "}
                                    <Link to="/listing-details-v1">
                                      {" "}
                                      <i className="fas fa-bookmark" /> Book
                                      Tour
                                    </Link>{" "}
                                  </li>
                                </ul>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <h5 className="listing-title">
                            {" "}
                            <Link
                              to="/listing-details-v1"
                              title={basicInformation.name}
                            >
                              {basicInformation.name}
                            </Link>{" "}
                          </h5>
                          <span className="listing-price">
                            {basicInformation.price}
                            {/* {new Intl.NumberFormat().format(
                    item.monthlyprice.toFixed(2)
                  )} */}
                            ${" "}
                            {basicInformation.period === "Monthly" ||
                            basicInformation.period === "Yearly" ? (
                              <span>/{basicInformation.period}</span>
                            ) : (
                              <></>
                            )}{" "}
                          </span>
                          <p className="listing-text">
                            {basicInformation.description}
                          </p>
                          <div className="acr-listing-icons">
                            <OverlayTrigger overlay={bedstip}>
                              <div className="acr-listing-icon">
                                <i className="flaticon-bedroom" />
                                <span className="acr-listing-icon-value">
                                  {deatils.beds}
                                </span>
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={bathstip}>
                              <div className="acr-listing-icon">
                                <i className="flaticon-bathroom" />
                                <span className="acr-listing-icon-value">
                                  {deatils.bathrooms}
                                </span>
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={areatip}>
                              <div className="acr-listing-icon">
                                <i className="flaticon-ruler" />
                                <span className="acr-listing-icon-value">
                                  {basicInformation.space}
                                  {/* {new Intl.NumberFormat().format(item.area)} */}
                                </span>
                              </div>
                            </OverlayTrigger>
                          </div>
                          <div className="listing-gallery-wrapper">
                            <Link
                              onClick={() => {
                                navigate(`/listing-details-v1/${res._id}`);
                                window.location.reload(false);
                              }}
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
                    );
                  })}
                </div>
                <div>
                  {state.length >= 4 ? (
                    <div
                      className="text-themeColor cursor-pointer text-center"
                      onClick={() => {
                        navigate("/view-all", { state: state });
                      }}
                    >
                      View All
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )}
            {/* Listing End */}
            {/* Promoitional Banner */}
            {/* <div className="mt-72">
              <img
                src="http://localhost:3000/assets/img/PromotionalBanner.png"
                className="h-96"
              />
            </div> */}
          </div>
          {/* Posts End */}
        </div>
      </div>
    </div>
  );
};

export default Listings;

// {!state ? (
//   <div className="">
//     <div className="flex justify-center">
//       <img src="http://localhost:3000/assets/img/Loading.gif" />
//     </div>
//     <p className="text-center my-4 text-xl font-medium ">
//       Loading .....
//     </p>
//   </div>
// ) : (
//   state.map((res) => {
//     const basicInformation = res.BasicInformation;
//     const deatils = res.Details;
//     const gallery = res.Gallery;
//     const author = res.Author;
//     // console.log(author);
//     // console.log(gallery.picture);
//     return (
//       <div className="listing listing-list ">
//         <div className="listing-thumbnail" style={{ width: "60%" }}>
//           <Link
//             onClick={() => {
//               navigate(`/listing-details-v1/${res._id}`);
//               window.location.reload(false);
//             }}
//           >
//             <img
//               src="http://localhost:3000/assets/img/listings/1.jpg"
//               alt="listing"
//               style={{
//                 width: "100%",
//                 height: "100%",
//               }}
//             />
//           </Link>
//           <div className="listing-badges">
//             <span className="listing-badge featured">
//               {" "}
//               <i className="fas fa-star" />{" "}
//             </span>

//             <span className="listing-badge sale">On Sale</span>

//             <span className="listing-badge pending"> Pending</span>

//             <span className="listing-badge rent"> Rental</span>
//           </div>
//           <div className="listing-controls">
//             <Link to="#" className="favorite">
//               <i className="far fa-heart" />
//             </Link>
//             <Link to="#" className="compare">
//               <i className="fas fa-sync-alt" />
//             </Link>
//           </div>
//         </div>
//         <div className="listing-body" style={{ width: "70%" }}>
//           <div className="listing-author">
//             <img
//               src={"http://localhost:3000/assets/img/people/2.jpg"}
//               alt="author"
//             />
//             <div className="listing-author-body">
//               <p>
//                 {" "}
//                 <Link to="#">{author.authorname}</Link>{" "}
//               </p>
//               <span className="listing-date">
//                 {"item.postdate"}
//               </span>
//             </div>
//             <Dropdown className="options-dropdown">
//               <Dropdown.Toggle as={NavLink}>
//                 <i className="fas fa-ellipsis-v" />
//               </Dropdown.Toggle>
//               <Dropdown.Menu className="dropdown-menu-right">
//                 <ul>
//                   <li>
//                     {" "}
//                     <Link to="tel:+123456789">
//                       {" "}
//                       <i className="fas fa-phone" /> Call Agent
//                     </Link>{" "}
//                   </li>
//                   <li onClick={() => acessChat(author.authorId)}>
//                     <Link to="/chat">
//                       <i className="fas fa-envelope" /> Send Message
//                     </Link>
//                   </li>
//                   <li>
//                     {" "}
//                     <Link to="/listing-details-v1">
//                       {" "}
//                       <i className="fas fa-bookmark" /> Book Tour
//                     </Link>{" "}
//                   </li>
//                 </ul>
//               </Dropdown.Menu>
//             </Dropdown>
//           </div>
//           <h5 className="listing-title">
//             {" "}
//             <Link
//               to="/listing-details-v1"
//               title={basicInformation.name}
//             >
//               {basicInformation.name}
//             </Link>{" "}
//           </h5>
//           <span className="listing-price">
//             {basicInformation.price}
//             {/* {new Intl.NumberFormat().format(
//               item.monthlyprice.toFixed(2)
//             )} */}
//             $ <span>/{basicInformation.period}</span>{" "}
//           </span>
//           <p className="listing-text">
//             {basicInformation.description}
//           </p>
//           <div className="acr-listing-icons">
//             <OverlayTrigger overlay={bedstip}>
//               <div className="acr-listing-icon">
//                 <i className="flaticon-bedroom" />
//                 <span className="acr-listing-icon-value">
//                   {deatils.beds}
//                 </span>
//               </div>
//             </OverlayTrigger>
//             <OverlayTrigger overlay={bathstip}>
//               <div className="acr-listing-icon">
//                 <i className="flaticon-bathroom" />
//                 <span className="acr-listing-icon-value">
//                   {deatils.bathrooms}
//                 </span>
//               </div>
//             </OverlayTrigger>
//             <OverlayTrigger overlay={areatip}>
//               <div className="acr-listing-icon">
//                 <i className="flaticon-ruler" />
//                 <span className="acr-listing-icon-value">
//                   {basicInformation.space}
//                   {/* {new Intl.NumberFormat().format(item.area)} */}
//                 </span>
//               </div>
//             </OverlayTrigger>
//           </div>
//           <div className="listing-gallery-wrapper">
//             <Link
//               onClick={() => {
//                 navigate(`/listing-details-v1/${res._id}`);
//                 window.location.reload(false);
//               }}
//               className="btn-custom btn-sm secondary"
//             >
//               View Details
//             </Link>
//             <OverlayTrigger overlay={gallerytip}>
//               <Link to="#" className="listing-gallery">
//                 {" "}
//                 <i className="fas fa-camera" />{" "}
//               </Link>
//             </OverlayTrigger>
//           </div>
//         </div>
//       </div>
//     );
//   })
// )}
