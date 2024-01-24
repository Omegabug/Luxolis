import React from "react";
import "./style.css";

export const DashboardLogin = () => {
  return (
    <div className="dashboard-login">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="BG">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="div" />
            </div>
            <img className="vector" alt="Vector" src="vector.svg" />
          </div>
          <div className="form">
            <div className="username">
              <div className="overlap-group-2">
                <div className="text-wrapper">USERNAME</div>
                <img className="img" alt="User" src="user.svg" />
              </div>
            </div>
            <div className="password">
              <div className="overlap-group-2">
                <div className="text-wrapper">PASSWORD</div>
                <img className="img" alt="Lock" src="lock.svg" />
              </div>
            </div>
            <button className="login-btn">
              <div className="login-wrapper">
                <div className="login">LOGIN</div>
              </div>
            </button>
            <div className="text-wrapper-2">Forgot password?</div>
            <img className="group" alt="Group" src="group.png" />
          </div>
        </div>
      </div>
    </div>
  );
};