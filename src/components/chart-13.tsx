import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart13 = () => {
  const divRef = useRef();
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    const data = [
      { value: 0.08, name: "5元以下" },
      { value: 0.06, name: "5-10元" },
      { value: 0.11, name: "11-20元" },
      { value: 0.09, name: "21-30元" },
      { value: 0.12, name: "31-40元" },
      { value: 0.1, name: "41-50元" },
      { value: 0.08, name: "51-100元" },
      { value: 0.08, name: "101-999元" },
      { value: 0.04, name: "1000元以上" },
    ];
    myChart.setOption({
      xAxis: {
        data: data.map((i) => i.name),
        axisTick: { show: false },
        axisLine: {
          lineStyle: { color: "#083B70" },
        },
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
      },
      grid: {
        x: px(50),
        y: px(35),
        x2: px(30),
        y2: px(60),
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: { color: "#083B70" },
        },
        axisLabel: {
          fontSize: px(12),
          formatter(value) {
            return (value * 100).toFixed(0) + "%";
          },
        },
      },
      textStyle: {
        fontSize: px(12),
        color: "#79839E",
      },
      series: [
        {
          type: "bar",
          data: data.map((i) => i.value),
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#0A97FB",
            },
            {
              offset: 1,
              color: "#1E34FA",
            },
          ]),
        },
      ],
    }),
      [];
  });

  return <div ref={divRef} className="chart" />;
};
