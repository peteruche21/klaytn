import React from "react";
import style from "./LineGraph.module.css";
import "chart.js/auto";
import { Line, Pie, Doughnut } from "react-chartjs-2";

function LineGraph({ datas }) {
  const labels = [...datas.slice(36, 41).map((dat) => dat.name)];
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  const data = {
    labels,

    datasets: [
      {
        id: 1,
        label: "Hello",
        data: [...datas.slice(36, 41).map((data) => data.usdPrice)],
        backgroundColor: "green",
        fill: true,
      },
    ],
  };
  return (
    <div className={style.chart}>
      <Line
        datasetIdKey="id"
        data={data}
        options={options}
        className={style.line}
      />
    </div>
  );
}

export default LineGraph;
