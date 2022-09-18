// chart lar istatistikler
import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import BarChart from './BarChart';
import "./chart.css";
import VerticalChart from './VerticalChart';





function Chart() {
  return (
    <div className="chart">
      <Dashboard />
      <div className="chartContainer">
       
        <div>
          <h1 className="text-center font-extrabold">Products Stocks</h1>
          <VerticalChart />
        </div>
      </div>

    </div>

  )
}

export default Chart
