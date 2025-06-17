import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, Tooltip, Filler } from "chart.js"

ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale, Legend, Filler)

const Graph = ({ graphData }) => {
  const labels = graphData?.map((item, i) => `${item.clickDate}`)
  const userPerDaya = graphData?.map((item) => item.count)

  const data = {
    labels: graphData.length > 0 ? labels : ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Total Clicks",
        data: graphData.length > 0 ? userPerDaya : [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
        backgroundColor:
          graphData.length > 0
            ? (context) => {
                const chart = context.chart
                const { ctx, chartArea } = chart
                if (!chartArea) return null

                const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
                gradient.addColorStop(0, "rgba(139, 92, 246, 0.1)")
                gradient.addColorStop(1, "rgba(139, 92, 246, 0.8)")
                return gradient
              }
            : "rgba(139, 92, 246, 0.1)",
        borderColor: "#8b5cf6",
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
        fill: true,
        tension: 0.4,
        barThickness: 20,
        categoryPercentage: 0.8,
        barPercentage: 0.9,
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#e2e8f0",
          font: {
            size: 14,
            weight: "bold",
          },
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        backgroundColor: "rgba(15, 23, 42, 0.9)",
        titleColor: "#e2e8f0",
        bodyColor: "#cbd5e1",
        borderColor: "#8b5cf6",
        borderWidth: 1,
        cornerRadius: 12,
        displayColors: false,
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(148, 163, 184, 0.1)",
          drawBorder: false,
        },
        ticks: {
          color: "#94a3b8",
          font: {
            size: 12,
          },
          callback: (value) => {
            if (Number.isInteger(value)) {
              return value.toString()
            }
            return ""
          },
        },
        title: {
          display: true,
          text: "Number Of Clicks",
          color: "#e2e8f0",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#94a3b8",
          font: {
            size: 12,
          },
          maxRotation: 45,
        },
        title: {
          display: true,
          text: "Date",
          color: "#e2e8f0",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  }

  return <Bar className="w-full" data={data} options={options}></Bar>
}

export default Graph
