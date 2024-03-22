import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Card, CardTitle, Button } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import cashExpense from "../../assets/images/figma/cashExpense.svg";
import bankExpense from "../../assets/images/figma/bankExpense.svg";
import receipt from "../../assets/images/figma/receipt.svg";
import createVoucher from "../../assets/images/figma/createVoucher.svg";
import other from "../../assets/images/figma/other.svg";
import views from "../../assets/images/figma/Views.svg";
import "./Homepage.scss";

const useNavigateTo = (path) => {
  const navigate = useNavigate();
  return () => navigate(path);
};

const HomePage = () => {
  document.title = "Fiscal Connect | Vaival Solutions";
  const navigateToCashExpense = useNavigateTo("/cashExpense");
  const navigateToBankExpense = useNavigateTo("/bankExpense");
  const navigateToReceipt = useNavigateTo("/receipt");
  const navigateToCreateVoucher = useNavigateTo("/createVoucher");
  const navigateToOther = useNavigateTo("/other");
  const navigateToViews = useNavigateTo("/views");

  return (
    <React.Fragment>
      <div className="page-content">
        <BreadCrumb title="Homepage" pageTitle="Home" />
        <Container fluid className="homeContainer">
          <Row className="justify-content-center">
            <Col
              xs="11"
              md="5"
              lg="3"
              xl="2"
              className="d-flex justify-content-center"
            >
              <Card body className="homeCard" onClick={navigateToCashExpense}>
                <CardTitle
                  tag="h5"
                  className="homeCardTitle"
                  style={{
                    backgroundColor: "#F2F8FF",
                  }}
                >
                  <img alt="CashExpense" src={cashExpense} width="100%" />
                </CardTitle>
                <Button className="homeBtn">Cash Expense</Button>
              </Card>
            </Col>
            <Col
              xs="11"
              md="5"
              lg="3"
              xl="2"
              className="d-flex justify-content-center"
            >
              <Card body className="homeCard" onClick={navigateToBankExpense}>
                <CardTitle
                  tag="h5"
                  className="homeCardTitle"
                  style={{
                    backgroundColor: "#FFF9F2",
                  }}
                >
                  <img alt="BankExpense" src={bankExpense} width="100%" />
                </CardTitle>
                <Button className="homeBtn">Bank Expense</Button>
              </Card>
            </Col>
            <Col
              xs="11"
              md="5"
              lg="3"
              xl="2"
              className="d-flex justify-content-center"
            >
              <Card body className="homeCard" onClick={navigateToReceipt}>
                <CardTitle
                  tag="h5"
                  className="homeCardTitle"
                  style={{
                    backgroundColor: "#F6F2FF",
                  }}
                >
                  <img alt="receipt" src={receipt} width="100%" />
                </CardTitle>
                <Button className="homeBtn">Receipt</Button>
              </Card>
            </Col>
            <Col
              xs="11"
              md="5"
              lg="3"
              xl="2"
              className="d-flex justify-content-center"
            >
              <Card body className="homeCard" onClick={navigateToOther}>
                <CardTitle
                  tag="h5"
                  className="homeCardTitle"
                  style={{
                    backgroundColor: "#F4FCFB",
                  }}
                >
                  <img alt="other" src={other} width="100%" />
                </CardTitle>
                <Button className="homeBtn">Other</Button>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col
              xs="11"
              md="5"
              lg="3"
              xl="2"
              className="d-flex justify-content-center"
            >
              <Card body className="homeCard" onClick={navigateToViews}>
                <CardTitle
                  tag="h5"
                  className="homeCardTitle"
                  style={{
                    backgroundColor: "#FFF9F2",
                  }}
                >
                  <img alt="Views" src={views} width="100%" />
                </CardTitle>
                <Button className="homeBtn">Views</Button>
              </Card>
            </Col>
            <Col
              xs="11"
              md="5"
              lg="3"
              xl="2"
              className="d-flex justify-content-center"
            >
              <Card body className="homeCard" onClick={navigateToCreateVoucher}>
                <CardTitle
                  tag="h5"
                  className="homeCardTitle"
                  style={{
                    backgroundColor: "#F2F8FF",
                  }}
                >
                  <img alt="CreateVoucher" src={createVoucher} width="100%" />
                </CardTitle>
                <Button className="homeBtn">Create Voucher</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
