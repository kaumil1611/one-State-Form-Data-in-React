import React from "react";
import { Bar, Pie } from "react-chartjs-2";

const ChartDisplay = ({ onDataValue, onSelectedChart }) => {
    console.log(onSelectedChart);
  const Labels = onDataValue.map((val) => val.title);
  const dataValue = onDataValue.map((val) => val.amount);

  console.log(dataValue);

  let BgColor = [];

  const dynamicColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  dataValue.map(() => BgColor.push(dynamicColor()));

  const ChartData = {
    labels: Labels,
    datasets: [
      {
        label: "User Salary",
        data: dataValue,
        backgroundColor: BgColor,
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },

      title: {
        display: true,
        text: "Chart exaple ",
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "red",
          borderColor: "grey",
          tickColor: "grey",
        },
      },
      y: {
        suggestedMin: 0,
        suggestedMax: 500,
      },
    },
  };
  let selectedChart = <p>No chart Selected</p>;
  if (onSelectedChart) {
    if (onSelectedChart === "BarChart") {
      selectedChart = <Bar data={ChartData} options={options}></Bar>;
    } else if (onSelectedChart === "PieChart") {
      selectedChart = <Pie options={options} data={ChartData}></Pie>;
    }
  }
  return (
    <div
      style={{
        paddingTop: "40px",
        width: "50%",
        height: "400px",
        display: "inline-flex",
      }}
    >
      {selectedChart}
    </div>
  );
};

export default ChartDisplay;
