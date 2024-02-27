import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';

const DashboardCrm = () => {
    document.title = "CRM | Vaival Solutions";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="CRM" pageTitle="Dashboards" />
                    <Row>
                        <Col xs={12}>

                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardCrm;