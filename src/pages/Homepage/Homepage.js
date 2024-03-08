import React from "react";
import { useNavigate } from 'react-router-dom';

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

const useHandleCashExpenseClick = () => {
  const navigate = useNavigate();
  const handleCashExpenseClick = () => {
    navigate("/cashExpense");
  };

  return handleCashExpenseClick;
};
const useHandleBankExpenseClick = () => {
  const navigate = useNavigate();
  const handleBankExpenseClick = () => {
    navigate("/bankExpense");
  };

  return handleBankExpenseClick;
};

const useHandleReceiptClick = () => {
  const navigate = useNavigate();
  const handleReceiptClick = () => {
    navigate("/receipt");
  };

  return handleReceiptClick;
};

const useHandleCreateVoucherClick = () => {
  const navigate = useNavigate();
  const handleCreateVoucherClick = () => {
    navigate("/createVoucher");
  };

  return handleCreateVoucherClick;
};

const useHandleOtherClick = () => {
  const navigate = useNavigate();
  const handleOtherClick = () => {
    navigate("/other");
  };

  return handleOtherClick;
};

const useHandleViewsClick = () => {
  const navigate = useNavigate();
  const handleViewsClick = () => {
    navigate("/views");
  };

  return handleViewsClick;
};

const HomePage = () => {
  document.title = "Fiscal Connect | Vaival Solutions";
  const handleCashExpenseClick = useHandleCashExpenseClick();
  const handleBankExpenseClick = useHandleBankExpenseClick();
  const handleReceiptClick = useHandleReceiptClick();
  const handleCreateVoucherClick = useHandleCreateVoucherClick();
  const handleOtherClick = useHandleOtherClick();
  const handleViewsClick = useHandleViewsClick();
  return (
    <React.Fragment>
      <div className="page-content">
          <BreadCrumb title="Homepage" pageTitle="Homepage" />
        <Container fluid className="homeContainer">
        
          <Row>
            <Col xs={12}></Col>
            <Col md="2">
              <Card body className="homeCard" >
                <CardTitle tag="h5" className="homeCardTitle" onClick={handleCashExpenseClick}
                  style={{
                    backgroundColor: "#F2F8FF",
                  }}
                >
                  <img alt="CashExpense" src={cashExpense} width="100%" />
                </CardTitle>
                <Button className="homeBtn"  onClick={handleCashExpenseClick}>Cash Expense</Button>
              </Card>
            </Col>
            <Col md="2">
              <Card body className="homeCard">
                <CardTitle tag="h5" className="homeCardTitle" onClick={handleCashExpenseClick} 
                  style={{
                    backgroundColor: "#F2F8FF",
                  }}>
                  <img alt="BankExpense" src={bankExpense} width="100%" />
                </CardTitle>
                <Button className="homeBtn" onClick={handleBankExpenseClick}>Bank Expense</Button>
              </Card>
            </Col>
            <Col md="2">
              <Card body className="homeCard">
                <CardTitle tag="h5" className="homeCardTitle" onClick={handleCashExpenseClick}
                style={{
                    backgroundColor: "#F6F2FF",
                  }}
                >
                  <img alt="receipt" src={receipt} width="100%" />
                </CardTitle>
                <Button className="homeBtn" onClick={handleReceiptClick}>Receipt</Button>
              </Card>
            </Col>
            <Col md="2">
              <Card body className="homeCard">
                <CardTitle tag="h5" className="homeCardTitle" onClick={handleCashExpenseClick}
                  style={{
                    backgroundColor: "#F4FCFB",
                  }}
                >
                  <img alt="other" src={other} width="100%" />
                </CardTitle>
                <Button className="homeBtn" onClick={handleOtherClick}>Other</Button>
              </Card>
            </Col>
            </Row>
            <Row>
            <Col md="2">
              <Card body className="homeCard">
                <CardTitle tag="h5"className="homeCardTitle" onClick={handleCashExpenseClick}
                  style={{
                    backgroundColor: "#FFF9F2",
                  }}
                >
                  <img alt="Views" src={views} width="100%" />
                </CardTitle>
                <Button className="homeBtn" onClick={handleViewsClick}>Views</Button>
              </Card>
            </Col>
            <Col md="2">
              <Card body className="homeCard">
                <CardTitle tag="h5" className="homeCardTitle" onClick={handleCashExpenseClick}
                  style={{
                    backgroundColor: "#F2F8FF",
                  }}
                >
                  <img alt="CreateVoucher" src={createVoucher} width="100%" />
                </CardTitle>
                <Button className="homeBtn" onClick={handleCreateVoucherClick}>Create Voucher</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
