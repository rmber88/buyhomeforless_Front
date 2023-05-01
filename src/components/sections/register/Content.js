// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';

// const images = [
//     { img: 'assets/img/coming-soon/1.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
//     { img: 'assets/img/coming-soon/2.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
//     { img: 'assets/img/coming-soon/3.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
// ];

// class Content extends Component {
//     render() {
//         const settings = {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: false,
//             autoplay: true,
//             dots: true,
//             dotsClass: "d-flex slick-dots",
//         }
//         return (
//             <div className="acr-auth-container">
//                 <div className="acr-auth-content">
//                     <form>
//                         <div className="auth-text">
//                             <h3>Create An Acres Account</h3>
//                             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
//                         </div>
//                         <div className="form-group">
//                             <label>Username</label>
//                             <input type="text" className="form-control form-control-light" placeholder="Username" name="username" />
//                         </div>
//                         <div className="form-group">
//                             <label>Email Address</label>
//                             <input type="email" className="form-control form-control-light" placeholder="Email Address" name="email" />
//                         </div>
//                         <div className="form-group">
//                             <label>Password</label>
//                             <input type="password" className="form-control form-control-light" placeholder="Password" name="password" />
//                         </div>
//                         <button type="submit" className="btn-custom secondary btn-block">Register</button>
//                         <div className="auth-seperator">
//                             <span>OR</span>
//                         </div>
//                         <div className="social-login">
//                             <button type="button" className="acr-social-login facebook"><i className="fab fa-facebook-f" /> Continue with Facebook </button>
//                             <button type="button" className="acr-social-login google"><i className="fab fa-google" /> Continue with Google</button>
//                         </div>
//                         <p className="text-center mb-0">Already have an account? <Link to="/login">Login</Link> </p>
//                     </form>
//                 </div>
//                 <div className="acr-auth-bg">
//                     <Slider className="acr-auth-bg-slider acr-cs-bg-slider" {...settings}>
//                         {images.map((item, i) => (
//                             <div key={i}>
//                                 <div className="acr-cs-bg-item bg-cover bg-center" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.img + ")" }} >
//                                     <div className="acr-auth-quote">
//                                         <h6>{item.title}</h6>
//                                         <p>{item.text}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Content;

/////////////////////////////////////   Functional Components //////////////////////////////////////////

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Content = () => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("Buyer");

  const registerUser = (data) => {
    localStorage.setItem("userInfo", JSON.stringify(data));
    window.location.replace("/");
  };

  const postData = () => {
    fetch("http://localhost:3003/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        user: user,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        data.Msg === "register" ? registerUser(data) : setError(true);
        setErrorMsg(data.Msg);
        console.log(data);
      });
  };

  const images = [
    {
      img: "assets/img/coming-soon/1.jpg",
      title: "Quote of the day",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      img: "assets/img/coming-soon/2.jpg",
      title: "Quote of the day",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      img: "assets/img/coming-soon/3.jpg",
      title: "Quote of the day",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    dotsClass: "d-flex slick-dots",
  };
  return (
    <div className="acr-auth-container">
      <div className="acr-auth-content">
        <form
          onSubmit={(e) => {
            postData();
            e.preventDefault();
          }}
        >
          <div className="auth-text">
            <h3>Create An Acres Account</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control form-control-light"
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="form-group">
            <label>Email Address or mobile number</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-light"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control form-control-light"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="form-group">
            <label>User</label>
            <select
              value={user}
              onChange={(e) => setUser(e.target.value)}
              type="user"
              className="form-control"
            >
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
            </select>
          </div>
          <button type="Submit" className="btn-custom secondary btn-block">
            Register
          </button>

          <div style={{ display: "flex", justifyContent: "center" }}>
            {error ? (
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  backgroundColor: "#FF3131",
                  color: "white",
                  padding: "10px 20px 10px 20px",
                  borderRadius: "5px",
                  alignItems: "center",
                }}
              >
                <span>{error ? `${errorMsg}` : ""}</span>
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    border: "white 2px solid",
                    borderRadius: "30px",
                    width: "40px",
                    backgroundColor: "#FF3131",
                    height: "40px",
                  }}
                  onClick={() => {
                    setError(false);
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      alignItems: "center",
                      marginTop: "3px",
                    }}
                  >
                    x
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="auth-seperator">
            <span>OR</span>
          </div>
          <div className="social-login">
            <button type="button" className="acr-social-login facebook">
              <i className="fab fa-facebook-f" /> Continue with Facebook{" "}
            </button>
            <button type="button" className="acr-social-login google">
              <i className="fab fa-google" /> Continue with Google
            </button>
          </div>
          <p className="text-center mb-0">
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </form>
      </div>
      <div className="acr-auth-bg">
        <Slider className="acr-auth-bg-slider acr-cs-bg-slider" {...settings}>
          {images.map((item, i) => (
            <div key={i}>
              <div
                className="acr-cs-bg-item bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(" + process.env.PUBLIC_URL + "/" + item.img + ")",
                }}
              >
                <div className="acr-auth-quote">
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Content;
