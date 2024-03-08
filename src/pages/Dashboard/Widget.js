import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CountUp from "react-countup"; 
//Import Icons
import FeatherIcon from "feather-icons-react"; 
import StoreVisits from "./StoreVisits";
const Widget = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={12}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-around">
                                <div  className="d-flex flex-column align-items-center">
                                    <h2 className="mt-4 ff-secondary fw-semibold">
                                        <span className="counter-value">
                                        </span>Amount</h2>
                                    <h2 className="mt-4 ff-secondary fw-semibold ">
                                         Total</h2>
                                </div>
                                <div  className="d-flex flex-column align-items-center">
                                    <h2 className="mt-4 ff-secondary fw-semibold text-info">
                                         PKR 3,33,232</h2>
                                    <h2 className="mt-4 ff-secondary fw-semibold text-primary">
                                        <span className="counter-value">
                                        </span>100</h2>
                                </div>

                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div className='ms-3 mt-2 d-flex flex-column align-items-center'>
                                <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-info rounded-circle fs-4">
                                            40
                                        </span>
                                    </div>
                                    <h5 className="mt-5 ff-secondary fw-semibold">
                                        <span className="counter-value" data-target="97.66"> 
                                        </span>APPROVED</h5> 
                                </div>
                                <div className='me-3 mt-2 d-flex flex-column align-items-center'>
                                <h3 className="fw-medium text-muted text-truncate mt-2">3.5m</h3> 
                                <div className="mt-5">  
                                    <i className="ri-bar-chart-horizontal-fill"></i> 
                                </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div className='ms-3 mt-2 d-flex flex-column align-items-center'>
                                <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-success rounded-circle fs-4">
                                            30
                                        </span>
                                    </div>
                                    <h5 className="mt-5 ff-secondary fw-semibold">
                                        <span className="counter-value" data-target="97.66"> 
                                        </span>PENDING</h5> 
                                </div>
                                <div className='me-3 mt-2 d-flex flex-column align-items-center'>
                                <h3 className="fw-medium text-muted text-truncate mt-2">3.5m</h3> 
                                <div className="mt-5">  
                                    <i className="ri-bar-chart-horizontal-fill"></i> 
                                </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div className='ms-3 mt-2 d-flex flex-column align-items-center'>
                                <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-warning rounded-circle fs-4">
                                            20
                                        </span>
                                    </div>
                                    <h5 className="mt-5 ff-secondary fw-semibold">
                                        <span className="counter-value" data-target="97.66"> 
                                        </span>Un-APPROVED</h5> 
                                </div>
                                <div className='me-3 mt-2 d-flex flex-column align-items-center'>
                                <h3 className="fw-medium text-muted text-truncate mt-2">3.5m</h3> 
                                <div className="mt-5">  
                                    <i className="ri-bar-chart-horizontal-fill"></i> 
                                </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
            <Col xl={6} md={6}>
                    <Card className="ribbon-box border shadow-none mb-lg-0">
                    <div className="ribbon ribbon-info ribbon-shape">Recent Reports</div>
                        <CardBody className="position-relative mt-5"> 
                            <div className="vstack gap-2">
                            <div className="card-radio"> 
                                    <label className="form-check-label" htmlFor="listGroupRadioGrid2">
                                        <div className="d-flex align-items-center"> 
                                            <div className="flex-grow-1 ">
                                                <b className="">Books Receipt</b>
                                                <p className="fw-medium text-muted text-truncate mb-0  mt-3">#ES-002912</p>  
                                            </div> 
                                            <div className='d-flex flex-column align-items-center'>
                                                <p className="text-muted ms-2">PKR  5000</p>  
                                                <p className="border-primary rounded-pill bg-info bold  mb-0 p-1">
                                                    <b className="p-3">APPROVED</b>
                                                </p> 
                                            </div> 
                                        </div>
                                    </label>
                                </div> 
                                <div className="form-check card-radio"> 
                                    <label className="form-check-label" htmlFor="listGroupRadioGrid2">
                                        <div className="d-flex align-items-center"> 
                                            <div className="flex-grow-1">
                                                <b className="">Books Receipt</b>
                                                <p className="fw-medium text-muted text-truncate mb-0  mt-3">#ES-002912</p>  
                                            </div> 
                                            <div className='d-flex flex-column align-items-center'>
                                                <p className="text-muted ms-2">PKR  5000</p>  
                                                <p className="border-primary rounded-pill bg-warning bold  mb-0 p-1">
                                                    <b className="p-3">Un-APPROVED</b>
                                                </p> 
                                            </div> 
                                        </div>
                                    </label>
                                </div> 
                                <div className="form-check card-radio"> 
                                    <label className="form-check-label" htmlFor="listGroupRadioGrid2">
                                        <div className="d-flex align-items-center"> 
                                            <div className="flex-grow-1 ">
                                                <b className="">Books Receipt</b>
                                                <p className="fw-medium text-muted text-truncate mb-0  mt-3">#ES-002912</p>  
                                            </div> 
                                            <div className='d-flex flex-column align-items-center'>
                                                <p className="text-muted ms-2">PKR  5000</p>  
                                                <p className="border-primary rounded-pill bg-success bold  mb-0 p-1">
                                                    <b className="p-3">Pending</b>
                                                </p> 
                                            </div> 
                                        </div>
                                    </label>
                                </div> 
                            </div>  
                        </CardBody>
                    </Card>
                </Col>
                <StoreVisits />
              
            </Row>
        </React.Fragment>
    );
};

export default Widget;