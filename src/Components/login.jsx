import React from "react";
import "./style.css";
import "./form.css";
import userIcon from "./Assets/user.svg";
import lockIcon from "./Assets/lock.svg";
import cartIcon from "./Assets/cart.svg";
import vector from "./Assets/vector.svg";
import {LoginForm} from './form';

export const Login = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form was submitted');
  }
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
              <div className="username">
                <div className="overlap-group-2">

                  <img className="img" alt="User" src={userIcon} />
                  <form onSubmit={handleSubmit} >

                    <input placeholder="USERNAME" />

                  </form>
                    
                </div>    
               
              </div>
              <div className="password">
                  <div className="overlap-group-2">
                    <img className="img" alt="Lock" src={lockIcon} />
                    <form onSubmit={handleSubmit} >

                      <input placeholder="PASSWORD" />

                    </form>
                  </div>
                </div>
            
            <button className="login-btn">
              <div className="login-wrapper">
                <div className="login">LOGIN</div>
              </div>
            </button>
            <div className="text-wrapper-2">Forgot password?</div>
            <img className="group" alt="group" src={cartIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};