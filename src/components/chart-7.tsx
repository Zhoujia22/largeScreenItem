import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart7 = () => {
  const divRef = useRef();
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      color: ["#8D70F8", "#33A4FA"],
      title: { show: false },
      legend: { show: false },
      series: [
        {
          type: "pie",
          radius: ["65%", "90%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "inside",
            textStyle: { color: "white", fontSize: px(18) },
            formatter: "{d}%",
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            borderColor: "#0F113A",
            borderWidth: px(1),
          },
          data: [
            { value: 60, name: "女性" },
            { value: 40, name: "男性" },
          ],
        },
      ],
    }),
      [];
  });

  return (
    <div className="chart7Wrapper  wrapper">
      <div className="chartAndText">
        <div ref={divRef} className="chart" />
        <div className="text">性别</div>
      </div>
      <div className="legend">
        <span className="male" />男
        <span className="female" />女
      </div>
    </div>
  );
};
