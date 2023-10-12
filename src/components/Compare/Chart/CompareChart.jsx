import React, { useEffect } from "react";
import Highcharts from "highcharts";

const CompareChart = () => {
  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        backgroundColor: "#fff9f5", // Set chart background color
      },
      title: false,
      subtitle: false,
      credits: {
        enabled: false, // Disable credits
      },
      yAxis: {
        title: {
          text: false, // Remove the title text
        },
        labels: {
          style: {
            color: "#b3a5a1", // Set y-axis text color
          },
        },
      },
      xAxis: {
        accessibility: {
          rangeDescription: "Range: 2010 to 2020",
        },
        labels: {
          style: {
            color: "#b3a5a1", // Set x-axis text color
          },
          x: 5, // Shift x-axis labels to the right
        },
        lineColor: "#fdeae4", // Set x-axis border color
        tickColor: "#fdeae4", // Set x-axis tick color
      },
      legend: {
        layout: "horizontal", // Change layout to horizontal
        align: "left", // Align the legend to the left
        verticalAlign: "top", // Place legend at the top
        margin: 10, // Add margin below the legend
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2010,
        },
        line: {
          lineWidth: 2, // Set line width
          marker: {
           enabled:false,
           hover:{
            enabled:false,
            radius: 4,
            symbol: "circle", // Set marker symbol
            fillColor: "#fff", // Set marker fill color
            lineColor: null, // Disable marker line color
            lineWidth: 2, // Set marker line width
           }
          },
        },
      },
      series: [
        {
          name: "Installation & Developers",
          data: [
            43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
            161454, 154610,
          ],
          type: "line", // Specify line chart type
          color: "#94826b", // Set line color for this series
        },
        {
          name: "Manufacturing",
          data: [
            24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726,
            34243, 31050,
          ],
          type: "line", // Specify line chart type
          color: "#eea45f", // Set line color for this series
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal", // Change layout to horizontal
                align: "center", // Center align the legend
                verticalAlign: "bottom", // Place legend at the bottom
              },
            },
          },
        ],
      },
    });
  }, []);

  return (
    <div
      id="container"
      style={{ width: "100%", height: "400px", padding: "24px" }}
    ></div>
  );
};

export default CompareChart;
