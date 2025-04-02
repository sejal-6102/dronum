import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-outer">
        <div className="container">
          <div className="login-inner animate__animated animate__zoomIn">
            <h2>Login</h2>
            <form method="POST">
              <p>
                <label for="username">
                  Username or email address&nbsp;
                  <span className="required">*</span>
                </label>
                <input 
                  type="text"
                  className="input"
                  name="username"
                  id="username"
                  autocomplete="username"
                  value=""
                />
              </p>
              <p>
                <label for="username">
                  Password &nbsp;<span className="required">*</span>
                </label>
                <span className="password-input">
                  <input
                    type="password"
                    className="input"
                    name="password"
                    id="password"
                    autocomplete="current-password"
                    value=""
                  />
                  <span className="show-password-input"></span>
                </span>

              </p>

              <p>
                <label>
                  <input
                    type="checkbox"
                    name="rememberme"
                    id="rememberme"
                    value="forever"
                  />
                  <span>Remember me</span>
                </label>
                <button
                  className="button"
                  type="submit"
                  name="login"
                  value={"Log In"}
                >
                  Log In
                </button>
              </p>
              <p>
              <Link to="">Lost your password?</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
