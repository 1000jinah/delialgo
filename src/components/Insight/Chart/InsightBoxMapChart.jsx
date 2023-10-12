import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
// Initialize the heatmap module
HighchartsHeatmap(Highcharts);
const HeatMapChartComponent = () => {
  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      Highcharts.chart("heatMapWeek" + i, {
        chart: {
          type: "heatmap",
          width: 430,

          backgroundColor: "transparent",
          animation: false,
        },
        title: {
          text: i === 0 ? "1 Week" : "YTD",

          align: "left",
          style: {
            fontSize: 16,
            color: "#127fb0",
          },
        },
        credits: {
          enabled: false,
        },
        xAxis: {
          opposite: true,
          categories: ["value", "Blend", "Growth"],
          lineWidth: 0,
          labels: {
            style: {
              color: "#000",
              fontSize: 16,

            },
          },
        },
        yAxis: {
          gridLineColor: "transparent",
          categories: ["small", "Medium", "Large"],
          title: null,
          reversed: false,
          labels: {
            style: {
              color: "#000",
              fontSize: 16,
            },
          },
        },
        legend: {
          enabled: false,
        },
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
              style: {
                color: "#fff",
                fontSize: 16,
                textOutline: "none",
              },
            },
            rowsize: 0.8,
            colsize: 0.8,
            borderColor: "#000000",
            borderWidth: 1,
            states: {
              inactive: {
                opacity: 1,
              },
              hover: {
                enabled: false,
              },
            },
          },
        },
        series: [
          {
            name: "1 Week",
            pointPadding: 2,
            color: i === 0 ? "#ff754b" : "#fec90e", // Set colors based on index
            dataLabels: {
              style: {
                color: "#fff",
                fontSize: "18px",
              },
            },
            data: [
              [0, 0, 4],
              [0, 1, 4.9],
              [0, 2, 5.3],
              [1, 0, 6],
              [1, 1, 6],
              [1, 2, 6.5],
              [2, 0, 8.4],
              [2, 1, 8.6],
              [2, 2, 7.9],
            ],
          },
        ],
      });
    }
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div id="heatMapWeek0" style={{ height: "400px", widht: "auto" }}></div>
      <div id="heatMapWeek1" style={{ height: "400px", widht: "auto" }}></div>
    </div>
  );
};

export default HeatMapChartComponent;
