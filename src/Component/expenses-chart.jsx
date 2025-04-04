import logo from '../assets/logo.svg';
import 'tachyons/css/tachyons.min.css';
import './expenses-chart.css';

import React, { useState, useEffect } from "react";
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

 const ExpensesChart = () => {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch("../data.json")
        .then((response) => response.json())
        .then((data) => {
            setDataChart(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }, []);

    const labels = dataChart.map((item) => item.day);
    const values = dataChart.map((item) => item.amount);

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
    return (
        <>
        
        <div className='container  w-100'>
            <div className='balance flex justify-between pa3 br3  '>
                <div className='balance-color flex flex-column justify-center gap-1'>
                    <p className='ma0 f5 f6-l mb2'>My balance</p>
                    <span className='f3 f3-l fw7'>$921.48</span>
                </div>
                <img className='logo' src={logo} alt="logo" />
            </div>

            <div className="bg-white pa3 mt3 br3">
                <h2 className='f4 mv0'>Spending - Last 7 days</h2>
                <Bar className='mv4'  data={data} options={options} />
                <hr  />
                <div className='flex justify-between pv3 '>
                    <div>
                        <p className='custom-color ma0 f5 f7-l mb2'>Total this month</p>
                        <span className='custom-font-size fw7 '>$478.33</span>
                    </div>
                    <div className='flex flex-column justify-end mb2-l'>
                        <span className='flex justify-end fw7 f5 f6-l'>+2.4%</span>
                        <p className='custom-color ma0 f5 f6-l'>from last month</p>
                    </div>
                </div>
            </div>
        </div>
          
        </>
    )
}

export default ExpensesChart;