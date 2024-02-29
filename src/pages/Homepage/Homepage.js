import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import cashExpense from "../../assets/images/figma/cashExpense.svg";
import bankExpense from "../../assets/images/figma/bankExpense.svg";
import receipt from "../../assets/images/figma/receipt.svg";
import createVoucher from "../../assets/images/figma/createVoucher.svg";
import other from "../../assets/images/figma/other.svg";
import views from "../../assets/images/figma/Views.svg";
import dashboardIcon from "../../assets/images/figma/dashboard.svg";
import arrowUp from "../../assets/images/figma/arrowUp.svg";
import './Homepage.scss';

const HomePage = () => {
  document.title = "CRM | Vaival Solutions";
  return (
    <React.Fragment>
      <div className="page-content">
          <BreadCrumb title="Homepage" pageTitle="Homepage" />
        <Container fluid className="homeContainer">
          <Row>
            {/* <Col xs={12}></Col> */}
            <Col md="3">
              <Card body className="cardHome">
                <CardTitle tag="h5" className="cardTitleHome"
                  style={{
                    backgroundColor: "#F2F8FF",
                  }}
                >
                  <img alt="CashExpense" src={cashExpense} width="100%" />
                </CardTitle>
                <Button className="btnHome">Cash Expense</Button>
              </Card>
            </Col>
            <Col md="3">
              <Card body className="cardHome">
                <CardTitle tag="h5" className="cardTitleHome"
                  style={{
                    backgroundColor: "#F2F8FF",
                  }}>
                  <img alt="BankExpense" src={bankExpense} width="100%" />
                </CardTitle>
                <Button className="btnHome">Bank Expense</Button>
              </Card>
            </Col>
            <Col md="3">
              <Card body className="cardHome">
                <CardTitle tag="h5" className="cardTitleHome"
                style={{
                    backgroundColor: "#F6F2FF",
                  }}
                >
                  <img alt="receipt" src={receipt} width="100%" />
                </CardTitle>
                <Button className="btnHome">Receipt</Button>
              </Card>
            </Col>
            <Col md="3">
              <Card body className="cardHome">
                <CardTitle tag="h5" className="cardTitleHome"
                  style={{
                    backgroundColor: "#F4FCFB",
                  }}
                >
                  <img alt="other" src={other} width="100%" />
                </CardTitle>
                <Button className="btnHome">Other</Button>
              </Card>
            </Col>
            </Row>
            <Row>
            <Col md="3">
              <Card body className="cardHome">
                <CardTitle tag="h5"className="cardTitleHome"
                  style={{
                    backgroundColor: "#FFF9F2",
                  }}
                >
                  <img alt="Views" src={views} width="100%" />
                </CardTitle>
                <Button className="btnHome">Views</Button>
              </Card>
            </Col>
            <Col md="3">
              <Card body className="cardHome">
                <CardTitle tag="h5" className="cardTitleHome"
                  style={{
                    backgroundColor: "#F2F8FF",
                  }}
                >
                  <img alt="CreateVoucher" src={createVoucher} width="100%" />
                </CardTitle>
                <Button className="btnHome">Create Voucher</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
