import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart9 = () => {
  const divRef = useRef();
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      color: "#1ba784",
      grid: {
        x: px(45),
        y: px(20),
        x2: px(20),
        y2: px(40),
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [18, 28, 38, 48, 58, 68, 78],
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
            0.20, 0.28, 0.35,
            0.30, 0.20, 0.12,
            0.08, 0.06
          ],
          type: "line",
          symbol: "circle",
          symbolSize: px(10),
          lineStyle: { width: px(2) },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#1ba784",
              },
              {
                offset: 1,
                color: "#1B1D52",
              },
            ]),
          },
        },
      ],
    }),
      [];
  });

  return (
    <div className=" wrapper chart9Wrapper">
      <h3>用户年龄趋势图</h3>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
