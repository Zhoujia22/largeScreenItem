import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart2 = () => {
  const divRef = useRef();
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
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
        data: [
          "上海",
          "广州",
          "杭州",
          "哈尔滨",
          "北京",
          "西安",
          "乌鲁木齐",
          "成都",
        ],
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
          data: [4, 1, 5, 6, 7, 1, 2, 3],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "#b92ae8" },
              { offset: 1, color: "#6773e7" },
            ]),
          },
        },
        {
          type: "bar",
          data: [1, 5, 6, 4, 8, 6, 1, 7],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "#2034f9" },
              { offset: 1, color: "#04a1ff" },
            ]),
          },
        },
      ],
    }),
      [];
  });

  return (
    <div className="bordered chart2Wrapper">
      <h2>全天订单数量</h2>
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
