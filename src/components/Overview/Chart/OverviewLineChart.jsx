import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";

const OverviewLineChart = ({ names, onCheckboxClick, selectedColor }) => {
  const [chartOptions, setChartOptions] = useState(null);
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  useEffect(() => {
    axios
      .get("https://demo-live-data.highcharts.com/aapl-c.json")
      .then((response) => {
        const data = response.data;
        const newSeries = names.map((name, index) => {
          const color = selectedColor[index]; // Use selected color or default

          return {
            name: name,
            data:
              data === null
                ? null // Display a message when data is null
                : data.map((point) => [point[0], point[1] * index]),
            // data.map((point) => [point[0], point[1] * index + 1]),
            tooltip: {
              valueDecimals: 2,
            },
            color: color, // Use the color from the selectedColor prop
            yAxis: 0,
          };
        });

        const isMultipleOfThree = names.length % 3 === 0;
        const extraMargin = isMultipleOfThree
          ? 60
          : names.length % 3 === 1
          ? 50
          : 40;
        const extraHeight = isMultipleOfThree
          ? 60
          : names.length % 3 === 1
          ? 50
          : 40;
        setChartOptions({
          credits: { enabled: false },
          chart: {
            type: "line",
            backgroundColor: "#082a4d",
            borderColor: "#54697f",
            borderWidth: 1,
            height: 370 + extraHeight * (names.length / 3),
            margin: [100 + extraMargin * (names.length / 3), 20, 40, 45],
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
            inputEnabled: false,
            inputDateFormat: "%Y-%m-%d",
            inputEditDateFormat: "%Y-%m-%d",
            inputStyle: {
              color: "#b3a5a1",
            },
            inputBoxBorderColor: "#b3a5a1", // "#54697f",
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
          credit: {
            enabled: false,
          },
          navigator: {
            enabled: false,
          },
          series: newSeries,
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
            shared: false,
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
  }, [names, selectedColor]);
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
        rangeSelectorGroup.style.transform = "translate(-70px, 25px)";
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

      <Button
        sx={{
          fontSize: "0.78rem",
          py: 0.2,
          px: 1.4,
          textTransform: "capitalize",
          border: "0.5px solid #d6e8f0",
          borderRadius: 4,
          color: "#d6e8f0",
          backgroundColor: "#082a4d",
          position: "absolute",
          zIndex: 3000,
          top: 31,
          right: 20,
        }}
        id="enableInputButton"
        onClick
      >
        Compare
      </Button>
      {names.length === 0 && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 3000,
            top: "calc(30% - 20px)",
            right: "calc(50% - 125px)",
            textAlign: "center",
            backgroundColor: "transparent",
            color: "#d6e8f0",
          }}
        >
          선택된 종목이 없습니다.
          <br />
          테이블에서 종목을 선택해주세요.
        </Box>
      )}

      {/* Chart Label Boxes */}
      <Box
        sx={{
          position: "absolute",
          width: "calc(100% - 30px)",
          // Remove overflowX property
          // overflowX: "clip",

          display: "grid", // Use grid instead of flex
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", // Adjust the column size as needed
          gap: "8px", // Adjust the gap between items as needed
          zIndex: 3000,
          top: 72,
          left: 15,
        }}
      >
        {names.map((name, index) => (
          // Chart Label Box
          <Box
            key={index}
            sx={{
              backgroundColor: "rgba(84, 105, 127,  0.33)",
              color: "#b3a5a1",
              position: "relative",
              width: "auto",
              flexWrap: "wrap",
              whiteSpace: "wrap",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Box
              sx={{
                position: "absolute",

                left: 0,
                top: 0,
                width: 2,
                height: "100%",
                backgroundColor: selectedColor[index],
                // backgroundColor:
                //   index % 3 === 0
                //     ? "#27757b"
                //     : index % 3 === 1
                //     ? "#eed485"
                //     : "#fd5b26",
              }}
            ></Box>
            <Typography sx={{ px: 1, mr: 2, fontSize: 12 }}>{name}</Typography>
            <Button
              sx={{
                position: "absolute",

                right: 0,
                top: 0,
                color: "#b3a5a1",
                px: 0.5,
                py: 0,
                minWidth: 20,
              }}
              onDelete={() => handleDelete(index)}
            >
              ×
            </Button>
          </Box>
        ))}
      </Box>

      <div
        id="container"
        style={{
          backgroundColor: "#082a4d",
          borderColor: "#54697f",
          borderWidth: 1,
          position: "relative",
        }}
      >
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
};

export default OverviewLineChart;
