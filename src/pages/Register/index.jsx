import React from "react";
import "./style.css";

export default function index() {
  return (
    <div className="register-container">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-success">Kafe Sans</h2>
      </div>
      <div className="card p-4">
        <h4 className="mb-3">Create Account</h4>
        <form>
          <div className="mb-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter full name"
            />
          </div>
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
            Register
          </button>
        </form>
        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <a href="login.html" className="text-success">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
