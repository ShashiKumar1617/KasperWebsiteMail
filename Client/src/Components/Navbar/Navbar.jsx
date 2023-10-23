import React from "react";
import BrandLogo from "../../Assets/Images/Universal/Kasper.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <Link to='Home' className="navbar-brand" href="index.html">
          <img style={{ width: "130px" }} src={BrandLogo} alt="" />
        </Link>
        <button style={{width:'fit-content'}}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-0 mb-2 mb-lg-0 ms-md-auto">
            <li className="nav-item text-start">
              <Link to='Home'
                className="nav-link"
                style={{ color: "rgb(255, 94, 0) !important", fontWeight: 600 }}
                aria-current="page"
                href="index.html"
              >
                Home
              </Link>
            </li>
            <li className="nav-item text-start">
              <Link to="About-us" className="nav-link" href="./Assets/Pages/About/About.html">
                About
              </Link>
            </li>
            <li className="dropdown text-start">
              <div className="btn nav-link text-start">Services</div>
              <ul className="dropdown-menu">
              <div className="drip-Arrow d-none d-md-block"></div>
                <div className="row">
                  <div>
                    <li>
                      <Link to='App-Development' className="dropdown-item px-1 px-sm-3" href="a">
                        Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link to='Web-Development' className="dropdown-item px-1 px-sm-3" href="a">
                        Web App Development
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item px-1 px-sm-3" href="a">
                        CMS Development
                      </a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <Link to='Digital-Marketing' className="dropdown-item px-1 px-sm-3" href="a">
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item px-1 px-sm-3" href="a">
                        Trending Technologies
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item px-1 px-sm-3" href="a">
                        Other Services
                      </a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li className="dropdown text-start">
              <div className="nav-link btn text-start">Industries</div>
              <ul className="dropdown-menu">
                <div className="drip-Arrow d-none d-md-block"></div>
                <div className="row">
                    <li>
                      <a className="dropdown-item px-1 px-sm-3" href="a">
                        Travel{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item px-1 px-sm-3" href="a">
                        Sports{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item px-1 px-sm-3" href="a">
                        Business
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item px-1 px-sm-3" href="a">
                        Real Estate
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item px-1 px-sm-3" href="a">
                        Education
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item px-1 px-sm-3" href="a">
                        Health & Fitness
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item px-1 px-sm-3" href="a">
                        Media Entertainment{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item px-1 px-sm-3" href="a">
                        Social Network Web{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item px-1 px-sm-3" href="a">
                        Banking And Finance{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item px-1 px-sm-3" href="a">
                        Retail Ecommerce
                      </a>
                    </li>
                </div>
              </ul>
            </li>
            <li className="nav-item text-start">
              <Link to='Career' className="nav-link" href="./Assets/Pages/career/career.html">
                Career
              </Link>
            </li>
            <li className="nav-item text-start">
              <Link to='Contact-us' className="nav-link" href="a">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
