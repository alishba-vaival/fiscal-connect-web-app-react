import React from 'react';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { DoughnutChart } from './DashboardAnalyticsCharts';

const StoreVisits = () => {
    return (
        <React.Fragment>
            
            <Col xl={6}>
                        <Card className="ribbon-box border shadow-none ">
                            <CardHeader>
                            <div className="ribbon ribbon-info ribbon-shape">Spending Overview</div>
                            </CardHeader >
                            <div className="card-body">
                                <DoughnutChart dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'/>
                            </div>
                        </Card>
                    </Col> 
        </React.Fragment>
    );
};

export default StoreVisits;