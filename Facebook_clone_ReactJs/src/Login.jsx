import React from "react";
import "./login.css";

function Login({ stateChanger }) {
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
          alt="logo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
        <div onClick={() => stateChanger(true)} className="login__info__div">
          Login
        </div>
      </div>
    </div>
  );
}

export default Login;
