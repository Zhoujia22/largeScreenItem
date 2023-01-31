import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart8 = () => {
  const colors = ["#856BED", "#F46064", "#F38E1C", "#1CDB7C", "#33A4FA"];
  const divRef = useRef();
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      color: colors,
      title: { show: false },
      legend: { show: false },
      series: [
        {
          type: "pie",
          radius: ["70%", "90%"],
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
            { value: 7, name: "10-20" },
            { value: 10, name: "20-30" },
            { value: 23, name: "30-40" },
            { value: 28, name: "40-50" },
            { value: 32, name: "50-60" },
          ],
        },
      ],
    }),
      [];
  });

  return (
    <div className="chart8Wrapper  wrapper">
      <div className="chartAndText">
        <div ref={divRef} className="chart" />
        <div className="text">年龄段</div>
      </div>
      <div className="legend">
        <span style={{ background: colors[0] }} />
        10-20
        <span style={{ background: colors[1] }} />
        20-30
        <span style={{ background: colors[2] }} />
        30-40
        <span style={{ background: colors[3] }} />
        40-50
        <span style={{ background: colors[4] }} />
        50-60
      </div>
    </div>
  );
};
