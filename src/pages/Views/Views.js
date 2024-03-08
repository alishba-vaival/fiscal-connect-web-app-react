import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Label,
  Input,
  FormGroup,
  Button,
  Form,
  CardBody,
  CardHeader,
  Card,
} from "reactstrap";
import gridIcon from "../../assets/images/figma/grid.svg";
import pdfIcon from "../../assets/images/figma/pdf.svg";

import Flatpickr from "react-flatpickr";
import BreadCrumb from "../../Components/Common/BreadCrumb";


// import { useFormik } from "formik";

const Views = () => {
  document.title = "Fiscal Connect | Vaival Solutions";


  /**
   * Formik
   */

  // const formik = useFormik ({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //     selectedFiles: null,
  //   },
  //   onSubmit: (values) => {
  //     setFiles(values.selectedFiles);
  //   },
  // });

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xs={12}></Col>
            <Card
              fluid
              style={{
                backgroundColor: "white",
                padding: "1.3%",
                margin: "0.3%",
              }}
            >
              <Form>
                <BreadCrumb title="Views" pageTitle="ViewsPage" />
                <Row>
                  <Col
                    md={3}
                    style={{
                      marginLeft: "55rem",
                    }}
                  >
                    <FormGroup>
                      <Label for="financialYearViews">Financial Year</Label>
                      <select
                        className="form-select form-select-md"
                        aria-label=".form-select-md example"
                        required
                      >
                        <option selected>2020-2021</option>
                        <option defaultValue="1">2021-2022</option>
                        <option defaultValue="2">2023-2024</option>
                        <option defaultValue="3">2024-2025</option>
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="siteNameViews">Site Name</Label>
                      <select
                        className="form-select form-select-md"
                        aria-label=".form-select-md example"
                        required
                      >
                        <option selected>Head Office</option>
                        <option defaultValue="1">Test 1 Office</option>
                        <option defaultValue="2">Test 2 Office</option>
                        <option defaultValue="3">Test 3 Office</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="classViews">Class</Label>
                      <select
                        className="form-select form-select-md"
                        aria-label=".form-select-md example"
                        required
                      >
                        <option selected>Lahore</option>
                        <option defaultValue="1">Test 1 City</option>
                        <option defaultValue="2">Test 2 City</option>
                        <option defaultValue="3">Test 3 City</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="dateViews">Date</Label> 
                      <div className="input-group">
                          <Flatpickr
                              className="form-control border-0 dash-filter-picker shadow"
                              placeholder="Select date"
                              options={{
                                  dateFormat: "d-m-Y",
                                  defaultDate: ["2022-01-20"],
                              }}
                          />
                          <div className="input-group-text bg-primary border-primary text-white"><i className="ri-calendar-2-line"></i></div>
                      </div>
                    </FormGroup>
                  </Col>
                  </Row>
                <Row>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="remarksViews">Remarks</Label>
                      <Input
                        id="remarks *"
                        name="remarks *"
                        placeholder="Enter Remarks"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="amountViews">Amount</Label>
                      <Input
                        id="amount"
                        name="amount"
                        placeholder="Enter Amount"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                
                <Button
                  style={{
                    background: "transparent",
                    borderRadius: "50px",
                    padding: "5px 25px",
                    border: "1px solid #0080FF",
                    margin: "10px",
                    color: "#0080FF",
                  }}
                >
                  View Receipt
                  <img src={gridIcon} alt="gridIcon" 
                  style={{margin: "5px"}}/>
                </Button>
                <Button
                  style={{
                    background: "transparent",
                    borderRadius: "50px",
                    padding: "5px 25px",
                    border: "1px solid #FF5652",
                    color: "#FF5652",
                  }}
                >
                  Pdf View
                  <img src={pdfIcon} alt="pdfIcon" 
                  style={{margin: "5px"}}/>
                </Button>
              </Form>
            </Card>
          </Row>
          
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Views;
