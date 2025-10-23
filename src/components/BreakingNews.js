import React from "react";
import "./BreakingNews.css";

export default function BreakingNews() {
  return (
    <div className="breaking_news">
      <div className="breaking_left_section">
        <h5>Breaking</h5>
        <h1>
          Kelleher says Gavin candidacy a “serious miscalculation” as FF candidate withdraws
        </h1>
        <p>
          Fianna presidential candidate leaves Heather Humphreys and Catherine Connolly
          in race for Áras.
        </p>
        <p className="time">1 hour ago</p>
      </div>

      <div className="breaking_right_section">
        <img className="keller" src="/keller.png" alt="Kelleher" />
      </div>
    </div>
  );
}
