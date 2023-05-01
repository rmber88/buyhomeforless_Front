import React, { useState, useReducer } from "react";
import Data from "../../../data/select";
import PriceReducer from "../../../reducers/PriceReducer";

var PriceFilter = {};

const ListingFilter = ({ getData }) => {
  const [advanceSearch, setAdvanceSearch] = useState(true);

  const {
    locationlist,
    statuslist,
    pricerangelist,
    bedslist,
    bathroomslist,
    typelist,
    diameterlist,
  } = Data;

  const [PriceState, dispatch] = useReducer(PriceReducer, PriceFilter);

  const filterData = () => {
    PriceFilter = {
      location: PriceState.location,
      type: PriceState.type,
      bed: PriceState.bed === undefined ? 0 : PriceState.bed,
      bathroom: PriceState.bathroom === undefined ? 0 : PriceState.bathroom,
      price: PriceState.price === undefined ? "0" : PriceState.price,
      diameter: PriceState.diameter,
      status: PriceState.status === "Any Status" ? "" : PriceState.status,
    };
    console.log(PriceFilter);
    getData(PriceFilter);
  };

  return (
    <div className="mt-8 mb-16">
      <div className="flex justify-center">
        <div className="acr-filter-form w-11/12 sm:w-9/12 min-md:w-8/12 md:9-12">
          <div className="border border-gray rounded-lg px-4 pt-4">
            <div className="row ">
              <div className="col-lg-3 col-md-6">
                <div>
                  <select
                    className="form-control"
                    name="Location"
                    style={{ fontWeight: "bold", marginBottom: "15px" }}
                    value={PriceState.location}
                    onChange={(e) =>
                      dispatch({
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
              </div>
              <div className="col-lg-3 col-md-6">
                <div>
                  <select
                    className="form-control"
                    name="Status"
                    style={{ fontWeight: "bold", marginBottom: "15px" }}
                    value={PriceState.status}
                    onChange={(e) =>
                      dispatch({
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
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <select
                    className="form-control"
                    name="Price Range"
                    style={{ fontWeight: "bold", marginBottom: "15px" }}
                    value={PriceState.price}
                    onChange={(e) =>
                      dispatch({
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
              </div>
              <div className="submit-btn col-lg-2 col-md-6">
                <div className="form-group">
                  <button
                    onClick={() => filterData()}
                    className="btn-custom secondary btn-block"
                  >
                    Search listings
                  </button>
                </div>
              </div>
            </div>
            <div className={advanceSearch ? "advanced-search" : "d-block"}>
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div>
                    <select
                      className="form-control"
                      name="Beds"
                      style={{ fontWeight: "bold", marginBottom: "15px" }}
                      value={PriceState.bed}
                      onChange={(e) =>
                        dispatch({
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
                </div>
                <div className="col-lg-3 col-md-6">
                  <div>
                    <select
                      className="form-control"
                      name="Bathroom"
                      style={{ fontWeight: "bold", marginBottom: "15px" }}
                      value={PriceState.bathroom}
                      onChange={(e) =>
                        dispatch({
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
                </div>
                <div className="col-lg-3 col-md-6">
                  <div>
                    <select
                      className="form-control"
                      name="Type"
                      style={{ fontWeight: "bold", marginBottom: "15px" }}
                      value={PriceState.type}
                      onChange={(e) =>
                        dispatch({
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
                </div>
                <div className="col-lg-3 col-md-6">
                  <div>
                    <select
                      className="form-control"
                      name="Diameters"
                      style={{ fontWeight: "bold", marginBottom: "15px" }}
                      value={PriceState.diameter}
                      onChange={(e) =>
                        dispatch({
                          type: "UPDATE",
                          value: e.target.value,
                          key: "diameter",
                        })
                      }
                    >
                      <option value="" hidden>
                        Diameters
                      </option>
                      {diameterlist.map((res) => {
                        return (
                          <option className="form-control" value={res}>
                            {res}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListingFilter;
