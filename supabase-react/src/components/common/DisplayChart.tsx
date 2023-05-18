import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { useContext, useEffect, useState } from "react";
import PieChart from "./PieChart";
import { UserContext } from "@/context/UserContext.tsx";
import { TabData } from "@/interfaces/interfaces";
import {
  backgroundDataSet1,
  backgroundDataSet2,
  backgroundDataSet3,
  backgroundDataSetTest,
  dataset1labels,
} from "../../utils/data";

const DisplayChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { todo } = useContext(UserContext);
  const { tabs, total, pay_out } = todo;
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 5, 43, 25, 9],
        backgroundColor: backgroundDataSetTest,
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

  const dataset1data = [total - pay_out, pay_out];

  const dataset3Labels = tabs?.map((data) => data.amount) as number[];
  useEffect(() => {
    setLoading(false);
    if (tabs) {
      setChartData({
        labels: dataset1labels,
        datasets: [
          {
            label: "Amount",
            data: dataset1data,
            backgroundColor: backgroundDataSet1,
          },
          {
            label: "Balance ",
            data: [positive, negative] as number[],
            backgroundColor: backgroundDataSet2,
          },
          {
            label: "Payment",
            data: dataset3Labels,
            backgroundColor: backgroundDataSet3,
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
