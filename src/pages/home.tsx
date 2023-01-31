import React from "react";
import "./home.scss";
import headerBg from "../image/head.png";
import { Chart1 } from "../components/chart-1";
import { Chart2 } from "../components/chart-2";
import { Chart3 } from "../components/chart-3";
import { Chart4 } from "../components/chart-4";
import { Chart5 } from "../components/chart-5";
import { Chart6 } from "../components/chart-6";
import { Chart7 } from "../components/chart-7";
import { Chart8 } from "../components/chart-8";
import { Chart9 } from "../components/chart-9";
import { Chart10 } from "../components/chart-10";
import { Chart11 } from "../components/chart-11";
import { Chart12 } from "../components/chart-12";
import { Chart13 } from "../components/chart-13";

export const Home = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }} />
      <main>
        <section className="section1">
          <Chart1 />
          <Chart2 />
        </section>
        <section className="section2">
          <Chart3 />
          <Chart4 />
        </section>
        <section className="bordered section3">
          <Chart5 />
        </section>
        <section className=" section4">
          <Chart6 />
          <div className="bordered ageGroup wrapper">
            <h2>注册用户年龄段分布</h2>
            <div className="charts">
              <Chart7 />
              <Chart8 />
              <Chart9 />
            </div>
          </div>
        </section>
        <section className=" section5">
          <div className="bordered wrapper  row1">
            <h2>服务评价统计</h2>
            <div className="charts">
              <Chart10 />
              <Chart11 />
            </div>
          </div>
          <div className="bordered wrapper row2 ">
            <h2>用户平均单价</h2>
            <div className="charts">
              <Chart12 />
              <Chart13 />
            </div>
          </div>
          <div className="bordered wrapper row3 ">
            <h2>售后服务部</h2>
          </div>
        </section>
      </main>
      <footer> &copy; Zhoujia22 2022 - {year}</footer>
    </div>
  );
};
