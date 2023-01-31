import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart12 = () => {
  const divRef = useRef();
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
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      grid: { x: 0, x2: 0, y: 0, y2: 0, containLabel: true },
      legend: {
        orient: "vertical",
        left: "left",
        top: "center",
        textStyle: { color: "white" },
        itemWidth: px(10),
        itemHeight: px(10),
        formatter(name) {
          const value = data.find((i) => i.name === name)?.value * 100 + "%";
          return name + " " + value;
        },
      },
      textStyle: {
        fontSize: px(12),
        color: "#79839E",
      },
      series: [
        {
          center: ["60%", "50%"],
          type: "pie",
          radius: "80%",
          label: { show: false },
          labelLine: { show: false },
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    }),
      [];
  });

  return <div ref={divRef} className="chart" />;
};
