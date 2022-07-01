import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./myntra.png";
// import web1 from "../images/flipkart.png";

function Navbar() {
  return (
    <section id="navbar">
      <nav
        className="navbar navbar-expand-lg py-3 fixed-top bg-white"
        style={{ boxShadow: "0 4px 12px 0 rgb(0 0 0 / 5%)" }}
      >
        <div className="container-fluid align-items-center d-flex">
          <img
            src={logo}
            className="img-fluid"
            style={{ width: "150px", height: "50px" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 w-100">
              <li className="nav-item px-2">
                <a className="nav-link" aria-current="page" href="#">
                  MEN
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" aria-current="page" href="#">
                  WOMEN
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" aria-current="page" href="#">
                  KIDS
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" aria-current="page" href="#">
                  HOME & LIVING
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" aria-current="page" href="#">
                  BEAUTY
                </a>
              </li>
              <li className="nav-item px-2">
                <a
                  className="nav-link position-relative"
                  aria-current="page"
                  href="#"
                >
                  STUDIO
                  <span className="position-absolute top-0 start-100 translate-middle badge text-danger">
                    NEW
                  </span>
                </a>
              </li>

              <form className="d-flex align-items-center ml-5 w-75 px-5">
                <div
                  className="fa fa-search position-absolute pl-3"
                  style={{ zIndex: "1", color: "#808080d4" }}
                ></div>
                <input
                  className="form-control pl-5 me-2 position-relative w-100"
                  type="search"
                  placeholder="Search for products, brands and more"
                  aria-label="Search"
                />
              </form>
            </ul>
          </div>
          <ul className="list-unstyled navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <div className=" text-center">
                <div className="fa fa-user-circle-o fa-lg"></div>
                <div style={{ fontSize: "12px" }}>Profile</div>
              </div>
            </li>
            <li className="nav-item px-3">
              <div className=" text-center">
                <div className="fa fa-heart-o fa-lg"></div>
                <div style={{ fontSize: "12px" }}>Whishlist</div>
              </div>
            </li>
            <li className="nav-item px-3">
              <div className=" text-center">
                <div className="fa fa-shopping-bag fa-lg"></div>
                <div style={{ fontSize: "12px" }}>Bag</div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
export default Navbar;
