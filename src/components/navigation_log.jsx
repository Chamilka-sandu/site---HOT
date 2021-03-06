import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../database/firebase-config";

import React, { useState } from "react";
import { signOut } from "firebase/auth";

import logo from "../logo.png";
import profile from "../profile.png";

import SearchBar from "./SearchBar";
import BookData from "../Data.json";

import Login from "./Login";
import Signup from "./Signup";
import { useUserAuth } from "../context/UserAuthContext";

export const Navigation_log = () => {

  const { user } = useUserAuth();


  const logout = async () => {
    await signOut(auth);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ margin: "0px" }}
    >
      <div className="container-fluid">
        <img src={logo} width="50px" height="50px" alt="" />
        <Link
          to="/"
          style={{ height: "35px", fontSize: "15px" }}
          className="navbar-brand fw-bold"
        >
          Hands Of Thambapanni
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <Link to="/" className="nav-link active px-13 text-uppercase">
                Home
              </Link>
            </li>
            <li className="nav-item px-3">
              {/* <Link
                to="/donation"
                spy={true}
                smooth={true}
                className="nav-link active px-13 text-uppercase"
              >
                Donations
              </Link> */}
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <form className="d-flex pe-3">
              <SearchBar placeholder="Search Enterprise..." data={BookData} />
            </form>
            <img
              src={user?.photoURL != null ? user?.photoURL : profile}
              width="35px"
              height="35px"
              alt=""
            />

            {/* <ReactBootStrap.NavDropdown
              className="navbar-item"
              title={user?.displayName != "" ? user?.displayName : profile}
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#" onClick={logout}>
                Logout
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
