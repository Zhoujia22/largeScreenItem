import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: "上海", day: 4, night: 1 },
    { name: "广州", day: 4, night: 1 },
    { name: "杭州", day: 4, night: 1 },
    { name: "哈尔滨", day: 4, night: 1 },
    { name: "北京", day: 4, night: 1 },
    { name: "西安", day: 4, night: 1 },
    { name: "乌鲁木齐", day: 4, night: 1 },
  ];
  const x = (data) => {
    myChart.current.setOption({
      grid: {
        x: px(60),
        y: px(30),
        x2: px(40),
        y2: px(50),
        containLabel: false,
      },
      textStyle: {
        fontSize: px(12),
        color: "#79839E",
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
        axisLine: {
          show: true,
          lineStyle: { color: "#083B70" },
        },
        splitLine: { show: false },
        axisLabel: { fontSize: px(12) },
      },
      yAxis: {
        axisTick: { show: false },
        type: "category",
        data: data.map((i) => i.name),
        axisLine: {
          show: true,
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
      series: [
        {
          type: "bar",
          data: data.map((i) => i.day),
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "#b92ae8" },
              { offset: 1, color: "#6773e7" },
            ]),
          },
        },
        {
          type: "bar",
          data: data.map((i) => i.night),
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "#2034f9" },
              { offset: 1, color: "#04a1ff" },
            ]),
          },
        },
      ],
    });
  };
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: "上海", day: Math.random(), night: Math.random() },
        { name: "广州", day: Math.random(), night: Math.random() },
        { name: "杭州", day: Math.random(), night: Math.random() },
        { name: "哈尔滨", day: Math.random(), night: Math.random() },
        { name: "北京", day: Math.random(), night: Math.random() },
        { name: "西安", day: Math.random(), night: Math.random() },
        { name: "乌鲁木齐", day: Math.random(), night: Math.random() },
      ];
      x(newData);
    }, 2000);
  });
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data), [];
  });

  return (
    <div className="bordered wrapper chart2Wrapper">
      <h2>24h订单数量</h2>
      <div ref={divRef} className="chart"></div>
      <div className="legend">
        <span className="daytime" />
        日间订单量
        <span className="nighttime" />
        夜间订单量
      </div>
    </div>
  );
};
