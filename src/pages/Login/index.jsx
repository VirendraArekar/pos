import React from "react";
import './style.css'

export default function index() {
  return (
    <div className="login-container">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-success">Kafe Sans</h2>
      </div>
      <div className="card p-4">
        <h4 className="mb-3">Login</h4>
        <form>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-green w-100">
            Login
          </button>
        </form>
        <p className="text-center mt-3 mb-0">
          Don't have an account?{" "}
          <a href="register.html" className="text-success">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
