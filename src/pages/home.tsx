import React from "react";
import "./home.scss";
import headerBg from "../image/head.png";
import { Chart1 } from "../components/chart-1";
import { Chart2 } from "../components/chart-2";
import { Chart3 } from "../components/chart-3";
import { Chart4 } from "../components/chart-4";
import { Chart5 } from "../components/chart-5";

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
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
      <footer> &copy; Zhoujia22 2022 - {year}</footer>
    </div>
  );
};
