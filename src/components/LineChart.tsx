import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Statistics of All Data",
    },
  },
};

const labels = ["Normal", "Warning", "Danger"];

export const data = {
  labels,
  datasets: [
    {
      label: "Temperature",
      data: [25, 15, 5],
      borderColor: "#FF0000",
      backgroundColor: "#FF0000",
    },
    {
      label: "Humidity",
      data: [65, 45, 25],
      borderColor: "#000000",
      backgroundColor: "#000000",
    },
  ],
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};

export default LineChart;
