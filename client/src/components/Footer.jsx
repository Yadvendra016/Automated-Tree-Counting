import React from "react";

function Footer() {
  const myStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 100px 20px 100px",
    background: "#f2f3f6",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
  };

  return (
    <div style={myStyle}>
      <a
        style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
        href="https://github.com/Yadvendra016/Automated-Tree-Counting"
      >
        <div className="d-flex flex-row gap-3 h-100">
          <img
            src="/images/github-mark.jpeg"
            style={{ width: "35px", height: "35px" }}
            alt="github-logo"
          ></img>
          <p>View Source Code</p>
        </div>
      </a>
      <div>
        <p>&#169; 2023, EcoSphere. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
