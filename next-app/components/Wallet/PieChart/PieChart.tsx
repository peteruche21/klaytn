import React, { useState, useEffect, useMemo } from "react";
import style from "./PieChart.module.css";
import "chart.js/auto";
import "chartjs-plugin-datalabels";
import { Pie, Bar } from "react-chartjs-2";

function PieChart({ datas }) {
  const labels = [...datas.slice(35, 45).map((data) => data.name)];
  // const labels = [12, 13, 14, 15, 16];
  let options = {
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let datasets = ctx.chart.data.datasets;

          if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
            let sum = datasets[0].data.reduce((a, b) => a + b, 0);
            let percentage = Math.round((value / sum) * 100) + "%";
            return value;
          } else {
            return value;
          }
        },
        color: "red",
      },
    },
  };
  const data = {
    labels,

    datasets: [
      {
        id: 1,

        data: [...datas.slice(35, 45).map((data) => data.usdPrice)],
        // data: [10, 15, 12, 32],
        backgroundColor: ["yellow", "blue", "red", "green"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={style.chart}>
      <Pie datasetIdKey="id" data={data} options={options} />
    </div>
  );
}

export default React.memo(PieChart);
