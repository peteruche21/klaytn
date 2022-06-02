import React, { useState, useEffect, useMemo } from "react";
import style from "./PieChart.module.css";
import "chart.js/auto";
import "chartjs-plugin-datalabels";
import { Pie, Bar } from "react-chartjs-2";

function PieChart({ datas }) {
  const labels = [...datas.slice(25, 30).map((data) => data.name)];
  const data = {
    labels,

    datasets: [
      {
        id: 1,
        labels: "Hello",
        data: [...datas.slice(30, 35).map((data) => data.usdPrice)],
        backgroundColor: ["yellow", "blue", "red", "green"],
        borderWidth: 5,
      },
    ],
  };
  const options = {
    labels: {
      render: "label",
    },
  };
  return (
    <div className={style.chart}>
      <Pie datasetIdKey="id" data={data} />
    </div>
  );
}

export default React.memo(PieChart);
