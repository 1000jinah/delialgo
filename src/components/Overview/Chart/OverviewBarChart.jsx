import React, { useEffect } from "react";
import Highcharts from "highcharts";

const TrophyChart = () => {
  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        backgroundColor: "#FDEAE4",
        type: "column",
        
      },
      title: false,
      xAxis: {
        width: 1200,
        categories: ["2018", "2019", "2020", "2021", "2022"],
        lineColor: "#ccbcb8", // Set x-axis border color
      },
      yAxis: {
        min: 0,
        max: 100, // Set the maximum value for the y-axis
        title: {
          enabled: false,
        },
        stackLabels: {
          enabled: true,
        },
        gridLineColor: "#ccbcb8", // Set y-axis grid line color
        labels: {
          style: {
            color: "#b3a5a1", // Set y-axis text color
          },
        },
        tickPositions: [0, 20, 40, 60, 80, 100],
      },
      legend: {
        width: 200,
        padding: 45,
        y: -10,
        layout: "vertical",
        align: "right", // Align legend to the right
        verticalAlign: "middle", // Center the legend vertically
        floating: true,
        backgroundColor: "#FDEAE4",
        symbolHeight: 12, // Set the height of legend symbols
        x: 35,
        symbolRadius: 0, // Set the symbol corner radius to 0
        symbolPadding: 0, // Set padding between symbols
        shadow: false,
        itemMarginTop: 10, // Add spacing between legend symbols
      },
      tooltip: {
        headerFormat: "<b>{point.x}</b><br/>",
        pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
      },
      plotOptions: {
        column: {
          stacking: "normal",
          dataLabels: {
            enabled: true,
            color: "#202225", // Set data label text color
            style: {
              textOutline: "none", // Remove the text outline
              fontWeight: "normal",
            },
          },
          borderColor: "#fdeae4", // Set border color around the bars
          borderWidth: 1, // Set border width around the bars
        },
      },
      series: [
        {
          name: "Vehicles",
          data: [26, 24, 25, 14, 18],
          color: "#819e9a",
        },
        {
          name: "Financials",
          data: [11, 18, 13, 19, 20],
          color: "#a6a371",
        },
        {
          name: "Fixed Income",
          data: [41, 20, 15, 20, 23],
          color: "#eed485",
        },
        {
          name: "Fixed Income",
          data: [22, 38, 47, 47, 39],
          color: "#eea45f",
        },
      ],
   
    });
  }, []);

  return (
    <div
      id="container"
      style={{
        width: "100%",
        height: "280px",
        padding: "24px",
        backgroundColor: "#FDEAE4",
      }}
    ></div>
  );
};

export default TrophyChart;
