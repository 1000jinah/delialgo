import React, { useEffect } from "react";
import Highcharts from "highcharts";


const InsightColumnChart = ({id}) => {
  useEffect(() => {
    Highcharts.chart(id,  {
      credits: {
        enabled: false,
      },
      chart: {
        type: "column",
        width: 200,
        height: 200,
        margin: [0, 0, 10, 0],
        backgroundColor: "transparent",
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      xAxis: {
        title: {
          text: "",
        },
        labels: {
          enabled: false,
        },
        lineColor: "transparent", //하단 바닥부분 기준선 삭제
        tickWidth: 0, //기준선 삭제
        gridLineWidth: 0, //기준선 삭제
      },

      yAxis: {
        min: 0,
        max: 10,
        title: {
          text: null,
        },
        labels: {
          enabled: false,
        },
        lineColor: "transparent",
        tickWidth: 0,
        gridLineWidth: 0,
      },

      legend: {
        enabled: false,
      },

      plotOptions: {
        series: {
          clip: false,
          borderColor: "transparent",
          dataLabels: {
            enabled: false,
            inside: false,
            useHTML: true,
         
          },
          states: {
            hover: {
              enabled: false,
            },
          },
        },
      },

      tooltip: {
        enabled: false,
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:
          '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>',
      },
      series: [
        {
          color: "#eea45f", // 색상 지정
          name: "Strategic View",
          data: [
            {
              name: "1",
              y: 1,
              color: "rgba(238, 164, 95,0.2)",
            },
            {
              name: "2",
              y: 2,
              color: '#eea45f',
            },
            {
              name: "3",
              y: 1,
              color: "rgba(46, 152, 117,0.2)",
            },
            {
              name: "4",
              y: 1,
              color: "rgba(46, 152, 117,0.2)",
            },
          ],
        },
      ],
    });
  }, [id]); // 컴포넌트가 마운트될 때만 실행되도록 함

  return (
    <div>
      <div id={id}></div>
    </div>
  );
};

export default InsightColumnChart;
