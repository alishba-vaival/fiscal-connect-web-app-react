import React from 'react';
import { useState } from "react";
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { Card, Col, Container, Input, Label, Row, Button } from 'reactstrap';
import AuthSlider from './authCarousel';
import icon1 from '../../assets/images/figma/playstore.svg';
import icon2 from '../../assets/images/figma/appstore.svg';
import logo from '../../assets/images/figma/fiscalconnectlogo.png';

import { Checkbox, Grid, TextField, Box, styled, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Formik } from "formik";
import * as Yup from "yup";

// import useAuth from "app/hooks/useAuth";
import { Paragraph } from "../../Components/Typography";


// initial login credentials
const initialValues = {
    email: "demo@vaival.com",
    password: "demopass",
    remember: true
};

// form field validation schema
const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, "Password must be 6 character length")
        .required("Password is required!"),
    email: Yup.string().email("Invalid Email address").required("Email is required!")
});

const CoverSignIn = () => {
    document.title = "Login | Fiscal Connect";

    const theme = useTheme();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    //   const { login } = useAuth();

    const handleFormSubmit = async (values) => {
        setLoading(true);
        try { 
            console.log(values); 
            // await login(values.email, values.password);
            navigate("/homepage");
        } catch (e) {
            setLoading(false);
        }
    };
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
                                                    <Formik 
                                                        style={{ display: 'flex', justifyContent: 'center' }}
                                                        onSubmit={handleFormSubmit}
                                                        initialValues={initialValues}
                                                        validationSchema={validationSchema}>
                                                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                                                            <form onSubmit={handleSubmit}> 
                                                                    <TextField
                                                                        fullWidth
                                                                        size="small"
                                                                        type="email"
                                                                        name="email"
                                                                        label="Email"
                                                                        variant="outlined"
                                                                        onBlur={handleBlur}
                                                                        value={values.email}
                                                                        onChange={handleChange}
                                                                        helperText={touched.email && errors.email}
                                                                        error={Boolean(errors.email && touched.email)}
                                                                        sx={{ mb: 3, marginTop: '1rem' }}
                                                                    />
                                                              
                                                             
                                                                    <TextField
                                                                        fullWidth
                                                                        size="small"
                                                                        name="password"
                                                                        type="password"
                                                                        label="Password"
                                                                        variant="outlined"
                                                                        onBlur={handleBlur}
                                                                        value={values.password}
                                                                        onChange={handleChange}
                                                                        helperText={touched.password && errors.password}
                                                                        error={Boolean(errors.password && touched.password)}
                                                                        sx={{ mb: 1.5 }}
                                                                    />
                                                             
                                                                
                                                                    <Row justifyContent="space-between">
                                                                        <Col  >
                                                                            <Checkbox
                                                                                size="small"
                                                                                name="remember"
                                                                                onChange={handleChange}
                                                                                checked={values.remember}
                                                                                sx={{ padding: 0, display: 'inline-flex', alignItems: 'center' }} // Add inline-flex and alignItems
                                                                            />

                                                                            <Paragraph style={{ display: 'inline', marginLeft: '0.5rem' }}>Remember Me</Paragraph>
                                                                        </Col>
                                                                        <Col>
                                                                            <NavLink
                                                                            className="float-end"
                                                                                to="/session/forgot-password"
                                                                                style={{ color: theme.palette.primary.main,textAlign: 'end',marginLeft: 'auto' }}>
                                                                                Forgot password?
                                                                            </NavLink>
                                                                        </Col>
                                                                    </Row>
                                                             
                                                                    <LoadingButton
                                                                        type="submit"
                                                                        color="primary"
                                                                        loading={loading}
                                                                        variant="contained"
                                                                        sx={{ my: 2 }}>
                                                                        Login
                                                                    </LoadingButton>
                                                                
                                                            </form>
                                                        )}
                                                    </Formik>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <div>
                                                        <img src={icon1} alt=""  width="50%" />
                                                        <img src={icon2} alt=""  width="50%"/>
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