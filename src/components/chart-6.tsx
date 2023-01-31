import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
// @ts-ignore
import china from "../geo/china.json";
const colors = { 青海省: "#BB31F7", 甘肃省: "#15B8FD", 四川省: "#06E1EE" };
export const Chart6 = () => {
  const divRef = useRef();
  useEffect(() => {
    const myChart = echarts.init(divRef.current);

    echarts.registerMap("CN", china);
    myChart.setOption({
      textStyle: {
        fontSize: px(12),
      },
      visualMap: {
        min: 20,
        max: 1000,
        bottom: px(200),
        itemHeight: px(180),
        text: ["1000w", "10w"],
        textStyle: { color: "white" },
        realtime: false,
        calculable: false,
        inRange: {
          color: ["#010d3d", "#633a00", "#8f0100"],
        },
      },
      series: [
        {
          type: "map",
          mapType: "CN", // 自定义扩展图表类型
          data: [
            { name: "新疆维吾尔自治区", value: 80 },
            { name: "西藏自治区", value: 60 },
            { name: "内蒙古自治区", value: 60 },
            { name: "青海省", value: 70 },
            { name: "四川省", value: 500 },
            { name: "黑龙江省", value: 100 },
            { name: "甘肃省", value: 60 },
            { name: "云南省", value: 70 },
            { name: "广西壮族自治区", value: 300 },
            { name: "湖南省", value: 500 },
            { name: "陕西省", value: 500 },
            { name: "广东省", value: 800 },
            { name: "吉林省", value: 200 },
            { name: "河北省", value: 300 },
            { name: "湖北省", value: 400 },
            { name: "贵州省", value: 300 },
            { name: "山东省", value: 600 },
            { name: "江西省", value: 200 },
            { name: "河南省", value: 300 },
            { name: "辽宁省", value: 180 },
            { name: "山西省", value: 200 },
            { name: "安徽省", value: 400 },
            { name: "福建省", value: 400 },
            { name: "浙江省", value: 600 },
            { name: "江苏省", value: 400 },
            { name: "重庆市", value: 600 },
            { name: "宁夏回族自治区", value: 120 },
            { name: "海南省", value: 100 },
            { name: "台湾省", value: 80 },
            { name: "北京市", value: 800 },
            { name: "天津市", value: 400 },
            { name: "上海市", value: 1000 },
            { name: "香港特别行政区", value: 600 },
            { name: "澳门特别行政区", value: 500 },
          ],
          label: { show: false, color: "white" },
          itemStyle: {
            areaColor: "#010D3D",
            borderColor: "#01A7F7",
            emphasis: {
              label: { color: "white" },
              areaColor: "#5470C6",
            },
          },
        },
      ],
    }),
      [];
  });

  return (
    <div className="bordered  wrapper chart6Wrapper">
      <h2>全国活跃用户分布</h2>
      <div ref={divRef} className="chart" />
      <div className="notes">此地图仅显示了中国的部分区域</div>
    </div>
  );
};
