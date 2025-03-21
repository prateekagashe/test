// src/components/LoginScreen.js
import React, { useState } from "react";
import "./LoginScreen.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </div>
        <div className="remember-me">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <button type="submit">Login</button>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <div className="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;