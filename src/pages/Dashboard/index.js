import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Section from "./Section"; 
import Widget from './Widget';   
const DashboardCrm = () => {
    document.title = "Fiscal Connect | Vaival Solutions";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Analytics" pageTitle="Dashboards" />
                    <Row>
                    <Section />
                        {/* <Col xxl={5}>  */}
                            <Widget />
                        {/* </Col>    */}
                        {/* <StoreVisits /> */}
                    </Row>
                    
                    <Row> 
                    </Row>
                    <Row>
               
                     </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardCrm;