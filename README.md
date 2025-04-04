# expenses-chart

This project is a simple implementation of Chart.js in a React.js application. It visualizes data using different chart types, such as bar charts, line charts, and pie charts.

## 🚀 Features
- Uses React.js for the frontend
- Uses Chart.js for data visualization
- Supports responsive and interactive charts
- Fetches dynamic data from JSON 

## 🛠️ Technologies Used
- React.js (JavaScript library for building UI)
- Chart.js (Popular charting library)
- react-chartjs-2 (Wrapper for using Chart.js in React)

## 📌 Example Code

import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins   
} from "chart.js";

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    plugins
  );

     const data = {
        labels,
        datasets: [
          {
            label: "",
            data: values,
            backgroundColor: [
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(186, 34%, 60%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
            ],
            borderRadius: 3,
          },
        ],
      };

    const options = {
      plugins: {
        legend: {
          display: false,
          labels: {
                    color: 'rgb(255, 99, 132)'
                }
        }
      },
      responsive: true,
      scales: {
        y: {
          display: false,    
          beginAtZero: true,
          grid: { display: false },
          
        },
        x: {
            grid: { display: false },
        }
      },
      onHover: function (event, element) {
        if (element.length) {
          event.native.target.style.cursor = "pointer";
        } else {
          event.native.target.style.cursor = "default";
        }
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
    };