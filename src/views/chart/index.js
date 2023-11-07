import React, { useState } from "react";

import Chart from "react-apexcharts";

const ApexChart = ({label}) => {
  const[state,setState] = useState({
    options:{
      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'top',
        horizontalAlign: 'right', 
        floating: false,
        fontWeight: 400,
        inverseOrder: false,
        customLegendItems: [],
        offsetX: 0,
        offsetY: 20,
        labels: {
          colors:"black",
            useSeriesColors: false
        },
        markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors:["#bfdbfe", "#3b82f6"],
            radius: 4,
            offsetX: 0,
            offsetY: 0
        },
        itemMargin: {
            horizontal: 5,
            vertical: 0,
           
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
    },
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
          borderRadius: 4,
        },
      },
      dataLabels: {
        enabled: false
      },
      
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      // xaxis:{},
      yaxis: {
        title: {
          text: label,
          align: 'left',
    margin: 10,
    offsetX: 10,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '14px',
      color:  '#263238'
    },
        }
      },
      fill: {
        opacity: 1,
        colors: ["#bfdbfe", "#3b82f6"],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return  val
          }
        }
      }
    },
    series:[
      {
        name: "Views",
        data: [61, 58, 63, 60, 66, 23, 34],
      },
      {
        name: "Enrolls",
        data: [87, 105, 91, 114, 94, 65, 56],
      },
  ],
  

  })
  return <Chart options={state.options} series={state.series} type="bar"/>;
};
export default ApexChart;
