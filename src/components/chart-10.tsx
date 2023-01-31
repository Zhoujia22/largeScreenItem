import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart10 = () => {
  const divRef = useRef();
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      xAxis: {
        type: "category",
        axisTick: { show: false },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split("");
              array.splice(2, 0, "\n");
              return array.join("");
            } else {
              return val;
            }
          },
        },
        data: ["非常满意", "满意", "一般", "较差", "极差"],
      },
      yAxis: {
        splitLine: { show: false },
        axisLabel: {
          fontSize: px(12),
        },
      },
      grid: {
        x: px(55),
        y: px(30),
        x2: px(40),
        y2: px(60),
      },
      series: [
        {
          data: [20, 60,120, 40, 10],
          type: "bar",
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#ff7101",
            },
            {
              offset: 1,
              color: "#11a19d",
            },
          ]),
        },
      ],
    }),
      [];
  });

  return <div ref={divRef} className="chart" />;
};
