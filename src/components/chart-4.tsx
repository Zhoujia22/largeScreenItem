import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart4 = () => {
  const divRef = useRef();
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      grid: {
        x: px(55),
        y: px(40),
        x2: px(40),
        y2: px(50),
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { fontSize: px(12) },
        splitLine: { show: true, lineStyle: { color: "#073E78" } },
      },
      textStyle: {
        color: "#79839E",
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
          data: [
            0.15, 0.13, 0.11, 0.13, 0.14, 0.15, 0.16, 0.18, 0.21, 0.19, 0.17,
            0.16, 0.15,
          ],
          type: "line",
          symbol: "circle",
          symbolSize: px(10),
          lineStyle: { width: px(2) },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#414a9f",
              },
              {
                offset: 1,
                color: "#1b1d52",
              },
            ]),
          },
        },
      ],
    }),
      [];
  });

  return (
    <div className="bordered chart4Wrapper">
      <h2>各时段订单增长率</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
