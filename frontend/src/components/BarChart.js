import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data }) => {
  console.log(data);
  const barData = {
    labels: data.map(({ title }) => title),
    datasets: [
      {
        data: data.map(({ value }) => value),
        label: "Infected",
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  return (
    <div>
      <Bar data={barData} />
    </div>
  );
};

export default BarChart;
