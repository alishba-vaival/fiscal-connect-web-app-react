import React from "react";
import {
  Col,
  Container,
  Row,
  Label,
  Input,
  FormGroup,
  Button,
  Form,
} from "reactstrap";

import Flatpickr from "react-flatpickr";
import BreadCrumb from "../../Components/Common/BreadCrumb";

const CashExpense = () => {
  document.title = "CRM | Vaival Solutions";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="CashExpense" pageTitle="CashExpensePage" />
          <Row>
            <Col xs={12}></Col>
            <Container
              fluid
              style={{
                backgroundColor: "white",
                padding: "1.3%",
                margin: "0.3%",
              }}
            >
              <Form>
                <Row>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="exampleEmail">Site Name</Label>
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
                      <Label for="exampleEmail">Class</Label>
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
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="exampleAddress">Address</Label>
                  <Input
                    id="exampleAddress"
                    name="address"
                    placeholder="1234 Main St"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleAddress2">Address 2</Label>
                  <Input
                    id="exampleAddress2"
                    name="address2"
                    placeholder="Apartment, studio, or floor"
                  />
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleCity">City</Label>
                      <Input id="exampleCity" name="city" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleState">State</Label>
                      <Input id="exampleState" name="state" />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="exampleZip">Zip</Label>
                      <Input id="exampleZip" name="zip" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup check>
                  <Input id="exampleCheck" name="check" type="checkbox" />
                  <Label check for="exampleCheck">
                    Check me out
                  </Label>
                </FormGroup>
                <Button>Sign in</Button>
              </Form>
            </Container>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CashExpense;
