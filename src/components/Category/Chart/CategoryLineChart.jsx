import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box } from "@mui/material";

const options = {
  chart: {
    type: "area",
    backgroundColor: "transparent",
  },
  title: {
    useHTML: true, // HTML 태그 사용 활성화
    text:
      '<span style="color: #202225; font-size: 21px;">46.11</span>' +
      '<span style="color: #202225; font-weight:normal; font-size: 16px;"> USD</span>',
    align: "right",
  },
  subtitle: {
    text: "+5.59%",
    align: "right",
    style: {
      color: "#fd5b26", // 서브타이틀 텍스트 색상을 #fd5b26으로 설정
      fontSize: "16px", // 서브타이틀 텍스트 크기를 16px로 설정
    },
  },
  xAxis: {
    visible: false,
  },
  yAxis: {
    visible: false,
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    pointFormat:
      "{series.name} <b>{point.y:,.0f}</b><br/>warheads in {point.x}",
  },
  plotOptions: {
    area: {
      lineColor: "#fd3f01", // 전체 라인 색상을 #fd3f01로 지정
      fillOpacity: 1,
      lineWidth: 1.5,
      marker: {
        enabled: false,
        fillColor: "#fd3f01", // 마커 fillColor를 #fd3f01로 지정

        radius: 3,
        states: {
          hover: {
            enabled: true,
          },
          halo: {
            fillOpacity: 0,
            fillColor: "#fd3f01",
          },
        },
      },
    },
  },
  series: [
    {
      name: "Solar Employment",

      data: [
        43934, 41000, 52478, 42300, 60000, 45000, 75000, 67800, 75000, 98000,
        110000, 78900, 110000, 78000, 120000,
      ],
      fillColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0.01, "rgba(253, 91, 38, 1)"],
          [0.03, "rgba(253, 91, 38, 0.6)"],
          [0.05, "rgba(253, 91, 38, 0.4)"],
          [0.25, "rgba(253, 91, 38, 0.2)"],
          [0.5, "rgba(253, 91, 38, 0)"],
          [1, "rgba(253, 91, 38, 0)"],
        ],
      },
      marker: {
        enabled: false,
      },
    },
  ],
  credits: {
    enabled: false, // 크레딧을 비활성화합니다.
  },
};

function CategoryLineChart() {
  return (
    <Box sx={{ width: 750 }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
}

export default CategoryLineChart;
