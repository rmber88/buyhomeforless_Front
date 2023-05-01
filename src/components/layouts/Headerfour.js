// import React, { Fragment } from 'react';
// import Menu from '../layouts/Menu';
// import Mobilemenu from '../layouts/Mobilemenu';
// import HeaderComponent from '../../helper/Navigationhelper';
// import { Link } from 'react-router-dom';
// import classNames from 'classnames';

// class Headerfive extends HeaderComponent {
//     render() {
//         return (
//             <Fragment>
//                 {/* Aside (Mobile Navigation) */}
//                 <aside className={classNames("main-aside", { "open": this.state.navtoggle })}>
//                     <div className="aside-title">
//                         <div className="aside-controls aside-trigger">
//                             <h4>Menu</h4>
//                             <div className="close-btn close-dark" onClick={this.navtoggleClass} >
//                                 <span />
//                                 <span />
//                             </div>
//                         </div>
//                     </div>
//                     <Mobilemenu />
//                 </aside>
//                 <div className="aside-overlay aside-trigger" onClick={this.navtoggleClass} />
//                 {/* Header Start */}
//                 <header className="main-header header-fw">
//                     {/* Top Header Start */}
//                     <div className="top-header">
//                         <div className="top-header-inner">
//                             <ul className="social-media">
//                                 <li> <Link to="#"> <i className="fab fa-facebook-f" /> </Link> </li>
//                                 <li> <Link to="#"> <i className="fab fa-pinterest-p" /> </Link> </li>
//                                 <li> <Link to="#"> <i className="fab fa-linkedin-in" /> </Link> </li>
//                                 <li> <Link to="#"> <i className="fab fa-twitter" /> </Link> </li>
//                             </ul>
//                             <ul className="top-header-nav">
//                                 <li> <Link to="/login"> Login</Link> </li>
//                                 <li>or</li>
//                                 <li> <Link to="/register"> Signup</Link> </li>
//                             </ul>
//                         </div>
//                     </div>
//                     {/* Top Header End */}
//                     <nav className="navbar">
//                         {/* Menu */}
//                         <Menu />
//                         <div className="header-controls">
//                             <ul className="header-controls-inner d-none d-lg-flex">
//                                 <li>
//                                     <Link to="/submit-listing" className="btn-custom primary">Submit Listing <i className="fas fa-plus" /> </Link>
//                                 </li>
//                             </ul>
//                             {/* Toggler */}
//                             <div className="aside-toggler aside-trigger" onClick={this.navtoggleClass}>
//                                 <span />
//                                 <span />
//                                 <span />
//                             </div>
//                         </div>
//                     </nav>
//                 </header>
//                 {/* Header End */}
//             </Fragment>
//         );
//     }
// }

// export default Headerfive;

///////////////////////////////////////////////////     Functional Components   /////////////////////////////////////////////////////////////////

import React, { useState, useEffect, Fragment } from "react";
import Menu from "../layouts/Menu";
import Mobilemenu from "../layouts/Mobilemenu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Headerfive = () => {
  const [navtoggle, setnavtoggle] = useState(false);
  const [sticky, setSticky] = useState("false");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const logout = () => {
    navigate("/login");
    JSON.parse(localStorage.removeItem("userInfo"));
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        window.scrollY > 100 ? setSticky("sticky") : setSticky("");
      },
      false
    );
  });

  return (
    <Fragment>
      {/* Aside (Mobile Navigation) */}
      <aside className={navtoggle ? "main-aside open" : "main-aside"}>
        <div className="aside-title">
          <div className="aside-controls aside-trigger">
            <h4>Menu</h4>
            <div
              className="close-btn close-dark"
              onClick={() => setnavtoggle(false)}
            >
              <span />
              <span />
            </div>
          </div>
        </div>
        <Mobilemenu />
      </aside>
      <div
        className="aside-overlay aside-trigger"
        onClick={() => setnavtoggle(false)}
      />
      {/* Header Start */}
      <header className={`main-header header-fw ${sticky}`}>
        {/* Top Header Start */}
        <div className="top-header">
          {user == null ? (
            <div className="top-header-inner">
              <ul className="social-media">
                <li>
                  {" "}
                  <Link to="#">
                    {" "}
                    <i className="fab fa-facebook-f" />{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    {" "}
                    <i className="fab fa-pinterest-p" />{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    {" "}
                    <i className="fab fa-linkedin-in" />{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    {" "}
                    <i className="fab fa-twitter" />{" "}
                  </Link>{" "}
                </li>
              </ul>
              <ul className="top-header-nav">
                <li>
                  {" "}
                  <a href="/login"> Login</a>{" "}
                </li>
                <li>or</li>
                <li>
                  {" "}
                  <a href="/register"> Signup</a>{" "}
                </li>
              </ul>
            </div>
          ) : (
            <div className="top-header-inner">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    backgroundColor: "white",
                    padding: "5px 10px",
                    borderRadius: "20px",
                  }}
                >
                  {user.name}
                  {""}:{""}
                  {user.user}
                </p>
                <p
                  onClick={() => logout()}
                  style={{
                    backgroundColor: "white",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                >
                  Log Out
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Top Header End */}
        <nav className="navbar">
          {/* Menu */}
          <Menu />

          <div className="header-controls">
            <ul className="header-controls-inner d-none d-lg-flex">
              <li>
                <Link to="/submit-listing" className="btn-custom primary">
                  Submit Listing <i className="fas fa-plus" />{" "}
                </Link>
              </li>
            </ul>
            {/* Toggler */}
            <div
              className="aside-toggler aside-trigger"
              onClick={() => setnavtoggle(true)}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
        </nav>
      </header>
      {/* Header End */}
    </Fragment>
  );
};

export default Headerfive;
