import { Doughnut } from "react-chartjs-2";
import { PieChartProps } from "@/interfaces/interfaces";

function PieChart({ chartData }: PieChartProps) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />
    </div>
  );
}
export default PieChart;
