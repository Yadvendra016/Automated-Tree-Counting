import React from "react";
import "./home.css";
import HomeContent from "../components/HomeContent";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Home() {
  const clerk = useClerk();
  const { isSignedIn } = useAuth();

  return (
    <div className="container-fluid" style={{ paddingTop: "10px" }}>
      <div className="row">
        {/* Left Side */}
        <div className="col-md-5 vh-100 d-flex align-items-center justify-content-center">
          <div>
            <h1
              style={{
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif",
                marginBottom: "2rem",
                textShadow:
                  "1px 1px 2px rgba(0,0,0,0.5), -2px -2px 3px rgba(255,255,255,0.5)",
              }}
            >
              Key Features
            </h1>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li className="list-unstyled" style={{ marginBottom: "1em" }}>
                🌳 Automatic Tree Counting
              </li>
              <li className="list-unstyled" style={{ marginBottom: "1em" }}>
                🌿 Species Identification
              </li>
              <li className="list-unstyled" style={{ marginBottom: "1em" }}>
                📊 Detailed Analytics
              </li>
              <li className="list-unstyled" style={{ marginBottom: "1em" }}>
                🌍 Interactive Map View
              </li>
            </ul>
            {isSignedIn ? (
              <Link to="/image-upload">
                <button
                  className="btn btn-primary"
                  style={{
                    marginTop: "2em",
                    backgroundColor: "#0d1fa1",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "10px 25px",
                    transition: "background-color 0.3s, color 0.3s",
                  }}
                >
                  Ready to upload Image
                </button>
              </Link>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => clerk.openSignIn({})}
                style={{
                  marginTop: "2em",
                  backgroundColor: "#0d1fa1",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "10px 25px",
                  transition: "background-color 0.3s, color 0.3s",
                }}
              >
                Register to Get Started
              </button>
            )}
          </div>
        </div>

        {/* Right Side*/}
        <div className="col-md-7 d-flex align-items-center">
          <div className="d-flex flex-column">
            <h1
              style={{
                maxWidth: "unset",
                maxHeight: "unset",
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif",
                textShadow:
                  "1px 1px 2px rgba(0,0,0,0.5), -2px -2px 3px rgba(255,255,255,0.5)",
              }}
            >
              Welcome to EcoSphere
            </h1>
            <h1
              style={{
                maxWidth: "unset",
                maxHeight: "unset",
                color: "rgb(66, 77, 248)",
                transform:
                  "translateY(-0.33661px) translate3d(0px, 0px, 0px) translateZ(0px)",
                opacity: 0.983169,
                animation: "typing 8s steps(30) infinite",
                whiteSpace: "nowrap",
                overflow: "hidden",
                borderRight: "1px solid",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Counting Trees, Preserving Dreams
            </h1>
            <h4
              style={{
                maxWidth: "unset",
                maxHeight: "unset",
                fontFamily: "Georgia, serif",
                fontWeight: "lighter",
                marginTop: "30px",
              }}
            >
              Our innovative tree enumeration technology leverages the power of
              image analytics to provide accurate insights into forest
              landscapes.
            </h4>
          </div>
        </div>
      </div>
      {/* Rest Content */}
      <HomeContent />
    </div>
  );
}

export default Home;
