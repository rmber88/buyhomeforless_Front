import React, { useEffect, useState, useReducer } from "react";
import { Tab, Nav } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Locationtab from "./Locationtab";
import SubmitListingReducer from "../../../reducers/SubmitListingReducer";

import { Container, useToast } from "@chakra-ui/react";
// Features
const features = [
  { id: 1, icon: "bone", title: "Pet Friendly" },
  { id: 2, icon: "chair", title: "Furnished" },
  { id: 3, icon: "fan", title: "Cooling" },
  { id: 4, icon: "garage", title: "Parking" },
  { id: 5, icon: "mailbox", title: "Mailbox" },
  { id: 6, icon: "eye", title: "City View" },
];

var SubmitListing = {};

function Content() {
  const [tabKey, setTabKey] = useState("tab1");
  const toast = useToast();
  /////////////////   LOcation  Latitude and Langitude

  const [location, setLocation] = useState({
    lat: 50.29011,
    long: 5.2712,
    region: "",
    address: "",
  });
  const locationData = (data) => {
    setLocation(data);
  };

  const user = JSON.parse(localStorage.getItem("userInfo"));

  ///////////   Gallery

  const [thumbnail, setThumbnail] = useState("");

  const handleThumbnail = (event) => {
    setThumbnail(event.target.files[0]);
  };

  //////    Features States

  const [pet, setPet] = useState(false);
  const [furnished, setFurnihsed] = useState(false);
  const [cooling, setCooling] = useState(false);
  const [parking, setParking] = useState(false);
  const [mail, setMail] = useState(false);
  const [city, setCity] = useState(false);

  const featuresData = (title) => {
    if (title === "Pet Friendly") {
      setPet(!pet);
    } else if (title === "Furnished") {
      setFurnihsed(!furnished);
    } else if (title === "Cooling") {
      setCooling(!cooling);
    } else if (title === "Parking") {
      setParking(!parking);
    } else if (title === "Mailbox") {
      setMail(!mail);
    } else if (title === "City View") {
      setCity(!city);
    }
  };

  const [error, setError] = useState(undefined);
  const [fieldError, setFieldError] = useState(undefined);
  const [minFileError, setMinFileError] = useState(undefined);
  const [maxFileError, setMaxFileError] = useState(undefined);

  /////  Basic Information and Deatils

  const [listingState, dispatch] = useReducer(
    SubmitListingReducer,
    SubmitListing
  );

  const validate = () => {
    console.log("valldate=================================>", files);
    if (!listingState.description) {
      toast({
        title: "Error",
        description: "Insert Property Description",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab1");
      return false;
    }

    if (!listingState.name) {
      toast({
        title: "Error",
        description: "Insert Property Name",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab1");
      return false;
    }

    if (!listingState.price) {
      toast({
        title: "Error",
        description: "Insert Property Price",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab1");
      return false;
    }

    if (!listingState.space) {
      toast({
        title: "Error",
        description: "Insert Property Space",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab1");
      return false;
    }

    if (!listingState.id) {
      toast({
        title: "Error",
        description: "Insert Property ID",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab5");
      return false;
    }

    if (!listingState.beds) {
      toast({
        title: "Error",
        description: "Insert Property Beds",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab5");
      return false;
    }

    if (!listingState.baths) {
      toast({
        title: "Error",
        description: "Insert Property Bathrooms",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab5");
      return false;
    }

    if (!thumbnail) {
      toast({
        title: "Error",
        description: "Insert Property Thumbnail",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab2");
      return false;
    }

    if (files.length === 0) {
      toast({
        title: "Error",
        description: "Insert Property Gallery",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab2");
      return false;
    }

    if (files.length > 5) {
      toast({
        title: "Error",
        description: "You can upload only 5 pictures",
        status: "warning",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab2");
      return false;
    }

    return true;
  };

  const submitData = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    if (user === null) {
      alert("You need to login first");
    } else {
      SubmitListing = {
        BasicInformation: {
          description: listingState.description,
          name: listingState.name,
          status:
            listingState.status === undefined
              ? "For Rent"
              : listingState.status,
          type: listingState.type === undefined ? "Home" : listingState.type,
          price: listingState.price,
          period:
            listingState.period === undefined ? "Montly" : listingState.period,
          space: listingState.space,
          video: listingState.video,
        },
        Details: {
          id: listingState.id,
          beds: listingState.beds,
          baths: listingState.baths,
          condition: listingState.condition,
          built: listingState.built,
          neighbor: listingState.neighbor,
        },
        Location: {
          latitude: location.lat,
          longitude: location.long,
          address: location.address,
          region: location.region,
        },
        Features: {
          pet: pet ? true : false,
          city: city ? true : false,
          mail: mail ? true : false,
          furnished: furnished ? true : false,
          cooling: cooling ? true : false,
          parking: parking ? true : false,
        },
      };
      const { BasicInformation, Features, Details, Location } = SubmitListing;

      const formData = new FormData();
      formData.append("name", BasicInformation.name);
      formData.append("description", BasicInformation.description);
      formData.append("status", BasicInformation.status);
      formData.append("type", BasicInformation.type);
      formData.append("price", BasicInformation.price);
      formData.append("period", BasicInformation.period);
      formData.append("space", BasicInformation.space);
      formData.append("video", BasicInformation.video);
      formData.append("id", Details.id);
      formData.append("beds", Details.beds);
      formData.append("baths", Details.baths);
      formData.append("condition", Details.condition);
      formData.append("built", Details.built);
      formData.append("neighbor", Details.neighbor);
      formData.append("pet", Features.pet);
      formData.append("city", Features.city);
      formData.append("mail", Features.mail);
      formData.append("furnished", Features.furnished);
      formData.append("cooling", Features.cooling);
      formData.append("parking", Features.parking);
      formData.append("thumbnail", thumbnail);
      files.map((file, inx) => formData.append("picture", file));
      formData.append("lat", Location.latitude);
      formData.append("long", Location.longitude);
      formData.append("address", Location.address);
      formData.append("region", Location.region);
      formData.append("authorname", user.name);
      formData.append("email", user.email);
      formData.append("authorId", user._id);

      axios
        .post("http://localhost:3003/submitlisting/submit", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          const Msg = res.data.Msg;
          console.log("MSG----------------------->", Msg);
          // if (Msg === "Data Uploaded Sucessfully") {
          //   window.location.reload(false);
          // }
        })
        .catch((err) => {
          console.log(err.response.data);
          const Msg = err.response.data.Msg;
          if (Msg === "Please Fill Out All Feilds") {
            setError(true);
            setFieldError(true);
            setMinFileError(false);
          } else if (Msg === "Please Fill Thumbnail Picture") {
            setError(true);
            setFieldError(false);
            setMinFileError(true);
          } else if (Msg === "You can upload only 5 pictures") {
            setError(true);
            setFieldError(false);
            setMinFileError(false);
            setMaxFileError(true);
          } else {
            console.log(err.response.data);
          }
        });
    }
  };

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div className="thumb" key={file.name}>
      <div className="thumbInner">
        <img src={file.preview} alt="img" />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  return (
    <div className="section">
      <Container maxW="80%">
        <div className="row">
          <Tab.Container defaultActiveKey={tabKey} activeKey={tabKey}>
            {/* Tabs Start */}
            <div className="col-md-4">
              <Nav variant="tabs" className="nav nav-tabs tab-cards">
                <Nav.Item>
                  <Nav.Link eventKey="tab1" onClick={() => setTabKey("tab1")}>
                    <span>01</span> Basic Information
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab2" onClick={() => setTabKey("tab2")}>
                    <span>02</span> Gallery
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab3" onClick={() => setTabKey("tab3")}>
                    <span>03</span> Location
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab4" onClick={() => setTabKey("tab4")}>
                    <span>04</span> Features
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab5" onClick={() => setTabKey("tab5")}>
                    <span>05</span> Details
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            {/* Tabs End */}
            {/* Tab Content Start */}
            <div className="col-md-8">
              <form>
                <Tab.Content className="m-0">
                  <Tab.Pane eventKey="tab1">
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <label>Property Description</label>
                        <textarea
                          name="content"
                          rows={4}
                          className="form-control"
                          placeholder="Property Description"
                          value={listingState.description}
                          onChange={(e) =>
                            dispatch({
                              type: "UPDATE",
                              value: e.target.value,
                              key: "description",
                            })
                          }
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Property Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Name"
                          required
                          name="name"
                          value={listingState.name}
                          onChange={(e) =>
                            dispatch({
                              type: "UPDATE",
                              value: e.target.value,
                              key: "name",
                            })
                          }
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Property Status</label>
                        <select
                          className="form-control"
                          name="status"
                          value={listingState.status}
                          onChange={(e) =>
                            dispatch({
                              type: "UPDATE",
                              value: e.target.value,
                              key: "status",
                            })
                          }
                        >
                          <option value="For Rent">For Rent</option>
                          <option value="Featured">Featured</option>
                          <option value="For Sale">For Sale</option>
                          <option value="Leased">Leased</option>
                          <option value="New Addition">New Addition</option>
                          <option value="Sold">Sold</option>
                          <option value="Rental">Rental</option>
                          <option value="Reduced">Reduced</option>
                          <option value="Special Offer">Special Offer</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label>Property Type</label>
                        <select
                          className="form-control"
                          name="type"
                          value={listingState.type}
                          onChange={(e) =>
                            dispatch({
                              type: "UPDATE",
                              value: e.target.value,
                              key: "type",
                            })
                          }
                        >
                          <option value="House">Home</option>
                          <option value="Apartment">Apartment</option>
                          <option value="Condo">Condo</option>
                          <option value="Townhome">Hotel</option>
                          <option value="Villa">Land</option>
                          <option value="Duplex">Resort</option>
                        </select>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Property Price</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            name="price"
                            placeholder="Property Price"
                            value={listingState.price}
                            onChange={(e) =>
                              dispatch({
                                type: "UPDATE",
                                value: e.target.value,
                                key: "price",
                              })
                            }
                          />
                        </div>
                      </div>
                      {listingState.status === "Rental" ? (
                        <div className="col-md-6">
                          <label>Rental Period</label>
                          <select
                            className="form-control"
                            name="period"
                            value={listingState.period}
                            onChange={(e) =>
                              dispatch({
                                type: "UPDATE",
                                value: e.target.value,
                                key: "period",
                              })
                            }
                          >
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                          </select>
                        </div>
                      ) : (
                        <></>
                      )}
                      <div className="col-md-6 form-group">
                        <label>Property Space (Sqft)</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Space (Sqft)"
                          name="space"
                          value={listingState.space}
                          onChange={(e) =>
                            dispatch({
                              type: "UPDATE",
                              value: e.target.value,
                              key: "space",
                            })
                          }
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        <label>Property Video</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Video URL"
                          name="video"
                          value={listingState.video}
                          onChange={(e) =>
                            dispatch({
                              type: "UPDATE",
                              value: e.target.value,
                              key: "video",
                            })
                          }
                        />
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab2">
                    <div className="form-group">
                      <label>Property Thumbnail</label>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="propertyThumbnail"
                          onChange={handleThumbnail}
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="propertyThumbnail"
                        >
                          {thumbnail ? thumbnail.name : "Choose File"}
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Property Gallery</label>
                      <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps(-5)} multiple />
                        <div className="dropzone-msg dz-message needsclick">
                          <i className="fas fa-cloud-upload-alt" />
                          <h5 className="dropzone-msg-title">
                            Drop files here or click to upload.
                          </h5>
                          <span className="dropzone-msg-desc">
                            This is just a demo dropzone. Selected files are{" "}
                            <strong>not</strong> actually uploaded.
                          </span>
                        </div>
                      </div>
                      <aside className="thumbsContainer">{thumbs}</aside>
                      <span className="acr-form-notice">
                        *You can upload up to 5 images for your listing
                      </span>
                      <span className="acr-form-notice">
                        *Listing images should be atleast 620x480 in dimensions
                      </span>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab3">
                    <Locationtab locationData={locationData} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab4">
                    <div className="row">
                      {features.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                          <label className="acr-listing-feature">
                            <input
                              type="checkbox"
                              name={"feature" + item.id + ""}
                              onClick={() => featuresData(item.title)}
                            />
                            <i className="acr-feature-check fas fa-check" />
                            <i
                              className={
                                "acr-listing-feature-icon flaticon-" +
                                item.icon +
                                ""
                              }
                            />
                            {item.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab5">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label>Property ID</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property ID"
                          name="id"
                          value={listingState.id}
                          onChange={(e) =>
                            dispatch({
                              type: "UPDATE",
                              value: e.target.value,
                              key: "id",
                            })
                          }
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Beds</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number of Beds"
                          name="beds"
                          value={listingState.beds}
                          onChange={(e) =>
                            dispatch({
                              type: "UPDATE",
                              value: e.target.value,
                              key: "beds",
                            })
                          }
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Bathrooms</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number of Bathrooms"
                          name="baths"
                          value={listingState.baths}
                          onChange={(e) =>
                            dispatch({
                              type: "UPDATE",
                              value: e.target.value,
                              key: "baths",
                            })
                          }
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Condition</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Condition"
                          name="condition"
                          value={listingState.condition}
                          onChange={(e) =>
                            dispatch({
                              type: "UPDATE",
                              value: e.target.value,
                              key: "condition",
                            })
                          }
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Year Built</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Year Built"
                          name="built"
                          value={listingState.built}
                          onChange={(e) =>
                            dispatch({
                              type: "UPDATE",
                              value: e.target.value,
                              key: "built",
                            })
                          }
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Neighborhood</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Neighborhood"
                          name="neighborhood"
                          value={listingState.neighbor}
                          onChange={(e) =>
                            dispatch({
                              type: "UPDATE",
                              value: e.target.value,
                              key: "neighbor",
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="termsAndConditions"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="termsAndConditions"
                        >
                          I Agree to the terms &amp; Conditions of Property
                          Submission
                        </label>
                      </div>
                    </div>
                    <button
                      className="btn-custom"
                      name="submit"
                      onClick={(e) => {
                        submitData(e);
                      }}
                    >
                      Submit Listing
                    </button>
                    <div>
                      {error === undefined || false ? (
                        ""
                      ) : (
                        <div
                          style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
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
                            <span>
                              {fieldError ? " Please Fill Out All Fields" : ""}
                            </span>
                            <span>
                              {minFileError
                                ? " Please Select Images for Thumbnail or Gallery"
                                : ""}
                            </span>
                            <span>
                              {maxFileError
                                ? "You can select only 5 pictures"
                                : ""}
                            </span>
                            <button
                              style={{
                                border: "white 2px solid",
                                borderRadius: "25px",
                                width: "35px",
                                backgroundColor: "#FF3131",
                                color: "white",
                                fontSize: "15px",
                                alignItems: "center",
                              }}
                              onClick={() => {
                                setError(undefined);
                                setFieldError(undefined);
                                setMinFileError(undefined);
                                setMaxFileError(undefined);
                              }}
                            >
                              x
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </form>
            </div>
          </Tab.Container>
          {/* Tab Content End */}
        </div>
      </Container>
    </div>
  );
}

export default Content;
