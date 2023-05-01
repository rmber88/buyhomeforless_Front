import React, { useState, Fragment } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Locationtab = ({ locationData }) => {
  const MyMarker = (props) => {
    const initMarker = (ref) => {
      if (ref) {
        // console.log(ref.leafletElement);
      }
    };

    return <Marker ref={initMarker} {...props} />;
  };

  const [lat, setlat] = useState(50.29011);
  const [long, setlong] = useState(5.2712);
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const position = [lat, long];
  const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [50, 50],
    iconAnchor: [25, 5],
  });

  ////////////    Sending Data to Parent Component

  const latChange = (lat) => {
    setlat(lat);
    locationData({ lat, long, region, address });
  };

  const longChange = (long) => {
    setlong(long);
    locationData({ lat, long, region, address });
  };

  return (
    <Fragment>
      <div className="form-group submit-listing-map">
        <MapContainer zoom={8} center={{ lat: lat, lng: long }}>
          <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          <MyMarker position={position} icon={customMarker}>
            {/* <Popup position={position}>
              Current location: <pre>{JSON.stringify(position, null, 2)}</pre>
            </Popup> */}
          </MyMarker>
        </MapContainer>
      </div>
      <div className="form-group">
        <span className="acr-form-notice">
          Drag and drop the marker to identify your <b>Latitude</b> and{" "}
          <b>Longitude</b>{" "}
        </span>
      </div>
      <div className="row">
        <div className="col-md-12 form-group">
          <label>Full Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            name="address"
            className="form-control"
            placeholder="Full Address"
          />
        </div>
        <div className="col-md-12 form-group">
          <label>Region</label>
          {/* <select className="form-control" name="region">
                            <option value="Connecticut">Connecticut</option>
                            <option value="Washington DC">Washington DC</option>
                            <option value="Los Angelas">Los Angelas</option>
                            <option value="Missouri">Missouri</option>
                        </select> */}
          <input
            type="text"
            name="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="form-control"
            placeholder="Region"
          />
        </div>
        <div className="col-md-6 form-group">
          <label>Longitude</label>
          <input
            type="number"
            name="lng"
            value={long}
            onChange={(e) => {
              longChange(e.target.value);
            }}
            id="lngVal"
            className="form-control"
            placeholder="Longitude"
          />
        </div>
        <div className="col-md-6 form-group">
          <label>Latitude</label>
          <input
            type="number"
            name="lat"
            value={lat}
            onChange={(e) => {
              latChange(e.target.value);
            }}
            id="latVal"
            className="form-control"
            placeholder="Latitude"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Locationtab;
