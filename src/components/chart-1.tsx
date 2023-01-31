import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart1 = () => {
  const divRef = useRef();
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      title: { show: false },
      legend: { show: false },
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
        data: ["成都", "乌鲁木齐", "广州", "南京", "西安", "上海", "北京"],
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
          data: [60, 40, 80, 70, 50, 100, 90],
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
    }),
      [];
  });

  return (
    <div className="bordered wrapper chart1Wrapper">
      <h2>主要城市订单统计</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
