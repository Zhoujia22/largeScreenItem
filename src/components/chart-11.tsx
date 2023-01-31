import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart11 = () => {
  const divRef = useRef();
  const colors = ["#F46064", "#F38E1C", "#1CDB7C", "#8D70F8", "#33A4FA"];
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      color: colors,
      series: [
        {
          startAngle: -20,
          type: "pie",
          radius: ["25%", "90%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "outside",
            textStyle: { color: "white", fontSize: px(20) },
            distanceToLabelLine: 0,
            formatter(options) {
              return options.value * 100 + "%";
            },
          },
          labelLine: { show: true, length: 0 },
          roseType: "area",
          itemStyle: {
            shadowBlur: px(200),
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          data: [
            { value:  0.18, name: "非常满意" },
            { value:  0.20, name: "满意" },
            { value: 0.30, name: "一般" },
            { value:  0.24, name: "较差" },
            { value: 0.08, name: "极差" },
          ],
        },
      ],
    }),
      [];
  });

  return (
    <div className="wrapper chart11Wrapper">
      <div className="chartAndText"></div>
      <div ref={divRef} className="chart" />
      <div className="legend">
        <span style={{ background: colors[0] }} />
        非常满意
        <span style={{ background: colors[1] }} />
        满意
        <span style={{ background: colors[2] }} />
        一般
        <span style={{ background: colors[3] }} />
        较差
        <span style={{ background: colors[4] }} />
        极差
      </div>
    </div>
  );
};
