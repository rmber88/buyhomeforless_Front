import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";

const bannerpost = [
  "http://localhost:3003/uploads/picture/16826981888802.jpg",
  "http://localhost:3003/uploads/picture/16826981888823.jpg",
];

const Banner = () => {
  const [data, setData] = useState({
    Gallery: { picture: [] },
    BasicInformation: { price: [], period: [], name: [] },
    Details: { id: [] },
  });
  const { id } = useParams();

  const getData = () => {
    // const response = await fetch("http://localhost:3003/submitlisting/submit", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     mode: "no-cors",
    //   },
    // });
    // const data = await response.json();

    axios.get("http://localhost:3003/submitlisting/submit").then((res) => {
      const find = res.data.result.find((res) => res._id === id);
      console.log(find);
      setData(find);
    });
  };

  useEffect(() => {
    getData();
  }, []);

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
    fade: true,
  };
  return (
    <div className="banner banner-2 slider-no-padding">
      <div className="banner-item">
        {data.Gallery.picture && data.Gallery.picture.length > 0 ? (
          <Slider
            className="banner-slider"
            ref={(c) => (Slider = c)}
            {...settings}
          >
            {data.Gallery.picture.map((item, i) => (
              <div key={i}>
                <div
                  className="banner-inner bg-cover bg-center dark-overlay"
                  style={{
                    backgroundImage:
                      "url(" + "http://localhost:3003/" + item + ")",
                  }}
                />
              </div>
            ))}
          </Slider>
        ) : null}
        <div className="acr-listing-details">
          <div className="acr-listing-section">
            <div className="acr-listing-nav">
              <Link to="#" className="btn-custom secondary">
                Print Listing
              </Link>
            </div>
            <div className="acr-listing-section-body">
              <div className="acr-listing-section-price">
                <h5>
                  <span>{data.Details.id}</span>
                </h5>
                <span>For Sale</span>
                <h3>$852,000</h3>
                <span>Est. Mortgage</span>
                <p>
                  {" "}
                  <span className="listing-price">
                    {data.BasicInformation.price}
                    {/* {new Intl.NumberFormat().format(
                    item.monthlyprice.toFixed(2)
                  )} */}
                    ${" "}
                    {data.BasicInformation.period === "Monthly" ||
                    data.BasicInformation.period === "Yearly" ? (
                      <span>/{data.BasicInformation.period}</span>
                    ) : (
                      <></>
                    )}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="acr-listing-section">
            <div className="acr-listing-section-body">
              <h4> Iris Watson, Frederick Nebraska 20620</h4>
              <div className="acr-listing-icons">
                <div className="acr-listing-icon">
                  <i className="flaticon-bedroom" />
                  <span>Beds</span>
                  <span className="acr-listing-icon-value">3</span>
                </div>
                <div className="acr-listing-icon">
                  <i className="flaticon-bathroom" />
                  <span>Baths</span>
                  <span className="acr-listing-icon-value">2</span>
                </div>
                <div className="acr-listing-icon">
                  <i className="flaticon-ruler" />
                  <span>Sqft</span>
                  <span className="acr-listing-icon-value">2,499</span>
                </div>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </div>
          <div className="acr-listing-section">
            <div className="acr-listing-controls">
              <Link to="#" className="acr-listing-control">
                <i className="flaticon-share" />
              </Link>
              <Link to="#" className="acr-listing-control">
                <i className="flaticon-star" />
              </Link>
              <Link to="#" className="acr-schedule-tour acr-listing-control">
                <i className="flaticon-event" />
                <span>Schedule Link tour</span>
              </Link>
            </div>
            <div className="acr-listing-section-body">
              <div className="acr-listing-meta">
                <div className="row">
                  <div className="col-lg-6 col-md-3 col-sm-3">
                    <div className="acr-listing-meta-item">
                      <span>Type</span>
                      <p>House</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-3 col-sm-3">
                    <div className="acr-listing-meta-item">
                      <span>View</span>
                      <p>City View</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-3 col-sm-3">
                    <div className="acr-listing-meta-item">
                      <span>Lot Size</span>
                      <p>89 Acres</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-3 col-sm-3">
                    <div className="acr-listing-meta-item">
                      <span>Condition</span>
                      <p>Brand New</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Banner;
