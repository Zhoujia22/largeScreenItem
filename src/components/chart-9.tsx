import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";

export const Chart9 = () => {
  const divRef = useRef();
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      title: { show: false },
      legend: { show: false },
      series: [
        {
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 60, name: "女性" },
            { value: 50, name: "男性" },
          ],
        },
      ],
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
    <div className="chart8Wrapper  wrapper">
      <div ref={divRef} className="chart" />
    </div>
  );
};
