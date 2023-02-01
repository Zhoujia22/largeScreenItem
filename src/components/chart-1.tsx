import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart1 = () => {
  const divRef = useRef();
  const myChart = useRef(null);
  const data = [
    { name: "成都", count: 60 },
    { name: "乌鲁木齐", count: 40 },
    { name: "广州", count: 80 },
    { name: "南京", count: 120 },
    { name: "西安", count: 70 },
    { name: "上海", count: 60 },
    { name: "北京", count: 20 },
  ];
  const x = (data) => {
    myChart.current.setOption({
      xAxis: {
        type: "category",
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
        data: data.map((i) => i.name),
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: { color: "#083B70" },
        },
        axisLabel: {
          fontSize: px(12),
        },
      },
      series: [
        {
          data: data.map((i) => i.count),
          type: "bar",
        },
      ],
      textStyle: {
        fontSize: px(12),
        color: "#79839E",
      },
      grid: {
        x: px(55),
        y: px(40),
        x2: px(40),
        y2: px(50),
      },
    });
  };
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: "成都", count: Math.random() },
        { name: "乌鲁木齐", count: Math.random() },
        { name: "广州", count: Math.random() },
        { name: "南京", count: Math.random() },
        { name: "西安", count: Math.random() },
        { name: "上海", count: Math.random() },
        { name: "北京", count: Math.random() },
      ];
      x(newData);
    }, 2000);
  });
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data), [];
  });

  return (
    <div className="bordered wrapper chart1Wrapper">
      <h2>主要城市订单统计</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
