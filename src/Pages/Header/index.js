import React from "react";
import logo from "../../assets/images/lgi-head-logo.png";
import profilephoto from "../../assets/images/Profilephone.png";
import "./Header.scss";
import CountdownTimer from "./CountdownTimer";

const HeaderPage = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "90px",
              height: "24px",
            }}
            className="d-inline-block align-text-top"
          />
        </a>
        <form className="d-flex" role="search">
          <input
            className="header-input search-input"
            type="text"
            // name="search"
            placeholder="Search.."
          />
        </form>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <ul className="navbar-nav ms-auto d-flex "> */}
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i class="bi bi-bell icon-background"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i class="bi bi-chat-left icon-background"></i>
              </a>
            </li>
            {/* </ul> */}
            <div className="d-flex align-items-center">
              <select
                className="form-select dropdown-lang"
                aria-label="Language select"
              >
                <option value="ENG">ENG</option>
                <option value="SPA">SPA</option>
                <option value="FRE">FRE</option>
              </select>
              <div className="vertical-line"></div>
              <div className="d-flex me-2">
                              <img
                                  src={profilephoto}
                                  alt="User" className="rounded-circle" />
              </div>
              <select
                className="form-select dropdown-Profile "
                aria-label="Language select"
              >
                <button
                  className="btn dropdown-toggle d-flex align-items-center"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <option>Erik Brown</option>
                <option>
                  <a className="dropdown-item" href="/">
                    Profile
                  </a>
                </option>
                <option>
                  <a className="dropdown-item" href="/">
                    Settings
                  </a>
                </option>
                <option>
                  <a className="dropdown-item" href="/">
                    Logout
                  </a>
                </option>
              </select>

              <div className="vertical-line"></div>
              <div className="d-flex align-items-center idle-main">
                <span className="idle">Idle</span>
                <CountdownTimer />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPage;
