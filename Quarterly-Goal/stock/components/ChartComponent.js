import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
export default function ChartComponent({ stockData }) {
  console.log("data from slug", stockData);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart - Multi Axis",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = stockData.map((i) => i.date);
  console.log("label", labels);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "soemthing",
        data: stockData.map((i) => i.itemPrices).reverse(),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y",
      },
    ],
  };

  // console.log("here in chart compo ".stockDates)
  return <Line options={options} data={data} />;
}
