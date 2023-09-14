import React from "react";

function HomeContent() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* second row */}
      <div
        className="row"
        style={{
          background: "#f2f3f6",
          padding: "40px 0",
        }}
      >
        <div className="col-md-12 text-center">
          <h2
            style={{
              marginTop: "2rem",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Welcome to Our Forest Conservation Initiative
          </h2>
          {/* cards */}

          <div
            style={{
              fontFamily: "Georgia, serif",
              marginBottom: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="card"
              style={{
                width: "300px",
                height: "200px",
                padding: "10px",
                borderRadius: "15px",
                border: "1px solid #ccc",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                margin: "0 10px",
              }}
            >
              <span
                role="img"
                aria-label="Tree Icon"
                style={{ fontSize: "24px", marginRight: "8px" }}
              >
                🌳
              </span>
              Join us in our journey to protect our forests while fostering
              responsible and sustainable development.
            </div>
            <div
              className="card"
              style={{
                width: "300px",
                height: "200px",
                padding: "10px",
                borderRadius: "15px",
                border: "1px solid #ccc",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                margin: "0 10px",
              }}
            >
              <span
                role="img"
                aria-label="Green Heart Icon"
                style={{ fontSize: "24px", margin: "0 8px" }}
              >
                💚
              </span>
              Let's make a positive impact on our environment,
            </div>
            <div
              className="card"
              style={{
                width: "300px",
                height: "200px",
                padding: "10px",
                borderRadius: "15px",
                border: "1px solid #ccc",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                margin: "0",
              }}
            >
              <span
                role="img"
                aria-label="Tree Icon"
                style={{ fontSize: "24px", marginLeft: "8px" }}
              >
                🌳
              </span>
              In the world of algorithms, hashtags, and followers, remember the
              importance of genuine human connections
            </div>
          </div>
        </div>
      </div>

      {/* Third row */}
      <div className="row vh-100" style={{ marginTop: "6rem" }}>
        <div className="col-md-3 text-center">
          <div className=" row">
            <h4>🌳 Automatic Tree Counting</h4>
          </div>
          <div>Demonstrate the power of automatic tree counting.</div>
        </div>

        <div className="col-md-3 text-center">
          <div className="row">
            <h4>🌿 Species Identification</h4>
          </div>
          <div>Identify various tree species with ease.</div>
        </div>

        <div className="col-md-3 text-center">
          <div className=" row">
            <h4>📊 Detailed Analytics</h4>
          </div>
          <div>Get detailed analytics for better insights</div>
        </div>

        <div className="col-md-3 text-center">
          <div className=" row">
            <h4>🌍 Interactive Map View</h4>
          </div>
          <div>Explore an interactive map of your forest</div>
        </div>
        {/* About App */}
        <div className="col-md-12 text-center">
          <div className="column">
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Ready to Count Trees and Unleashing the Forest's Secrets?
            </h1>
            <div className="row">
              <button
                onClick={scrollToTop}
                style={{
                  display: "flex",
                  border: "none",
                  background: "white",
                  color: "blue",
                  alignItems: "center",
                  textDecoration: "none",
                  marginLeft: "20rem",
                  fontWeight: "bold",
                  fontSize: "1.3em",
                }}
              >
                Dive into the Forest Magic – Explore the Possibilities!
                <img
                  width="20"
                  height="20"
                  src="//dc5a1f3ff4cc583ce8452250ed97df5b.cdn.bubble.io/f1592015421555x154226747756217380/arrow.svg"
                  alt="Arrow Icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeContent;
