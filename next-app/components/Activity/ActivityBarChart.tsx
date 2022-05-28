// @ts-nocheck
import React, { FC, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface IProps {
  [key: string]: any;
}

const ActivityBarChart: FC<IProps> = ({ dataArr }) => {
  const canvasEl = useRef(null);
  const activityDateArray = dataArr.labels ? dataArr.labels : [];

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    const labels = [...activityDateArray].reverse();
    const data = {
      labels,
      datasets: [
        {
          label: "Transactions",
          data: labels.map((date) => dataArr[date]),
          backgroundColor: "hsl(252, 82.9%, 67.8%)",
          borderColor: "hsl(252, 82.9%, 67.8%)",
          borderRadius: 20,
          barThickness: 20,
        },
      ],
    };
    const config = {
      type: "bar",
      data: data,
      options: {
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
            ticks: {
              display: true,
            },
          },
        },
      },
    };

    const BarChart = new Chart(ctx, config);

    return function cleanup() {
      BarChart.destroy();
    };
  });

  return (
    <div className="my-8">
      <div className="shadow-lg rounded-lg overflow-hidden m-auto max-w-4xl">
        <div className="py-3 px-5 bg-gray-50">On Chain Activity</div>
        {activityDateArray && (
          <canvas id="myChart" ref={canvasEl} height="100" />
        )}
      </div>
    </div>
  );
};

export default ActivityBarChart;
