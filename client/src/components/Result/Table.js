import React from "react";

function Table({ treeData }) {
  return (
    <div>
      <h2 className="mb-4">Tree Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Species</th>
            <th>Diameter (cm)</th>
            <th>Number of Trees</th>
          </tr>
        </thead>
        <tbody>
          {treeData.labels.map((species, index) => (
            <tr key={index}>
              <td>{species}</td>
              <td>{treeData.datasets[0].data[index]}</td>
              <td>{treeData.datasets[1].data[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
