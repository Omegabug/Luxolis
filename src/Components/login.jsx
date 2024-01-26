import React, {useState} from "react";
import "./style.css";
import "./form.css";
import cartIcon from "./Assets/cart.svg";
import vector from "./Assets/vector.svg";
import {LoginForm} from './form';


export const Login = (props) => {
  return (
    <div className="dashboard-login">

      <div className="overlap-wrapper">

        <div className="overlap">

          <div className="BG">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="div" />
            </div>
            <img className="vector" alt="Vector" src={vector}/>
          </div>

          <div className="form">
          <img className="group" alt="group" src={cartIcon} />

            <LoginForm connection={props.connection}/>
          </div>
        
        </div>
      </div>
    </div>
  );
};