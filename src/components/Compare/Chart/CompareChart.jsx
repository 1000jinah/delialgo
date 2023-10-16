import React, { useEffect } from "react";
import Highcharts from "highcharts";

const CompareChart = () => {
  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        backgroundColor: "#fff9f5", // Set chart background color
        margin: [70, 20, 45, 65],
        type: "datetime",
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
          align: "left",
          x: -35,
          y: 5,
          format: "{value:.,0f}",
          style: {
            color: "#b3a5a1",
          },
        },
      },
      xAxis: {
        type: "datetime",

        labels: {
          style: {
            color: "#b3a5a1",
            fontSize: 12,
          },
          x: 22, // x 값을 조절하여 오른쪽으로 이동
          y: 18,
          formatter: function () {
            const date = new Date(this.value);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let monthWord = new Intl.DateTimeFormat("en", {
              month: "long",
            }).format(new Date(year, month - 1, day)); // monthWord 값 변경

            // 각 월별 일수를 배열로 정의
            const daysInMonth = [
              31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
            ];

            // day를 x축 label index에 따라 순차적으로 더하기
            const labelIndex = this.axis.tickPositions.indexOf(this.pos);
            day += labelIndex * 7;

            while (day > daysInMonth[month - 1]) {
              day -= daysInMonth[month - 1];
              month++;

              if (month > 12) {
                month = 1;
                year++;
              }

              monthWord = new Intl.DateTimeFormat("en", {
                month: "long",
              }).format(new Date(year, month - 1, day)); // monthWord 값 재설정
            }

            date.setFullYear(year);
            date.setMonth(month - 1);
            date.setDate(day);

            return `${month}/${day} <br/> ${monthWord}`;

          },
        },
        lineColor: "#fdeae4",
        tickColor: "#fdeae4",
      },
      legend: {
        align: "left",
        verticalAlign: "top",
        x: 5,
        y: -5,
        margin: 25,
        symbolHeight: 0,
        symbolWidth: 0,
        symbolRadius: 0,
        useHTML: true,
        labelFormatter: function () {
          return `<span style="display:flex; place-items: center; gap: 3px;">
                    <div style="background-color: ${this.color}; width:3px; height:15px; float:left; margin-right:5px;"></div>
                    <span>${this.name}</span></span>`;
        },
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2010,
        },
      },
      series: [
        {
          name: "Installation & Developers",
          data: [
            433, 485, 656, 818, 521, 343, 715, 854, 455, 654, 360, 433, 485,
            656, 818, 521, 343, 715, 854, 455, 654, 360, 433, 485, 656, 818,
            521, 343, 715, 854, 455, 654, 360, 433, 485, 656, 818, 521, 343,
            715, 854, 455, 654, 360, 433, 485, 656, 818, 521, 343, 715, 854,
            455, 654, 360, 433, 485, 656, 818, 521, 343, 715, 854, 455, 654,
            360,
          ],
          type: "line", // Specify line chart type
          color: "#eea45f", // Set line color for this series
          marker: {
            enabled: false,
            symbol: "circle",
            hover: {
              enabled: true,

              radius: 4,
            },
          },
        },
        {
          name: "Manufacturing",
          data: [
            249, 379, 274, 500, 390, 382, 811, 685, 326, 324, 705, 249, 379,
            274, 500, 390, 382, 811, 685, 326, 324, 705, 249, 379, 274, 500,
            390, 382, 811, 685, 326, 324, 705, 249, 379, 274, 500, 390, 382,
            811, 685, 326, 324, 705, 249, 379, 274, 500, 390, 382, 811, 685,
            326, 324, 705, 249, 379, 274, 500, 390, 382, 811, 685, 326, 324,
            705,
          ],
          type: "line", // Specify line chart type
          color: "#94826b", // Set line color for this series
          marker: {
            enabled: false,
            symbol: "circle",
            hover: {
              enabled: true,
              radius: 4,
            },
          },
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
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
