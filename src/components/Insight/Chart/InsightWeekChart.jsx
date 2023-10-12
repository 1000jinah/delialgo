import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const InsightWeekChart = () => {
  useEffect(() => {
    let year = 20; // Initialize with 20 for '20
    const quarterLabels = ["Jan", "May", "Sep"];
    let currentQuarter = 0; // Initialize the quarter count
    Highcharts.chart("lineChart", {
      chart: {
        backgroundColor: "transparent",

        events: {
          render: function () {
            const chart = this,
              startX = 0,
              startY = 45,
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
        animation: false,
        marginTop: 80,
        spacingRight: 0,
        spacingLeft: 0,
      },
      exporting: {
        enabled: false,
      },
      title: {
        text: "",
      },
      credits: {
        text: 'Source: S&#38;P Global, J.P. Morgan Asset Management.',
        href: '',
        position: {
          verticalAlign: 'bottom',
          align: 'right',
          x: 0,
          y: 0,
        }
      },
      xAxis: {
        type: "datetime",
        tickColor: "transparent",
        lineColor: "#ccbcb8",
        labels: {
          formatter: function () {
            const date = new Date(this.value);
            const month = date.getMonth();
            const currentMonth = quarterLabels[currentQuarter];
            let label = `${currentMonth}'${year.toString().padStart(2, "0")}`;

            if (month % 3 === 0) {
              currentQuarter = (currentQuarter + 1) % 3;
            }

            return label;
          },
          style: {
            fontSize: 14,
            color: "#000",
          },
        },
      },
      scrollbar: {
        enabled: false,
      },
      yAxis: {
        labels: {
          format: "{value:,.0f}",
          style: {
            fontSize: 14,
            color: "#b3a5a1",
          },
        },
        title: {
          text: "",
        },
      },
      tooltip: {
        shared: true,
        crosshairs: true,
        borderColor: "#000",
        backgroundColor: "#fff",
        xDateFormat: "%b %e, %Y",
        useHTML: true,
        headerFormat:
          '<table style="border:0px;"><tr><td colspan="2" style="border:0px; height:20px;"><span style="color:#808080; font-size:14px;">{point.key}</span></td></tr>',
        pointFormat:
          '<tr><td style="border:0px; height:20px;"><div style="width:11px; height:11px; background-color:{series.color}; border:1px solid #000; border-radius:50%; float:left; margin-top:8px;"></div>' +
          '<span style="font-size:18px; color:{series.color}; padding-left:10px;">{series.name}</span></td>' +
          '<td style="border:0px; height:20px;"><span style="font-size:18px; font-weight:bold; padding-left:100px;">${point.y}</span></td></tr>',
        footerFormat: "</table>",
        valueDecimals: 2,
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false,
            fillColor: "#fff",
            lineWidth: 2,
          },
        },
      },
      legend: {
        layout: "horizontal",
        align: "right",
        verticalAlign: "top",
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
      series: [
        {
          name: "Manufacturing",
          data: [
            42, 33, 55, 76, 78, 72, 60, 62, 69, 72, 40, 55, 65, 32, 54, 36, 32,
            76, 74, 70, 61, 71, 78, 72, 60, 62, 69, 72, 61, 55, 65, 55, 45, 35,
            43, 54, 75, 74, 70, 61, 71, 78, 72, 60, 62, 69, 72, 61, 55, 65, 55,
            45, 35, 43, 54, 75, 74, 70, 61, 71, 78, 72, 60, 62, 69, 72, 61, 55,
            65, 55, 45, 35, 43, 54, 75, 74,
          ],
          color: "#ff754b",
          lineWidth: 2,
          marker: {
            symbol: "circle",
            radius: 2,
          },
        },
        {
          name: "Services",
          data: [
            32, 23, 45, 66, 68, 62, 50, 52, 59, 62, 30, 45, 55, 22, 44, 26, 22,
            65, 64, 60, 51, 61, 68, 62, 50, 52, 59, 62, 51, 45, 55, 45, 35, 25,
            33, 44, 65, 64, 60, 51, 61, 68, 62, 50, 52, 59, 62, 51, 45, 55, 45,
            35, 25, 33, 44, 65, 64, 60, 51, 61, 68, 62, 50, 52, 59, 62, 51, 45,
            55, 45, 35, 25, 33, 44, 65, 64,
          ],
          color: "#ffd600",
          lineWidth: 2,
          marker: {
            symbol: "circle",
            radius: 2,
          },
        },
      ],
    });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return <div id="lineChart" style={{ height: "400px" }}></div>;
};

export default InsightWeekChart;
