import React, {useState} from "react";
import "./style.css";
import "./form.css";
import cartIcon from "./Assets/cart.svg";
import vector from "./Assets/vector.svg";
import {LoginForm} from './form';

export const Login = () => {
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

            <LoginForm/>
          </div>


          {/*}
          <div className="form">           
              <div className="username">
                <div className="overlap-group-2">

                  <img className="img" alt="User" src={userIcon} />
                  
                  <form onSubmit={handleSubmit} >

                    <input value ={userName} placeholder="USERNAME"   />
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
            
            <button className="login-btn" onClick={handleSubmit}>
              <div className="login-wrapper">
                <div className="login">LOGIN</div>
              </div>
            </button>
            <div className="text-wrapper-2">Forgot password?</div>
            <img className="group" alt="group" src={cartIcon} />
          </div>
          */}
        </div>
      </div>
    </div>
  );
};