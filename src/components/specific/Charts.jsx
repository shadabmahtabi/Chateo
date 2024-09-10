import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend,
  plugins,
  scales,
} from "chart.js";
import { getLast7Days } from "../../lib/features";
import { greyColor, hoverMattBlack } from "../../constants/color";

ChartJs.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        beginAtZero: true,
        display: false,
      },
    },
  },
};
const LineChart = ({ value = [] }) => {
  const data = {
    labels: getLast7Days(),
    datasets: [
      {
        label: "Series A",
        data: value,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        // pointRadius: 0,
        // pointHoverRadius: 0,
        fill: true,
      },
      //   {
      //     label: "Series B",
      //     data: [15, 10, 60, 4, 24],
      //     borderColor: "rgba(75, 12, 192, 1)",
      //     backgroundColor: "rgba(75, 12, 192, 0.3)",
      //     pointRadius: 0,
      //     pointHoverRadius: 0,
      //     fill: true,
      //   },
    ],
  };
  return (
    <Line data={data} options={lineChartOptions}>
      Charts
    </Line>
  );
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 110
};
const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Chats Vs Group Chats",
        data: value,
        borderColor: [hoverMattBlack, "rgba(255, 99, 132, 1)"],
        backgroundColor: [greyColor, "rgba(255, 99, 132, 0.5)"],
        offset: 20
      },
    ],
  };
  return <Doughnut style={{zIndex: 10}} data={data} options={doughnutChartOptions} />;
};

export { LineChart, DoughnutChart };
