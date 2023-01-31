import React from "react";

export const Chart5 = () => {
  return (
    <div className="chart5Wrapper  wrapper">
      <h2>顾客点餐品类占比</h2>
      <table>
        <thead>
          <tr>
            <th>年份</th>
            <th>饺子馄饨</th>
            <th>汉堡薯条</th>
            <th>包子粥店</th>
            <th>快餐便当</th>
            <th>米粉面馆</th>
            <th>川湘菜</th>
            <th>能量西餐</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2020</td>
            <td>14%</td>
            <td>11%</td>
            <td>20%</td>
            <td>6%</td>
            <td>18%</td>
            <td>22%</td>
            <td>9%</td>
          </tr>
          <tr>
            <td>2021</td>
            <td>20%</td>
            <td>6%</td>
            <td>18%</td>
            <td>22%</td>
            <td>9%</td>
            <td>14%</td>
            <td>11%</td>
          </tr>
          <tr>
            <td>2022</td>
            <td>6%</td>
            <td>18%</td>
            <td>22%</td>
            <td>14%</td>
            <td>20%</td>
            <td>11%</td>
            <td>9%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
