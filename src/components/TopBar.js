import React from "react";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="top_bar">
      <div className="top_info">
        <p>23°C, Dublin | Monday, 4 October 2025</p>
        <p>
          Nasdaq <span className="down">-28%</span>
        </p>
      </div>

      <div className="logo_box">
        <img src="/logo.png" alt="Social TV Logo" />
      </div>

      <div className="account_info">
        <i className="fa fa-search icon"></i>
        <button className="subscribe">Subscribe</button>
        <button className="login">Login</button>
      </div>
    </div>
  );
}
