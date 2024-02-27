import React, { useState } from 'react';
import { Card, CardHeader, Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import { PiplineModal } from '../addPipline';

const Leads = () => {
    document.title = "CRM | Vaival Solutions";
    
    const [isModalClose, setIsModalClose] = useState(false);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Category" pageTitle="Lead Management" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <div className='row gap-2 align-items-center'>

                                        <div className='col-4'>
                                            <select name='' className='form-select' aria-label='Default Data example' data-choices={true} data-choices-text-disabled-true={true}>
                                                <option value='0'>Choose Pipline</option>
                                                <option value='1' >Pipline 01</option>
                                                <option value='2'>Pipline 02</option>
                                            </select>
                                        </div>
                                        <div className='col-2'>
                                            <button className='btn btn-primary add-btn' onClick={() => setIsModalClose(true)}>
                                                <i className="ri-add-fill me-1 align-bottom"></i> Add Pipline
                                            </button>
                                        </div>


                                    </div>
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <PiplineModal modalType={'Lead'} modalStatus={isModalClose} modalSize={'modal-dialog-centered  modal-sm'} />
            </div>
        </React.Fragment>
    );
};

export default Leads;