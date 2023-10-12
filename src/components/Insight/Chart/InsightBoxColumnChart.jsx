import React, { useEffect } from "react";
import Highcharts from "highcharts";

const ColumnChartComponent = () => {
  useEffect(() => {
    var category = [
      "Energy",
      "Utilities",
      "Consumer Staples",
      "Health Care",
      "Materials",
      "Industrials",
      "Financials",
      "S&P 500",
      "Real Estate",
      "Technology",
      "Comm Services",
      "Consumer Discr",
    ];
    var plotlines = [];
    for (var i = 0; i < category.length; i++) {
      var pline = {
        color: "#b3b3b3",
        width: 1,
        value: -0.5 + i,
        label: {
          text: category[i],
          verticalAlign: "top",
          style: {
            fontWeight: "bold",
            color: "#000",
            fontSize: 12,
            top: "0px",
          },
        },
      };
      plotlines.push(pline);
    }

    var lastLine = {
      color: "#b3b3b3",
      width: 1,
      value: 11.5,
    };
    plotlines.push(lastLine);

    Highcharts.chart("column", {
      chart: {
        backgroundColor: "transparent",
        type: "column",
        events: {
          render: function () {
            const chart = this,
              startX = 0,
              startY = 30,
              endX = chart.chartWidth,
              endY = startY;

            if (!chart.customLine) {
              chart.customLine = chart.renderer
                .path(["M", startX, startY, "L", endX, endY])
                .attr({
                  "stroke-width": 1,
                  stroke: "black",
                })
                .add();
            } else {
              chart.customLine.attr({
                d: ["M", startX, startY, "L", endX, endY],
              });
            }
          },
        },
        marginTop: 60,
        spacingRight: 0,
        spacingLeft: 0,
        animation: false,
      },
      title: {
        text: "",
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        categories: category,
        labels: {
          enabled: false,
        },
        lineColor: "#b3b3b3",
        lineWidth: 1,
        plotLines: plotlines,

      },
      yAxis: {
        title: {
          enabled: false,
        },
        gridLineColor: "transparent",
        plotLines: [
          {
            color: "#000",
            width: 1,
            value: 0,
          },
        ],
        lineColor: "#b3b3b3",
        lineWidth: 1,
        labels: {
          style: {
            fontWeight: "bold",
            color: "#b3b3b3",
            fontSize: 12,
          },
        },
      },
      legend: {
        align: "right",
        verticalAlign: "top",
        y:-15,
        symbolHeight: 0,
        symbolWidth: 0,
        symbolRadius: 0,
        useHTML: true,
        labelFormatter: function () {
          return `<span style="display:flex; place-items: center; gap: 3px;">
                    <div style="background-color: ${this.color}; width:15px; height:15px; border-radius: 50%; float:left; margin-right:5px;"></div>
                    <span>${this.name}</span></span>`;
        },
      },
      plotOptions: {
        column: {
          borderColor: "#000000",
          dataLabels: {
            enabled: false,
          },
        },
      },
      series: [
        {
          name: "YTD",
          data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 3, 4],
          color: "#ff754b",
        },
        {
          name: "1 week",
          data: [2, -2, -3, 2, 1, 2, -2, -3, 2, 1, -1, 3],
          color: "#ffd600",
        },
      ],
    });
  }, []);

  return <div id="column" style={{ width: "100%" }} />;
};

export default ColumnChartComponent;
