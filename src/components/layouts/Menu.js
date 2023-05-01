import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Menu = () => {
  return (
    <Fragment>
      {/* Logo */}
      <Link
        className="navbar-brand"
        to="/"
        onClick={() => window.location.replace("/")}
      >
        {" "}
        <img
          className="p-2"
          src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
          alt="logo"
        />{" "}
      </Link>
      {/* Menu */}
      <ul className="navbar-nav">
        <li className="menu-item menu-item-has-children">
          <Link to="/about">About Us</Link>
        </li>
        <li className="menu-item menu-item-has-children items-center">
          <Link to="#">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  background: "white",
                  color: "black",
                  border: "none",
                  fontWeight: "500",
                  padding: "0px 2px",
                }}
              >
                Services
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Distress">
                    Help With Distress Home
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Planing">
                    Financial Planing
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Modification">
                    Loan Modification
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-4"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Management">
                    Property Management
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-5"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Planner">
                    Investment Planner
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Link>
        </li>
        <li className="menu-item menu-item-has-children">
          <Link to="/buy">Buy</Link>
        </li>
        <li className="menu-item menu-item-has-children">
          <Link to="/sell">Sell</Link>
        </li>
        <li className="menu-item menu-item-has-children">
          <Link to="/rent">Rent</Link>
        </li>
        <li className="menu-item menu-item-has-children items-center">
          <Link to="#">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  background: "white",
                  color: "black",
                  border: "none",
                  fontWeight: "500",
                  padding: "0px 2px",
                }}
              >
                Think To Know
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Property">
                    How to buy property in Thailand
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Terms">
                    Get a long terms visa in Thailand
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Estate">
                    Thailand real estate laws
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Retire">
                    How to retire in Thailand
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Link>
        </li>
        <li className="menu-item menu-item-has-children items-center">
          <Link to="#">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  background: "white",
                  color: "black",
                  border: "none",
                  fontWeight: "500",
                  padding: "0px 2px",
                }}
              >
                Finance
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Mortgage">
                    How to get a mortgage loan in Thailand
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Invest">
                    Can you invest in Thailand
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  style={{ padding: "6% 2%", margin: "0px 8px", width: "95%" }}
                >
                  <Link style={{ padding: "0" }} to="/Loans">
                    Can you get a loans in Thailand
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Link>
        </li>
        <li className="menu-item menu-item-has-children">
          <Link to="/agent">Retirement Asia</Link>
        </li>
        {/* <li className="menu-item menu-item-has-children">
                        <Link to="/home-v3">Home</Link>
                        <ul className="submenu">
                            <li className="menu-item"> <Link to="/">Home v1</Link> </li>
                            <li className="menu-item"> <Link to="/home-v2">Home v2</Link> </li>
                            <li className="menu-item"> <Link to="/home-v3">Home v3</Link> </li>
                            <li className="menu-item"> <Link to="/home-v4">Home v4</Link> </li>
                            <li className="menu-item"> <Link to="/home-v5">Home v5</Link> </li>
                        </ul> 
                    </li> */}
        {/* <li className="menu-item menu-item-has-children">
                        <Link to="#">Blog</Link>
                        <ul className="submenu">
                            <li className="menu-item menu-item-has-children">
                                <Link to="/blog-grid">Blog Archive</Link>
                                <ul className="submenu">
                                    <li className="menu-item"> <Link to="/blog-grid">Grid View</Link> </li>
                                    <li className="menu-item"> <Link to="/blog-list">List View</Link> </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <Link to="/blog-single">Blog Single</Link>
                            </li>
                        </ul>
                    </li> */}
        {/* <li className="menu-item menu-item-has-children mega-menu-wrapper">
                        <Link to="#">Pages</Link>
                        <ul className="submenu">
                            <li>
                                <img src={process.env.PUBLIC_URL + "/assets/img/megamenu.png"} alt="img" />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="mega-menu-item">
                                                <h5>Featured Listings</h5>
                                                <p>
                                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                                                    making it over 2000 years old.
                </p>
                                                <Link to="/listing-map" className="btn-custom secondary">View All</Link>
                                            </div>
                                        </div>
                                        <div className="offset-lg-1 col-lg-3">
                                            <div className="mega-menu-item">
                                                <h5>Pages</h5>
                                                <Link to="/about">About Us</Link>
                                                <Link to="/services">Services</Link>
                                                <Link to="/faq">FAQ</Link>
                                                <Link to="/pricing">Pricing</Link>
                                                <Link to="/contact">Contact Us</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mega-menu-item">
                                                <h5>Other Pages</h5>
                                                <Link to="/coming-soon">Coming Soon</Link>
                                                <Link to="/error-404">404 Page</Link>
                                                <Link to="/login">Login</Link>
                                                <Link to="/register">Register</Link>
                                                <Link to="/legal">Legal</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li> */}

        {/* <li className="menu-item menu-item-has-children">
                        <Link to="#">Listings</Link>
                        <ul className="submenu">
                            <li className="menu-item menu-item-has-children">
                                <Link to="/listing-map">Listings Archive</Link>
                                <ul className="submenu">
                                    <li className="menu-item"> <Link to="/listing-grid">Grid View</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-list">List View</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-map">Map View</Link> </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link to="/listing-details-v1">Listing Details</Link>
                                <ul className="submenu">
                                    <li className="menu-item"> <Link to="/listing-details-v1">Listing Details v1</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-details-v2">Listing Details v2</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-details-v3">Listing Details v3</Link> </li>
                                </ul>
                            </li>
                            <li className="menu-item"> <Link to="/submit-listing">Submit Listing</Link> </li>
                            <li className="menu-item"> <Link to="/compare-listings">Compare Listings</Link> </li>
                        </ul>
                    </li> */}
        {/* <li className="menu-item menu-item-has-children">
                        <Link to="#">Listings</Link>
                        <ul className="submenu">
                            <li className="menu-item">
                                <Link to="/listing-list">Listings Details</Link>
                                <ul className="submenu">
                                     <li className="menu-item"> <Link to="/listing-grid">Grid View</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-list">List View</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-map">Map View</Link> </li> 
                                </ul>
                            </li>
                             <li className="menu-item menu-item-has-children">
                                <Link to="/listing-details-v1">Listing Details</Link>
                                <ul className="submenu">
                                    <li className="menu-item"> <Link to="/listing-details-v1">Listing Details v1</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-details-v2">Listing Details v2</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-details-v3">Listing Details v3</Link> </li>
                                </ul>
                            </li> 
                            <li className="menu-item"> <Link to="/submit-listing">Submit Listing</Link> </li>
                             <li className="menu-item"> <Link to="/compare-listings">Compare Listings</Link> </li> 
                        </ul>
                    </li> */}

        {/*<li className="menu-item menu-item-has-children">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                     <li className="menu-item menu-item-has-children">
                        <Link to="/agent-archive">Agents</Link>
                        <ul className="submenu">
                            <li className="menu-item"> <Link to="/agent-archive">Agents Archive</Link> </li>
                            <li className="menu-item"> <Link to="/agent-details">Agent Details</Link> </li>
                            <li className="menu-item menu-item-has-children">
                                <Link to="/profile">Agent Profile</Link>
                                <ul className="submenu submenu-right">
                                    <li className="menu-item"> <Link to="/profile">My Account</Link> </li>
                                    <li className="menu-item"> <Link to="/profile-listings">My Listings</Link> </li>
                                    <li className="menu-item"> <Link to="/profile-saved-listings">Saved Listings</Link> </li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
        {/* <li className="menu-item menu-item-has-children">
                        <Link to="/agency-archive">Agency</Link>
                        <ul className="submenu">
                            <li className="menu-item"> <Link to="/agency-archive">Agency Archive</Link> </li>
                            <li className="menu-item"> <Link to="/agency-details">Agency Details</Link> </li>
                        </ul>
                    </li> */}
      </ul>
    </Fragment>
  );
};

export default Menu;
