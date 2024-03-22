import React from 'react';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { DoughnutChart } from './DashboardAnalyticsCharts';

const StoreVisits = () => {
    return (
        <React.Fragment>
            
            <Col xl={6}>
                        <Card className="ribbon-box border shadow-none ">
                            <div className='mb-4 p-1'>
                            <div className="ribbon ribbon-info ribbon-shape">Spending Overview</div>
                            </div >
                            <div className="card-body">
                                <DoughnutChart dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'/>
                            </div>
                        </Card>
                    </Col> 
        </React.Fragment>
    );
};

export default StoreVisits;