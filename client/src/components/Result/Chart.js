import React from "react";
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import LineChart from "../Charts/LineChart";

function Chart({ treeData }) {
  return (
    <div className="row d-flex justify-evenly">
      {/* Bar Chart */}
      <div className="card mb-4" style={{ width: 400 }}>
        <div className="card-body">
          <h5 className="card-title">Tree Species Distribution</h5>
          <BarChart chartData={treeData} />
        </div>
      </div>

      {/* Pie Chart */}
      <div className="card mb-4" style={{ width: 300 }}>
        <div className="card-body">
          <h5 className="card-title">Species Percentage</h5>
          <PieChart chartData={treeData} />
        </div>
      </div>

      {/* Line Chart */}
      <div className="card" style={{ width: 300, height: 310 }}>
        <div className="card-body">
          <h5 className="card-title">Changes Over Time</h5>
          <LineChart chartData={treeData} />
        </div>
      </div>
    </div>
  );
}

export default Chart;
