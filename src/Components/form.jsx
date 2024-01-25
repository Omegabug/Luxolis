import React, { useState } from "react";
import "./style.css";
import "./form.css";
import userIcon from "./Assets/user.svg";
import lockIcon from "./Assets/lock.svg";

export const LoginForm = (props) => {
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");

  function handleSubmit  () {
    console.log(userName);
    if ( userName =="test@luxpmsoft.com" && password == "test1234!")
      console.log("connected");
    else
      console.log("error");
  }

  return (
    <form >
      <div className="username">
        <div className="overlap-group-2">
          <img className="img" alt="User" src={userIcon} />
          <input value = {userName} onChange={(e) => setUserName(e.target.value)} type="text" id="userName" placeholder="USERNAME" required={true} />
        </div>
      </div>
      <div className="password">
        <div className="overlap-group-2">
          <img className="img" alt="Lock" src={lockIcon} />
          <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="PASSWORD" required={true} />
        </div>
      </div>
      <button className="login-btn" type="submit" onClick={handleSubmit} >
        <div className="login-wrapper">
          <div className="login">LOGIN</div>
        </div>
      </button>
    </form>
  );
}

export default LoginForm;
