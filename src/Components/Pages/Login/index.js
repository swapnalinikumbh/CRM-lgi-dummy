import React from "react";
import "./login.scss";
import lgi from "./lgi-head-logo.png";
import reGo from "./reGo.png"
import { useNavigate } from "react-router-dom"; 
import { useForm } from "react-hook-form";
const LoginComponent = () => {
  const navigate = useNavigate(); 
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    
    navigate("/"); 
  };
  return (
    <div>
      <div className="container header-login">
        <img src={lgi} alt="Logo" className="logo" />
      </div>
      <div className="container-fluid">
        <div className="container d-flex justify-content-center">
          <div className="card justify-content-center">
            <div className="card-body d-flex justify-content-center">
              <div className="left-containt d-flex align-items-center justify-content-center">
                <img src={lgi} alt="Logo" className="img" />
              </div>
              <div class="vertical-line"></div>
              <div className="right-containt">
                <div>
                  <img
                    src={reGo}
                    alt="Logo"
                    className="card-subtitle mb-2 text-muted"
                  />
                  <h5 className="card-text mt-2">Login Here</h5>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-2">
                      <label htmlFor="username">
                        User Name <span className="star">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="password">
                        Password <span className="star">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <button
                      type="submit"
                      className=" d-grid btn mt-4 col-12 mx-auto"
                      style={{
                        backgroundColor: "#4A4FC4",
                        color: "white",
                        borderRadius: "40px",
                      }}
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
