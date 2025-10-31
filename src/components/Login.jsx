import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="logo">Instagram</h1>
        <form>
          <input type="text" placeholder="Phone number, username, or email" />
          <div className="password-field">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
            />
            <span className="toggle-btn" onClick={togglePassword}>
              {passwordVisible ? "Hide" : "Show"}
            </span>
          </div>
          <button type="submit">Log in</button>
        </form>
        <div className="divider">OR</div>
        <a href="#" className="fb-login">
          Log in with Facebook
        </a>
        <a href="#" className="forgot">
          Forgot password?
        </a>
      </div>
      <div className="signup-box">
        Don’t have an account? <a href="#">Sign up</a>
      </div>
    </div>
  );
}

export default Login;
