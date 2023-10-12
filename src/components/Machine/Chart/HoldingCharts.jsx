import React, { useEffect } from "react";
import Highcharts from "highcharts";

const DoughtCharts = () => {
  const chartData = [
    { name: "Health Care", y: 12 },
    { name: "Fixed Income", y: 8 },
    { name: "Financials", y: 8 },
    { name: "Vehicles", y: 8 },
  ];
  useEffect(() => {
    // Build the chart
    Highcharts.chart("container2", {
      chart: {
        plotBackgroundColor: "transparent", // 변경된 부분
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      colors: ["#eea45f", "#eed485", "#27757b", "#819e9a"],
      title: {
        text: "Asset Allocation (% of net worth)",
        align: "right",
        verticalAlign: "top",
        x: 10,
        y: 80,
        style: {
          fontSize: 16,
          fontWeight: "normal",
          color: " #2d3142",
        },
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
          },
          showInLegend: true,
          //   borderWidth: 0.8,
          borderColor: "transparent",
          innerSize: "60%",
        },
      },
      series: [
        {
          name: "Brands",
          colorByPoint: true,
          data: chartData,
        },
      ],
      legend: {
        x: -10,
        y: 40,
        align: "right",
        verticalAlign: "middle",
        layout: "vertical",
        itemMarginTop: 14,
        itemMarginBottom: 10,
        labelFormat: "{name}",
        itemStyle: {
          fontSize: 16,
        },
        symbolWidth: 20, // 사각형의 너비
        symbolHeight: 16, // 사각형의 높이
        symbolPadding: 0,
        symbolRadius: 0,
      },
      credits: {
        enabled: false, // Disable Highcharts credits
      },
    });
  }, []);
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
.highcharts-container  {
    width:600px !important;
}
    .highcharts-data-label-connector {
      stroke: #211d1d;
    }
    .highcharts-label {
      color: #211d1d;
      font-size:16px;
    }
    .highcharts-text-outline {
    stroke: none ;
    fill: #202225;

    }
    .highcharts-data-label-connector{
        stroke: #b3a5a1;
    }
    .highcharts-label > text {
        font-size: 12px !important;
        font-weight: normal !important;
    }
    .highcharts-background{
       fill:transparent !important;
    }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      <div id="container2"></div>
    </div>
  );
};

export default DoughtCharts;
