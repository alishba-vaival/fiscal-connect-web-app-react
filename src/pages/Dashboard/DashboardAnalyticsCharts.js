import React from 'react';
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts/core';

import getChartColorsArray from "../../Components/Common/ChartsDynamicColor";

const DoughnutChart = ({ dataColors }) => {
    var chartDoughnutColors = getChartColorsArray(dataColors);
    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%', 
            orient: 'vertical',
            left: 'left', 
            textStyle: { //The style of the legend text
                color: '#858d98',
            },
        },
        color: chartDoughnutColors,
        series: [{
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '16',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 1048,
                name: 'Cost'
            },
            {
                value: 735,
                name: 'Adminstrative Epenses'
            },
            {
                value: 580,
                name: 'Financial Charges'
            } 
            ]
        }],
        textStyle: {
            fontFamily: 'Poppins, sans-serif'
        },
    };

    return (
        <React.Fragment>
            <ReactEcharts style={{ height: "325px" }} option={option} />
        </React.Fragment>
    )
}


export {DoughnutChart};