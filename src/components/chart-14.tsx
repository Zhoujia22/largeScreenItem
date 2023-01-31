import React from "react";

export const Chart14 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>类型</th>
          <th>单数</th>
          <th>总计</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={4}>撒漏、异物等质量问题</td>
          <td>餐品撒漏</td>
          <td>10</td>
          <td rowSpan={4}>80</td>
        </tr>
        <tr>
          <td>餐品内有异物</td>
          <td>20</td>
        </tr>
        <tr>
          <td>变质</td>
          <td>20</td>
        </tr>
        <tr>
          <td>食用后引起身体不适</td>
          <td>30</td>
        </tr>
        <tr>
          <td rowSpan={2}>数量问题</td>
          <td>错送</td>
          <td>22</td>
          <td rowSpan={2}>44</td>
        </tr>
        <tr>
          <td>少送</td>
          <td>22</td>
        </tr>
        <tr>
          <td rowSpan={3}>服务问题</td>
          <td>骑手衣冠不整</td>
          <td>40</td>
          <td rowSpan={3}>107</td>
        </tr>
        <tr>
          <td>骑手态度差</td>
          <td>22</td>
        </tr>
        <tr>
          <td>店家态度差</td>
          <td>45</td>
        </tr>
        <tr>
          <td rowSpan={2}>其他</td>
          <td>口味不佳</td>
          <td>32</td>
          <td rowSpan={2}>112</td>
        </tr>
        <tr>
          <td>配送时间长</td>
          <td>80</td>
        </tr>
      </tbody>
    </table>
  );
};
