import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";

// Initialize HighchartsMore module
HighchartsMore(Highcharts);

const options = {
  chart: {
    type: "columnrange",
    inverted: true,
    backgroundColor: "transparent", // Make chart background transparent
  },
  accessibility: {
    enabled: false,
  },
  title: {
    text: null, // Hide chart title
  },
  subtitle: {
    text: null, // Hide chart subtitle
  },
  xAxis: {
    categories: [
      "Brent Crude",
      "Gold",
      "U.S. dollar Index",
      "German 10-year Fund",
      "U.S. 10-year Treasury",
      "Italian 10-year BTP",
      "Global High Yield",
      "Global Corporate IG",
      "EM Equities",
      "Hard-Currency EM Debt",
      "U.S. Equities",
      "European Equities",
    ],
    lineColor: "transparent", // Hide xAxis line
    tickLength: 0, // Hide xAxis tick marks
    labels: {
      style: {
        fontSize: "12px", // Set x-axis label font size
        color: "#202225",
      },
    },
  },
  yAxis: {
    title: {
      text: null, // Hide chart subtitle
    },
    labels: {
      style: {
        fontSize: "12px", // Set x-axis label font size
        color: "#202225",
      },
    },

    plotLines: [
      {
        value: 0, // Y축에서 0의 위치
        color: "#000", // Border color
        width: 1, // Border width (set to 1 for value 0, otherwise 0)
        zIndex: 5, // 라인을 그래프 위로 표시
      },
    ],
  },
  tooltip: {
    valueSuffix: "°C",
  },
  plotOptions: {
    columnrange: {
      dataLabels: {
        enabled: null,
        format: "{y}°C",
      },
      pointWidth: 20, // Adjust the width of the bars
    },
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false, // Hide credits
  },
  series: [
    {
      name: "Temperatures",
      data: [
        [0, 70.0],
        [-4, 30.0],
        [-2.5, 10.0],
        [-10.4, 0],
        [-8, 0],
        [-10, 0],
        [-13, 0],
        [-13, 0],
        [-15, 2],
        [-15, 0],
        [-18, 2],
        [-20, 4],
      ],
      color: "#fd5b26", // Set series color
      borderRadius: 0,
    },
  ],
};

const App = () => {
    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
    .highcharts-grid-line  {
        stroke: transparent !important;
    }
        
        `;
        document.head.appendChild(style);
        return () => {
          document.head.removeChild(style);
        };
      }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default App;
