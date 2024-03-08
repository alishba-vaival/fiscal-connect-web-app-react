import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Input, Label, Row, Button } from 'reactstrap';
import AuthSlider from './authCarousel';
import icon1 from '../../assets/images/homepage/playstore.svg';
import icon2 from '../../assets/images/homepage/appstore.svg';
import logo from '../../assets/images/homepage/fiscalconnectlogo.png';

const CoverSignIn = () => {
    document.title = "Cover SignIn | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <style>
                {`
                body {
                    overflow: hidden;
                }
                `}
            </style>
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100"  >
                <div className="bg-overlay"></div>
                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Card className="overflow-hidden" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                    <Row className="g-0">
                                        <AuthSlider /> 

                                        <Col lg={6}>
                                            <div className="p-lg-5 p-4">
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <img src={logo} alt="Logo" height="100px" />
                                                </div>

                                                <div className="mt-4" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '15px' }}>
                                                    <form action="/"> 
                                                        <div className="mb-3">
                                                            <Label htmlFor="username" className="form-label">Username</Label>
                                                            <Input type="text" className="form-control" id="username" placeholder="Email" style={{ height: '50px' ,fontSize: '16px' }} />
                                                        </div> 
                                                        <div className="mb-3">
                                                            <div className="float-end">
                                                                <Link to="/auth-pass-reset-cover" className="text-muted">Forgot password?</Link>
                                                            </div>
                                                            <Label className="form-label" htmlFor="password-input">Password</Label>
                                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                                <Input type="password" className="form-control pe-5 password-input" placeholder="Password" id="password-input" style={{ height: '50px',fontSize: '16px'  }}/>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4">
                                                            <Button color="info" className="w-100" type="submit" style={{ height: '50px' ,fontSize: '16px' ,fontWeight:' bold'}}>Sign In</Button>
                                                        </div>  
                                                    </form>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <div>
                                                        <img src={icon1} alt="" height="60" />
                                                        <img src={icon2} alt="" height="60" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CoverSignIn;