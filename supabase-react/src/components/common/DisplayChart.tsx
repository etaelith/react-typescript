import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { useContext, useEffect, useState } from "react";
import PieChart from "./PieChart";
import { UserContext } from "../../context/UserContext";
import { TabData } from "../../interfaces/interfaces";

const DisplayChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { todo } = useContext(UserContext);
  const { tabs } = todo;
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 5, 43, 25, 9],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
      },
    ],
  });
  const positive = tabs
    ?.filter((data: TabData) => data.paid_up === true)
    .map((data: TabData) => data.amount ?? 0)
    .reduce((acc: number, amount: number) => acc + amount, 0);

  const negative = tabs
    ?.filter((data: TabData) => data.paid_up === false)
    .map((data: TabData) => data.amount ?? 0)
    .reduce((acc: number, amount: number) => acc + amount, 0);

  useEffect(() => {
    setLoading(false);
    console.log(positive);
    console.log(negative);
    if (tabs) {
      setChartData({
        labels: tabs.map((data) => data.name) as string[],
        datasets: [
          {
            label: "Users Gained ",
            data: tabs?.map((data) => data.amount) as number[],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
          },
          {
            label: "Balance ",
            data: [positive, negative] as number[],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
          },
        ],
      });
    }

    setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todo]);
  return (
    <div>
      {!loading ? <div>loading</div> : <PieChart chartData={chartData} />}
    </div>
  );
};

export default DisplayChart;
