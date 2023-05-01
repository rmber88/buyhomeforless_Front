import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        {/* Compare Item Start */}
                        <div className="col-lg-4">
                            <div className="listing compare-listing-item">
                                <div className="listing-thumbnail">
                                    <Link to="/listing-details-v1"><img src={process.env.PUBLIC_URL + "/assets/img/listings/1.jpg"} alt="listing" /></Link>
                                    <div className="listing-badges">
                                        <span className="listing-badge featured"> <i className="fas fa-star" /> </span>
                                        <span className="listing-badge pending"> Pending</span>
                                    </div>
                                    <div className="listing-controls">
                                        <Link to="#" className="favorite"><i className="far fa-heart" /></Link>
                                        <Link to="#" className="remove"><i className="far fa-times-circle" /></Link>
                                    </div>
                                </div>
                                <div className="listing-body">
                                    <h5 className="listing-title"> <Link to="/listing-details-v1" title="Iris Watson, Frederick Nebraska 20620">Iris Watson, Frederick Nebraska 20620</Link> </h5>
                                    <span className="listing-price">3,500$ <span>/month</span> </span>
                                    <p className="listing-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <Link to="/listing-details-v1" className="btn-custom btn-sm secondary">View Details</Link>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-bedroom" />
                                <div className="acr-compare-feature-body">
                                    <h6>Bed Rooms</h6>
                                    <span>3</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-bathroom" />
                                <div className="acr-compare-feature-body">
                                    <h6>Bath Rooms</h6>
                                    <span>3</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-ruler" />
                                <div className="acr-compare-feature-body">
                                    <h6>Space</h6>
                                    <span>2,400 Sqft</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-picture" />
                                <div className="acr-compare-feature-body">
                                    <h6>Property Type</h6>
                                    <span>Home</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-new" />
                                <div className="acr-compare-feature-body">
                                    <h6>Condition</h6>
                                    <span>New</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-eye" />
                                <div className="acr-compare-feature-body">
                                    <h6>View</h6>
                                    <span>City View</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-bone" />
                                <div className="acr-compare-feature-body">
                                    <h6>Pet Friendly</h6>
                                    <span>No</span>
                                </div>
                                <i className="custom-danger fas fa-times" />
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-chair" />
                                <div className="acr-compare-feature-body">
                                    <h6>Furnished</h6>
                                    <spa>Yes
            </spa></div>
                                <i className="custom-success fas fa-check" />
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-fan" />
                                <div className="acr-compare-feature-body">
                                    <h6>Cooling</h6>
                                    <span>No</span>
                                </div>
                                <i className="custom-danger fas fa-times" />
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-mailbox" />
                                <div className="acr-compare-feature-body">
                                    <h6>Mailbox</h6>
                                    <span>Yes</span>
                                </div>
                                <i className="custom-success fas fa-check" />
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-garage" />
                                <div className="acr-compare-feature-body">
                                    <h6>Parking</h6>
                                    <span>No</span>
                                </div>
                                <i className="custom-danger fas fa-times" />
                            </div>
                        </div>
                        {/* Compare Item End */}
                        {/* Compare Item Start */}
                        <div className="col-lg-4">
                            <div className="listing compare-listing-item">
                                <div className="listing-thumbnail">
                                    <Link to="/listing-details-v1"><img src={process.env.PUBLIC_URL + "/assets/img/listings/2.jpg"} alt="listing" /></Link>
                                    <div className="listing-badges">
                                        <span className="listing-badge rent"> Rental</span>
                                    </div>
                                    <div className="listing-controls">
                                        <Link to="#" className="favorite"><i className="far fa-heart" /></Link>
                                        <Link to="#" className="remove"><i className="far fa-times-circle" /></Link>
                                    </div>
                                </div>
                                <div className="listing-body">
                                    <h5 className="listing-title"> <Link to="/listing-details-v1" title="Theodore Lowe, Azusa New York 39531">Theodore Lowe, Azusa New York 39531</Link> </h5>
                                    <span className="listing-price">2,400$ <span>/month</span> </span>
                                    <p className="listing-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <Link to="/listing-details-v1" className="btn-custom btn-sm secondary">View Details</Link>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-bedroom" />
                                <div className="acr-compare-feature-body">
                                    <h6>Bed Rooms</h6>
                                    <span>2</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-bathroom" />
                                <div className="acr-compare-feature-body">
                                    <h6>Bath Rooms</h6>
                                    <span>1</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-ruler" />
                                <div className="acr-compare-feature-body">
                                    <h6>Space</h6>
                                    <span>1,800 Sqft</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-picture" />
                                <div className="acr-compare-feature-body">
                                    <h6>Property Type</h6>
                                    <span>House</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-new" />
                                <div className="acr-compare-feature-body">
                                    <h6>Condition</h6>
                                    <span>Used</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-eye" />
                                <div className="acr-compare-feature-body">
                                    <h6>View</h6>
                                    <span>Forest View</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-bone" />
                                <div className="acr-compare-feature-body">
                                    <h6>Pet Friendly</h6>
                                    <span>No</span>
                                </div>
                                <i className="custom-danger fas fa-times" />
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-chair" />
                                <div className="acr-compare-feature-body">
                                    <h6>Furnished</h6>
                                    <span>Yes</span>
                                </div>
                                <i className="custom-success fas fa-check" />
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-fan" />
                                <div className="acr-compare-feature-body">
                                    <h6>Cooling</h6>
                                    <span>Yes</span>
                                </div>
                                <i className="custom-success fas fa-check" />
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-mailbox" />
                                <div className="acr-compare-feature-body">
                                    <h6>Mailbox</h6>
                                    <span>No</span>
                                </div>
                                <i className="custom-danger fas fa-times" />
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-garage" />
                                <div className="acr-compare-feature-body">
                                    <h6>Parking</h6>
                                    <span>Yes</span>
                                </div>
                                <i className="custom-success fas fa-check" />
                            </div>
                        </div>
                        {/* Compare Item End */}
                        {/* Compare Item Start */}
                        <div className="col-lg-4">
                            <div className="listing compare-listing-item">
                                <div className="listing-thumbnail">
                                    <Link to="/listing-details-v1"><img src={process.env.PUBLIC_URL + "/assets/img/listings/3.jpg"} alt="listing" /></Link>
                                    <div className="listing-badges">
                                        <span className="listing-badge featured"> <i className="fas fa-star" /> </span>
                                        <span className="listing-badge pending"> Pending</span>
                                    </div>
                                    <div className="listing-controls">
                                        <Link to="#" className="favorite"><i className="far fa-heart" /></Link>
                                        <Link to="#" className="remove"><i className="far fa-times-circle" /></Link>
                                    </div>
                                </div>
                                <div className="listing-body">
                                    <h5 className="listing-title"> <Link to="/listing-details-v1" title="Cecilia Chapman, Mankato Mississippi 96522">Cecilia Chapman, Mankato Mississippi 96522</Link> </h5>
                                    <span className="listing-price">2,600$ <span>/month</span> </span>
                                    <p className="listing-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <Link to="/listing-details-v1" className="btn-custom btn-sm secondary">View Details</Link>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-bedroom" />
                                <div className="acr-compare-feature-body">
                                    <h6>Bed Rooms</h6>
                                    <span>4</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-bathroom" />
                                <div className="acr-compare-feature-body">
                                    <h6>Bath Rooms</h6>
                                    <span>3</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-ruler" />
                                <div className="acr-compare-feature-body">
                                    <h6>Space</h6>
                                    <span>3,600 Sqft</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-picture" />
                                <div className="acr-compare-feature-body">
                                    <h6>Property Type</h6>
                                    <span>Villa</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-new" />
                                <div className="acr-compare-feature-body">
                                    <h6>Condition</h6>
                                    <span>New</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-eye" />
                                <div className="acr-compare-feature-body">
                                    <h6>View</h6>
                                    <span>City View</span>
                                </div>
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-bone" />
                                <div className="acr-compare-feature-body">
                                    <h6>Pet Friendly</h6>
                                    <span>Yes</span>
                                </div>
                                <i className="custom-success fas fa-check" />
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-chair" />
                                <div className="acr-compare-feature-body">
                                    <h6>Furnished</h6>
                                    <span>Yes</span>
                                </div>
                                <i className="custom-success fas fa-check" />
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-fan" />
                                <div className="acr-compare-feature-body">
                                    <h6>Cooling</h6>
                                    <span>Yes</span>
                                </div>
                                <i className="custom-success fas fa-check" />
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-mailbox" />
                                <div className="acr-compare-feature-body">
                                    <h6>Mailbox</h6>
                                    <span>Yes</span>
                                </div>
                                <i className="custom-success fas fa-check" />
                            </div>
                            <div className="acr-compare-feature">
                                <i className="flaticon-garage" />
                                <div className="acr-compare-feature-body">
                                    <h6>Parking</h6>
                                    <span>Yes</span>
                                </div>
                                <i className="custom-success fas fa-check" />
                            </div>
                        </div>
                        {/* Compare Item End */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;