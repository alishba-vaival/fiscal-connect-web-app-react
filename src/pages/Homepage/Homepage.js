import React from 'react';
import { Col, Container, Row, Card, CardTitle, CardText, Button } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import cashExpense from '../../assets/images/homepage/cashExpense.svg';
import bankExpense from '../../assets/images/homepage/bankExpense.svg';
import receipt from '../../assets/images/homepage/receipt.svg';
import createVoucher from '../../assets/images/homepage/createVoucher.svg';
import other from '../../assets/images/homepage/other.svg';
import views from '../../assets/images/homepage/Views.svg';
import dashboardIcon from '../../assets/images/homepage/dashboard.svg';
import arrowUp from '../../assets/images/homepage/arrowUp.svg';

const HomePage = () => {
    document.title = "CRM | Vaival Solutions";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Homepage" pageTitle="Homepage" />
                    <Row>
                        <Col xs={12}>

                        </Col>
                        <Col md="2">
                            <Card body
                            style={{
                                backgroundColor:"transparent",
                                color: 'black',
                                border: 0,
                                boxShadow: 'none',
                            }}>
                            <CardTitle tag="h5"
                            style={{
                                backgroundColor:"#F2F8FF",
                                border: 1,
                                borderRadius: 7,
                                padding: '30%',
                                
                            }}>
                            <img
                                alt="CashExpense"
                                src={cashExpense}
                                width= '100%'
                                
                            />
                            </CardTitle>
                            <Button style={{
                                backgroundColor:"transparent",
                                color: 'black',
                                border: 0,
                                boxShadow: 'none',
                            }}>
                                Cash Expense
                            </Button>
                            </Card>
                        </Col>
                        <Col md="2">
                            <Card body
                            style={{
                                backgroundColor:"transparent",
                                color: 'black',
                                border: 0,
                                boxShadow: 'none',
                                
                            }}>
                            <CardTitle tag="h5"
                            style={{
                                backgroundColor:"#F2F8FF",
                                border: 1,
                                borderRadius: 7,
                                padding: '30%',
                                
                            }}>
                            <img
                                alt="BankExpense"
                                src={bankExpense}
                                width= '100%'
                                
                            />
                            </CardTitle>
                            <Button style={{
                                backgroundColor:"transparent",
                                color: 'black',
                                border: 0,
                                boxShadow: 'none',
                            }}>
                                Bank Expense
                            </Button>
                            </Card>
                        </Col>
                        <Col md="2">
                            <Card body
                            style={{
                                backgroundColor:"transparent",
                                color: 'black',
                                border: 0,
                                boxShadow: 'none',
                            }}>
                            <CardTitle tag="h5"
                            style={{
                                backgroundColor:"#F6F2FF",
                                border: 1,
                                borderRadius: 7,
                                padding: '30%',
                                
                            }}>
                            <img
                                alt="receipt"
                                src={receipt}
                                width= '100%'
                                
                            />
                            </CardTitle>
                            <Button style={{
                                backgroundColor:"transparent",
                                color: 'black',
                                border: 0,
                                boxShadow: 'none',
                            }}>
                                Receipt
                            </Button>
                            </Card>
                        </Col>
                        <Col md="2">
                            <Card body
                            style={{
                                backgroundColor:"transparent",
                                color: 'black',
                                border: 0,
                                boxShadow: 'none',
                            }}>
                            <CardTitle tag="h5"
                            style={{
                                backgroundColor:"#F4FCFB",
                                border: 1,
                                borderRadius: 7,
                                padding: '30%',
                                
                            }}>
                            <img
                                alt="other"
                                src={other}
                                width= '100%'
                                
                            />
                            </CardTitle>
                            <Button style={{
                                backgroundColor:"transparent",
                                color: 'black',
                                border: 0,
                                boxShadow: 'none',
                            }}>
                                Other
                            </Button>
                            </Card>
                        </Col>
                        <Col md="2">
                            <Card body
                            style={{
                                backgroundColor:"transparent",
                                color: 'black',
                                border: 0,
                                boxShadow: 'none',
                            }}>
                            <CardTitle tag="h5"
                            style={{
                                backgroundColor:"#FFF9F2",
                                border: 1,
                                borderRadius: 7,
                                padding: '30%',
                                
                            }}>
                            <img
                                alt="Views"
                                src={views}
                                width= '100%'
                                
                            />
                            </CardTitle>
                            <Button 
                            style={{
                                backgroundColor:"transparent",
                                color: 'black',
                                border: 0,
                                boxShadow: 'none',
                            }}>
                                Views
                            </Button>
                            </Card>
                        </Col>
                        <Col md="2">
                            <Card body
                            style={{
                                backgroundColor:"transparent",
                                color: 'black',
                                border: 0,
                                boxShadow: 'none',
                            }}>
                            <CardTitle tag="h5"
                            style={{
                                backgroundColor:"#F2F8FF",
                                border: 1,
                                borderRadius: 7,
                                padding: '30%',
                                
                            }}>
                            <img
                                alt="CreateVoucher"
                                src={createVoucher}
                                width= '100%'
                                
                            />
                            </CardTitle>
                            <Button style={{
                                backgroundColor:"transparent",
                                color: 'black',
                                border: 0,
                                boxShadow: 'none',
                            }}>
                                Create Voucher
                            </Button>
                            </Card>
                        </Col>
                    </Row>
                    

                </Container>
            </div>
        </React.Fragment>
    );
};

export default HomePage;