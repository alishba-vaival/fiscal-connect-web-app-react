import React from "react";
import { Col } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
 

// Import Images
// import logoLight from "../../assets/images/fiscalconnectlogo.png";

const AuthSlider = () => {
    return (
        <React.Fragment>

            <Col lg={6}>
                <div className="p-lg-5 p-4 auth-one-bg h-100">
                    <div className="bg-overlay"></div>
                    <div className="position-relative h-100 d-flex flex-column">
                        {/* <div className="mb-4">
                            <Link to="/dashboard" className="d-block">
                                <img src={logoLight} alt="" height="36" />
                            </Link>
                        </div> */}
                        <div className="mt-auto"> 
                            <Carousel showThumbs={false} autoPlay={true} showArrows={false} showStatus={false} infiniteLoop={true} className="carousel slide" id="qoutescarouselIndicators" >
                                <div className="carousel-inner text-center   pb-5">
                                    <div className="item">
                                        <p className="fs-15 fst-italic">" Great! Clean code, clean design, easy for customization. Thanks very much! "</p>
                                    </div>
                                </div>
                                <div className="carousel-inner text-center   pb-5">
                                    <div className="item">
                                        <p className="fs-15 fst-italic">" The theme is really great with an amazing customer support."</p>
                                    </div>
                                </div>
                                <div className="carousel-inner text-center   pb-5">
                                    <div className="item">
                                        <p className="fs-15 fst-italic">" Great! Clean code, clean design, easy for customization. Thanks very much! "</p>
                                    </div>
                                </div>
                            </Carousel>
                            {/* <div className="mt-2 text-center">


                                <div>
                                    <img src={icon1} alt="" height="68" />
                                    <img src={icon2} alt="" height="68" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </Col>
        </React.Fragment >
    );
};

export default AuthSlider;