import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart3 = () => {
  const divRef = useRef();
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      legend: {
        bottom: px(10),
        textStyle: { color: "white", fontSize: px(12) },
        itemWidth: px(30),
        itemHeight: px(16),
      },
      textStyle: {
        color: "#79839E",
      },
      grid: {
        x: px(20),
        x2: px(30),
        y: px(20),
        y2: px(70),
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: true,
        data: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
        splitLine: { show: true, lineStyle: { color: "#073E78" } },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { interval: 1, fontSize: px(12) },
      },
      yAxis: {
        type: "value",
        splitLine: { lineStyle: { color: "#073E78" } },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            return val * 100 + "%";
          },
        },
      },
      series: [
        {
          name: "北京",
          type: "line",
          data: [0.01, 0.03, 0.02, 0.04, 0.05, 0.03, 0.06, 0.13],
        },
        {
          name: "上海",
          type: "line",
          data: [0.01, 0.02, 0.09, 0.03, 0.03, 0.06, 0.04, 0.1],
        },
        {
          name: "乌鲁木齐",
          type: "line",
          data: [0.01, 0.04, 0.01, 0.04, 0.01, 0.04, 0.02, 0.16],
        },
        {
          name: "西安",
          type: "line",
          data: [0.01, 0.09, 0.03, 0.06, 0.07, 0.09, 0.06, 0.14],
        },
        {
          name: "成都",
          type: "line",
          data: [0.01, 0.06, 0.07, 0.08, 0.06, 0.07, 0.07, 0.16],
        },
      ].map((obj) => ({
        ...obj,
        symbol: "circle",
        symbolSize: px(8),
        lineStyle: { width: px(2) },
      })),
    }),
      [];
  });

  return (
    <div className="bordered wrapper chart3Wrapper">
      <h2>城市订单增长率</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
