import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Button, Divider } from "@mui/material";

const InsightLineChart = () => {
  const [chartOptions, setChartOptions] = useState(null);
  const [inputEnabled, setInputEnabled] = useState(false);
  const enableInput = () => {
    setInputEnabled((inputEnabled) => !inputEnabled);
  };

  // const enableInput = () => {
  //   setInputEnabled((prevInputEnabled) => !prevInputEnabled);
  //   setChartOptions((prevOptions) => {
  //     const newOptions = { ...prevOptions };
  //     newOptions.rangeSelector.inputEnabled = true;
  //     return newOptions;
  //   });
  // };
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
            title: {
              enabled: true,
            },
            selected: 1,
            buttonTheme: {
              // styles for the buttons
              width: 50, // 버튼 너비를 늘립니다
              fill: "#082a4d",
              stroke: "#b3a5a1",
              "stroke-width": 1,
              r: 0,
              style: {
                color: "#b3a5a1",
                fontWeight: "bold",
              },
              states: {
                hover: {
                  color: "inherit",
                  fill: "inherit",
                },
                select: {
                  fill: "#b3a5a1",
                  style: {
                    color: "#082a4d",
                  },
                },
              },
            },
            buttonSpacing: 1, // 버튼 간격을 0으로 설정
            inputEnabled: inputEnabled,
            inputDateFormat: "%Y-%m-%d",
            inputEditDateFormat: "%Y-%m-%d",
            inputStyle: {
              color: "#b3a5a1",
            },
            inputBoxBorderColor: "#b3a5a1",// "#54697f",
            inputBoxWidth: 120,
            inputBoxHeight: 18,
            inputDateParser: function (value) {
              const date = value.split("-");
              return Date.UTC(
                parseInt(date[0], 10),
                parseInt(date[1], 10) - 1,
                parseInt(date[2], 10)
              );
            },

            buttons: [
              {
                type: "month",
                count: 6,
                text: "6Month",
              },
              {
                type: "year",
                count: 1,
                text: "1Year",
              },
              {
                type: "year",
                count: 3,
                text: "3Year",
                // events: {
                //   click: function () {
                //     var chart = this,
                //         end = Date.now(), // 현재 날짜
                //         start = end - 3 * 365 * 24 * 3600 * 1000; // 3년 전 날짜

                //     // x축의 범위를 변경하여 3년 기간을 표시
                //     chart.xAxis[0].setExtremes(start, end);
                //   }
                // }
              },
              {
                type: "year",
                count: 5,
                text: "5Year",
                // events: {
                //   click: function () {
                //     var chart = this,
                //         end = Date.now(), // 현재 날짜
                //         start = end - 5 * 365 * 24 * 3600 * 1000; // 3년 전 날짜

                //     // x축의 범위를 변경하여 3년 기간을 표시
                //     chart.xAxis[0].setExtremes(start, end);
                //   }
                // }
              },
              {
                type: "year",
                count: 10,
                text: "10Year",
                // events: {
                //   click: function () {
                //     var chart = this,
                //         end = Date.now(), // 현재 날짜
                //         start = end - 10 * 365 * 24 * 3600 * 1000; // 3년 전 날짜

                //     // x축의 범위를 변경하여 3년 기간을 표시
                //     chart.xAxis[0].setExtremes(start, end);
                //   }
                // }
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
          credit:{
            enabled:false,
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
              showLastLabel: true,
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
  }, [inputEnabled]);

  useEffect(() => {
    if (chartOptions) {
      Highcharts.stockChart("container", chartOptions);

      const gridLines = document.querySelectorAll(".highcharts-grid-line");
      gridLines.forEach((gridLine) => {
        gridLine.style.stroke = "#54697f";
      });

      const rangeSelectorButtonGroup = document.querySelector(
        ".highcharts-range-selector-buttons .highcharts-label"
      );
      const rangeSelectorGroup = document.querySelector(
        ".highcharts-range-selector-group"
      );

      const rangeSelectorInput = document.querySelector(
        ".highcharts-input-group"
      );
      if (rangeSelectorInput) {
        rangeSelectorInput.style.transform = "translate(620px, 10px)";

      }
      if (rangeSelectorGroup) {
        rangeSelectorGroup.style.transform = "translate(-60px, 25px)";
      }
      if (rangeSelectorButtonGroup) {
        rangeSelectorButtonGroup.style.display = "none";
      }

      const chartScrollbar = document.querySelector(".highcharts-scrollbar");
      if (chartScrollbar) {
        chartScrollbar.style.display = "none";
      }
    }
  }, [chartOptions]);

  return (
    <div style={{ position: "relative" }}>
      {/* 아이콘 추가하고 클릭할 때 마다 reload 되지 않도록 해줘 */}
      <Divider
        orientation="vertical"
        sx={{
          position: "absolute",
          backgroundColor: "#b3a5a1",
          height: 20,
          zIndex: 3000,
          top: 37,
          left: 430,
        }}
      />
      <Button
        sx={{
          fontSize: "0.75rem",
          p: 0,
          textTransform: "capitalize",
          position: "absolute",
          border: "none",
          color: "#b3a5a1",
          backgroundColor: "#082a4d",
          zIndex: 3000,
          top: 37,
          left: 450,
   
        }}
        startIcon={
          <CalendarTodayIcon sx={{ width: 15, height: 15, mb: 0.2 }} />
        }
        id="enableInputButton"
        onClick={enableInput}
      >
        Date Range
      </Button>
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
    </div>
  );
};

export default InsightLineChart;
