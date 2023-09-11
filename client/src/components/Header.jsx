import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth, UserButton, useClerk } from "@clerk/clerk-react";

function Header() {
  const [current, setCurrent] = useState("");
  const [scrolling, setScrolling] = useState(false);

  const location = useLocation();
  const clerk = useClerk();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    setCurrent(location.pathname);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const headerStyle = {
    backgroundColor: scrolling ? "white" : "transparent",
    boxShadow: scrolling ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
  };

  return (
    <nav
      className="nav d-flex justify-content-between fixed-top"
      style={headerStyle}
    >
      {/* Logo */}
      <Link to="/" className="nav-link  logo">
        <img
          src="/images/LogoWhite.jpeg"
          alt="Logo"
          className="img-fluid "
          style={{ maxWidth: "150px" }}
        />
      </Link>

      {/*ELements*/}

      <Link
        to="/"
        className={`nav-link font-weight-bold  ${
          current === "/"
            ? " text-dark border-bottom  border-3 border-primary"
            : "text-dark"
        }`}
        style={{ fontSize: "20px" }}
      >
        Home
      </Link>

      {isSignedIn && (
        <Link
          to="/projects"
          className={`nav-link font-weight-bold  ${
            current === "/projects"
              ? " text-dark border-bottom  border-3 border-primary"
              : "text-dark"
          }`}
          style={{ fontSize: "20px" }}
        >
          Projects
        </Link>
      )}

      {/* Register button */}

      <div className="d-flex align-items-center mx-3">
        {" "}
        {/* Added a div for alignment */}
        {!isSignedIn && (
          <button
            className="nav-link btn btn-primary py-2 px-4 font-weight-bold"
            onClick={() => clerk.openSignUp({})}
            style={{
              backgroundColor: "#0d1fa1",
              color: "#fff",
              fontWeight: "bold",
              padding: "10px 25px",
              marginTop: "5px",
              height: "40px",
            }}
          >
            Get Started
          </button>
        )}
        <UserButton />
      </div>
    </nav>
  );
}

export default Header;
