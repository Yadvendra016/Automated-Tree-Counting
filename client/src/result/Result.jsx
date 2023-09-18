import React, { useState } from "react";
import "./Result.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { TreeData } from "./Data";
import Chart from "../components/Result/Chart";
import Table from "../components/Result/Table";
import ResultPDF from "../components/Result/ResultPDF";

function Result() {
  const [showPDF, setShowPDF] = useState(false);
  const [treeData, setTreeData] = useState({
    labels: TreeData.map((tree) => tree.species),
    datasets: [
      {
        label: "Diameter (cm)",
        data: TreeData.map((tree) => tree.diameter),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Number of Trees",
        data: TreeData.map((tree) => tree.numberOfTrees),
        backgroundColor: ["rgba(255, 99, 132, 0.6)"],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="container-fluid bg-green-100" style={{ marginTop: "60px" }}>
      <h1 className="text-center mb-4">Tree Enumeration Results</h1>{" "}
      <h4>Total number of trees detected: {TreeData.length}</h4>
      <div className="row" style={{ marginBottom: "50px" }}>
        <div className="col-md-7">
          <p className="d-flex justify-center" style={{ marginTop: "50px" }}>
            Masking image shows here
          </p>
        </div>
        <div className="col-md-5">
          <Table treeData={treeData} />
        </div>
      </div>
      {/* Chart */}
      <Chart treeData={treeData} />
      {/* Map container */}
      <div className="row">
        <MapContainer
          center={[28.6139, 77.209]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
      {/* Button to toggle PDF view */}
      {/* <button
        className="btn btn-primary col-md-12"
        onClick={() => setShowPDF(!showPDF)}
      >
        Toggle PDF View
      </button>
      {showPDF && <ResultPDF treeData={treeData} />} */}
    </div>
  );
}

export default Result;
