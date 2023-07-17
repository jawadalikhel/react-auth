// components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
  return ( 
    <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fa fa-bars"></i>
        </label>

        <label className="logo">AuthX</label>
        <ul>
          <li><NavLink to="/" class="active">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/register">Login/Register</NavLink></li>
        </ul>
    </nav>
  );
 };