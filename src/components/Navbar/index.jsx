import React from 'react'
import './style.css'
import { CiSearch } from "react-icons/ci";

export default function index() {
  return (
    <nav class="navbar navbar-expand-lg bg-white border-bottom fixed-top py-2">
    <div class="container-fluid">
     
      <a class="navbar-brand fw-bold ms-2" href="#">
        Kafe <span>Sans</span>
      </a>


      <form class="d-none d-md-flex ms-3 flex-grow-1">
        <div class="input-group border-0">
          <span class="input-group-text txt-bg-color border-0">
            <CiSearch />
          </span>
          <input type="text" class="form-control search-input rounded-0" placeholder="Search Menu" />
        </div>
      </form>


      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="collapse navbar-collapse justify-content-end " id="navbarContent">
        <ul class="navbar-nav align-items-center me-3">
          <li class="nav-item">
            <a class="nav-link" href="#">Reservation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Delivery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Accounting</a>
          </li>
        </ul>


        <div class="d-flex align-items-center position-relative right-fixed-navbar ps-4">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" class="profile-img me-2" alt="Profile" />
          <div>
            <div class="fw-bold">Casey Kaspol</div>
            <small class="text-muted">Cashier</small>
          </div>
          <span class="status-dot position-absolute translate-middle"></span>
        </div>
      </div>
    </div>
  </nav>
  )
}
