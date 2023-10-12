import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const InsightLineChart = () => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    axios
      .get("https://demo-live-data.highcharts.com/aapl-c.json")
      .then((response) => {
        const data = response.data;

        setChartOptions({
          chart: {
            type: "line",
            backgroundColor: "#082a4d",
            borderColor: "#54697f",
            borderWidth: 1,
            margin: [70, 20, 40, 45],
          },
          rangeSelector: {
            selected: 1,
            buttonTheme: {
              display: "none", // 기존 기간 지정 버튼을 숨깁니다.
            },
            buttonSpacing: 10, // 버튼 간 간격 조정
            inputEnabled: false, // 직접 기간을 입력하는 입력 필드 비활성화
            labelStyle: {
              color: "#b3a5a1",
            },
            buttons: [
              {
                type: "month",
                count: 6,
                text: "6M",
              },
              {
                type: "year",
                count: 1,
                text: "1Y",
              },
              {
                type: "year",
                count: 3,
                text: "3Y",
              },
              {
                type: "year",
                count: 5,
                text: "5Y",
              },
              {
                type: "year",
                count: 10,
                text: "10Y",
              },
              {
                type: "ytd",
                text: "YTD",
              },
              {
                type: "all",
                text: "All",
              },
            ],
          },
          title: {
            enabled: false,
          },
          navigator: {
            enabled: false,
          },
          series: [
            {
              name: "AAPL Stock Price",
              data: data,
              tooltip: {
                valueDecimals: 2,
              },
              color: "#eed485",
              yAxis: 0,
            },
            {
              name: "AAPL Stock Price (Modified)",
              data: data.map((point) => [point[0], point[1] * 2]),
              tooltip: {
                valueDecimals: 2,
              },
              color: "#27757b",
              yAxis: 0,
            },
          ],
          xAxis: {
            type: "datetime",
            labels: {
              style: {
                color: "#54697f",
              },
            },
            lineColor: "#54697f",
          },
          yAxis: [
            {
              title: {
                text: null,
              },
              labels: {
                align: "left",
                x: -30,
                y: 5,
                format: "{value:.,0f}",
                style: {
                  color: "#54697f",
                },
              },
              showFirstLabel: false,
              opposite: false,
              gridLineWidth: 1,
              lineColor: "#54697f",
            },
            {
              visible: false,
            },
          ],
          legend: {
            align: "right",
            verticalAlign: "top",
            borderWidth: 0,
            itemStyle: {
              color: "#54697f",
            },
            backgroundColor: "#54697f",
            symbolWidth: 30,
            symbolHeight: 3,
            symbolPadding: 5,
            symbolRadius: 0,
          },
          tooltip: {
            shared: true,
            crosshairs: true,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            style: {
              color: "white",
            },
          },
          plotOptions: {
            series: {
              cursor: "pointer",
              className: "popup-on-click",
              marker: {
                lineWidth: 1,
              },
            },
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (chartOptions) {
      Highcharts.stockChart("container", chartOptions);

      const rangeSelectorGroup = document.querySelector(
        ".highcharts-range-selector-group"
      );
      if (rangeSelectorGroup) {
        rangeSelectorGroup.style.transform = "translate(-35px, 5px)";
      }
      const chartScrollbar = document.querySelector(".highcharts-scrollbar");
      chartScrollbar.style = "display:none";
    }
  }, [chartOptions]);

  return (
    <div
      id="container"
      style={{
        backgroundColor: "#082a4d",
        borderColor: "#54697f",
        borderWidth: 1,
      }}
    >
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />

    </div>
  );
};

export default InsightLineChart;
