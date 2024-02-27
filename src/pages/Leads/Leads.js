import React from 'react';
import { Card, CardHeader, Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';

const Leads = () => {
    document.title = "CRM | Vaival Solutions";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Lead" pageTitle="Lead Management" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <div className='row align-items-center'>
                                        <div className='col-4'>
                                            <select className='form-select' aria-label='Select defult example'>
                                                <option value="0">Choose Pipline</option>
                                                <option value="main">Main Pipline</option>
                                                <option value="second">Second Pipline</option>
                                                <option value="third">Tertiary Pipline</option>
                                            </select>
                                        </div>
                                        <div className='col-2'>
                                            <button className='btn btn-primary add-btn'>
                                                <i className="ri-add-fill me-1 align-bottom"></i> Create Lead
                                            </button>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Leads;