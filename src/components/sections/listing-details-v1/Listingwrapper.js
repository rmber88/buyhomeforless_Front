import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  OverlayTrigger,
  Tooltip,
  Dropdown,
  NavLink,
  Accordion,
  Card,
} from "react-bootstrap";
import listing from "../../../data/listings";
import Calculator from "../../layouts/Calculator";
import $ from "jquery";
import "magnific-popup";

// Gallery

const gallerytip = <Tooltip>Gallery</Tooltip>;
const bedstip = <Tooltip>Beds</Tooltip>;
const bathstip = <Tooltip>Bathrooms</Tooltip>;
const areatip = <Tooltip>Square Feet</Tooltip>;

const Listingwrapper = () => {
  const [state, setState] = useState({
    Location: "location",
    BasicInformation: "BasicInformation",

    Details: "Details",
    Features: "Features",
    Gallery: "Gallery",
  });
  const [showmore, setShowMore] = useState(false);
  const { id } = useParams();

  const getData = async () => {
    const response = await fetch("http://localhost:3003/submitlisting/submit", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",
      },
    });
    const data = await response.json();
    const find = data.result.find((res) => res._id === id);
    setState(find);
  };
  useEffect(() => {
    getData();
  }, []);

  function popup() {
    $(".gallery-thumb").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  }

  return (
    <div className="section listing-wrapper" style={{ marginBottom: "10%" }}>
      <div className="container">
        <div className="row">
          {/* Listings Start */}
          <div className="col-lg-8">
            {/* Content Start */}
            <div className="listing-content">
              <h4>Property Overview</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="row">
                {state.Gallery.picture &&
                  state.Gallery.picture.map((item, i) => (
                    <div key={i} className="col-md-6 mb-3">
                      <button
                        onClick={() => popup()}
                        className="gallery-thumb"
                        style={{ border: "none", background: "none" }}
                      >
                        <img src={`http://localhost:3003/${item}`} alt="post" />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            <div style={{ height: "8%", padding: "5% 0", textAlign: "center" }}>
              <h4 style={{ marginBottom: "2%" }}>Direction</h4>
              <iframe
                width="100%"
                height="95%"
                src={`https://maps.google.com/maps?q=${state.Location.latitude},${state.Location.longitude}&hl=es;z=14&output=embed`}
              ></iframe>
            </div>
            {/* Content End */}
            {/* Price Range In the area Start */}
            <div className="section">
              <div className="acr-area-price">
                <span style={{ left: "30%" }}>852,000$</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="acr-area-price-wrapper">
                  <div className="acr-area-price-min">
                    <h5>562,000$</h5>
                    <span>Lowest</span>
                  </div>
                  <h5>Price range in the area</h5>
                  <div className="acr-area-price-max">
                    <h5>1,280,000$</h5>
                    <span>Highest</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Price Range In the area End */}
            <div className="section section-padding pt-0 acr-listing-features">
              <h4>Features</h4>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="listing-feature-wrapper">
                    <div className="listing-feature">
                      <i className="flaticon-picture" />
                      <h6 className="listing-feature-label">Propery Type</h6>
                      <span className="listing-feature-value">
                        {state.BasicInformation.type}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-bone" />
                      <h6 className="listing-feature-label">Pet Friendly</h6>
                      <span className="listing-feature-value">
                        {state.Features.pet ? "YES" : "NO"}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-chair" />
                      <h6 className="listing-feature-label">Furnished</h6>
                      <span className="listing-feature-value">
                        {state.Features.furnished ? "YES" : "NO"}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-fan" />
                      <h6 className="listing-feature-label">Cooling</h6>
                      <span className="listing-feature-value">
                        {state.Features.cooling ? "YES" : "NO"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="listing-feature-wrapper">
                    <div className="listing-feature">
                      <i className="flaticon-bathroom" />
                      <h6 className="listing-feature-label">Bathrooms</h6>
                      <span className="listing-feature-value">
                        {state.Details.bathrooms}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-pillow" />
                      <h6 className="listing-feature-label">Bed Rooms</h6>
                      <span className="listing-feature-value">
                        {state.Details.beds}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-mailbox" />
                      <h6 className="listing-feature-label">Mail box</h6>
                      <span className="listing-feature-value">
                        {state.Features.mail ? "YES" : "NO"}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-ruler" />
                      <h6 className="listing-feature-label">Property Size</h6>
                      <span className="listing-feature-value">
                        {`${state.BasicInformation.space} sqft`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className={
                  showmore
                    ? "d-none"
                    : "load-more-features btn-custom-2 light-grey btn-block"
                }
                onClick={() => setShowMore(true)}
              >
                Show More
              </button>
              <div className={showmore ? "d-block" : `hidden-listing-features`}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="listing-feature">
                      <i className="flaticon-key" />
                      <h6 className="listing-feature-label">Property Id</h6>
                      <span className="listing-feature-value">
                        {state.Details.id}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-garage" />
                      <h6 className="listing-feature-label">Parking</h6>
                      <span className="listing-feature-value">
                        {state.Features.parking ? "YES" : "NO"}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-history" />
                      <h6 className="listing-feature-label">Year Built</h6>
                      <span className="listing-feature-value">1979</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="listing-feature">
                      <i className="flaticon-new" />
                      <h6 className="listing-feature-label">Condition</h6>
                      <span className="listing-feature-value">
                        {state.Details.condition
                          ? state.Details.condition
                          : "--"}
                      </span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-ruler" />
                      <h6 className="listing-feature-label">Lot Size</h6>
                      <span className="listing-feature-value">89 Acres</span>
                    </div>
                    <div className="listing-feature">
                      <i className="flaticon-eye" />
                      <h6 className="listing-feature-label">View</h6>
                      <span className="listing-feature-value">
                        {state.Features.view ? "YES" : "NO"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section pt-0 acr-listing-nearby">
              <h4>What's Nearby</h4>
              <div className="listing-nearby-item">
                <h6 className="custom-success">
                  <i className="fas fa-utensils" />
                  Restaurants
                </h6>
                <ul>
                  <li>
                    <span>
                      <b>The One</b> <span>(1.3 km)</span>{" "}
                    </span>
                    <ul>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li>
                        <i className="fas fa-star fa-xs" />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>
                      <b>Elephant</b> <span>(0.2 km)</span>{" "}
                    </span>
                    <ul>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>
                      <b>Jorgie and Clyne</b> <span>(3.2 km)</span>{" "}
                    </span>
                    <ul>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li>
                        <i className="fas fa-star fa-xs" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="listing-nearby-item">
                <h6 className="custom-danger">
                  <i className="fas fa-graduation-cap" />
                  Education
                </h6>
                <ul>
                  <li>
                    <span>
                      <b>Greater Moscow Liberty School</b> <span>(1.3 km)</span>{" "}
                    </span>
                    <ul>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li>
                        <i className="fas fa-star fa-xs" />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>
                      <b>Chandler Highschool</b> <span>(0.2 km)</span>{" "}
                    </span>
                    <ul>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>
                      <b>Insitution of Science and Technology</b>{" "}
                      <span>(3.2 km)</span>{" "}
                    </span>
                    <ul>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li>
                        <i className="fas fa-star fa-xs" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="listing-nearby-item">
                <h6 className="custom-warning">
                  <i className="fas fa-shopping-basket" />
                  Essentials
                </h6>
                <ul>
                  <li>
                    <span>
                      <b>Joe's 24/7 Groceries</b> <span>(0.6 km)</span>{" "}
                    </span>
                    <ul>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li>
                        <i className="fas fa-star fa-xs" />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>
                      <b>Frank and Joe</b> <span>(0.9 km)</span>{" "}
                    </span>
                    <ul>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>
                      <b>All United Store</b> <span>(1.2 km)</span>{" "}
                    </span>
                    <ul>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                      <li className="custom-warning">
                        <i className="fas fa-star fa-xs" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="section pt-0">
              <h4>Property Video</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap
              </p>
              {state.Gallery.video ? (
                <div className="embed-responsive embed-responsive-21by9">
                  <iframe
                    title="video"
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/Sz_1tkcU0Co"
                  />
                </div>
              ) : (
                <div className="embed-responsive embed-responsive-21by9">
                  <h5>No Property Video Found</h5>
                </div>
              )}
            </div>
            <div className="section pt-0 acr-listing-history">
              <h4>Property History</h4>
              <Accordion defaultActiveKey="0" className="with-gap">
                <Card>
                  <Accordion.Collapse eventKey="0" className="collapseparent">
                    <Card.Body>
                      <div className="row">
                        <div className="col-sm-4">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/listing-single/history-1.jpg"
                            }
                            alt="property history"
                          />
                        </div>
                        <div className="col-sm-8">
                          <h5>The Beginning</h5>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={NavLink} variant="link" eventKey="0">
                      1979 - 1999
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
                <Card>
                  <Accordion.Collapse eventKey="1" className="collapseparent">
                    <Card.Body>
                      <div className="row">
                        <div className="col-sm-4">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/listing-single/history-2.jpg"
                            }
                            alt="property history"
                          />
                        </div>
                        <div className="col-sm-8">
                          <h5>The Rebuilding Phase</h5>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor,
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={NavLink} variant="link" eventKey="1">
                      2000 - 2012
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
                <Card>
                  <Accordion.Collapse eventKey="2" className="collapseparent">
                    <Card.Body>
                      <div className="row">
                        <div className="col-sm-4">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/listing-single/history-3.jpg"
                            }
                            alt="property history"
                          />
                        </div>
                        <div className="col-sm-8">
                          <h5>Modernization</h5>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor,
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={NavLink} variant="link" eventKey="2">
                      2013 - Till date
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
              </Accordion>
            </div>
            <div className="section pt-0">
              <h4>Schedule Link tour</h4>
              <form>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      name="fname"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Date"
                      name="date"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea
                      className="form-control"
                      placeholder="Type your comment..."
                      name="comment"
                      rows={7}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn-custom primary"
                  name="button"
                >
                  Schedule Tour
                </button>
              </form>
            </div>
            {/* Pagination Start */}
            <div className="section p-0 post-single-pagination-wrapper">
              <div className="post-single-pagination post-prev">
                <i className="fas fa-arrow-left" />
                <Link to="#" className="post-single-pagination-content">
                  <span>Prev Listing</span>
                  <h6>Theodore Lowe, Azusa New York 39531</h6>
                </Link>
              </div>
              <div className="post-single-pagination post-next">
                <Link to="#" className="post-single-pagination-content">
                  <span>Next Listing</span>
                  <h6>Cecilia Chapman, Mankato Mississippi 96522</h6>
                </Link>
                <i className="fas fa-arrow-right" />
              </div>
            </div>
            {/* Pagination End */}
            {/* Similar Start */}
            <div className="section section-padding">
              <h4>Similar Listings</h4>
              <div className="row">
                {/* Listing Start */}
                {listing.slice(0, 2).map((item, i) => (
                  <div key={i} className="col-md-6">
                    <div className="listing">
                      <div className="listing-thumbnail">
                        <Link to="/listing-details-v1">
                          <img
                            src={process.env.PUBLIC_URL + "/" + item.gridimg}
                            alt="listing"
                          />
                        </Link>
                        <div className="listing-badges">
                          {item.star === true ? (
                            <span className="listing-badge featured">
                              {" "}
                              <i className="fas fa-star" />{" "}
                            </span>
                          ) : (
                            ""
                          )}
                          {item.sale === true ? (
                            <span className="listing-badge sale">On Sale</span>
                          ) : (
                            ""
                          )}
                          {item.pending === true ? (
                            <span className="listing-badge pending">
                              {" "}
                              Pending
                            </span>
                          ) : (
                            ""
                          )}
                          {item.rental === true ? (
                            <span className="listing-badge rent"> Rental</span>
                          ) : (
                            ""
                          )}
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
                      <div className="listing-body">
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
                        <h5 className="listing-title">
                          {" "}
                          <Link to="/listing-details-v1" title={item.title}>
                            {item.title}
                          </Link>{" "}
                        </h5>
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
                ))}
                {/* Listing End */}
              </div>
            </div>
            {/* Similar End */}
          </div>
          {/* Listings End */}
          {/* Sidebar Start */}
          <div className="col-lg-4">
            <div className="sidebar sticky-sidebar">
              <div className="sidebar-widget">
                <h5>Meet The Agent</h5>
                {/* Author Start */}
                <div className="media sidebar-author listing-agent">
                  <Link to="#">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/people/1.jpg"}
                      alt="agent"
                    />
                  </Link>
                  <div className="media-body">
                    <h6>
                      {" "}
                      <Link to="#">Freddy Burben</Link>{" "}
                    </h6>
                    <span>Company Agent</span>
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
                          <Link to="/listing-grid">
                            {" "}
                            <i className="fas fa-th-list" /> View Listings
                          </Link>{" "}
                        </li>
                        <li>
                          {" "}
                          <Link to="#">
                            {" "}
                            <i className="fas fa-star" /> Save Agent
                          </Link>{" "}
                        </li>
                      </ul>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                {/* Author End */}
                {/* Contact Start */}
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Enter your message"
                      className="form-control"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-custom primary light btn-block"
                  >
                    Send Message
                  </button>
                </form>
                {/* Contact End */}
              </div>
              <div className="sidebar-widget">
                <h5>Recent Listings</h5>
                {/* Listing Start */}
                {listing
                  .filter(function (item) {
                    return item.recent === true;
                  })
                  .slice(0, 4)
                  .map((item, i) => (
                    <div key={i} className="listing listing-list">
                      <div className="listing-thumbnail">
                        <Link to="/listing-details-v1">
                          <img
                            src={process.env.PUBLIC_URL + "/" + item.gridimg}
                            alt="listing"
                          />
                        </Link>
                      </div>
                      <div className="listing-body">
                        <h6 className="listing-title">
                          {" "}
                          <Link to="/listing-details-v1" title={item.title}>
                            {item.title}
                          </Link>{" "}
                        </h6>
                        <span className="listing-price">
                          {new Intl.NumberFormat().format(
                            item.monthlyprice.toFixed(2)
                          )}
                          $ <span>/month</span>{" "}
                        </span>
                      </div>
                    </div>
                  ))}
                {/* Listing End */}
              </div>
              <div className="sidebar-widget">
                <h5>Mortgage Calculator</h5>
                <Calculator />
              </div>
            </div>
          </div>
          {/* Sidebar End */}
        </div>
      </div>
    </div>
  );
};

export default Listingwrapper;
