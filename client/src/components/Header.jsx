import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="nav d-flex justify-content-between semiBackground fixed-top bg-success">
        <Link to="/" className="nav-link  logo">
          <img
            src="/images/LogoWhite.jpeg"
            alt="Logo"
            className="img-fluid "
            style={{ maxWidth: "150px" }}
          />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
