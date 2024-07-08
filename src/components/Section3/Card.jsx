import React from "react";
import "../../components/section1.css";

function Card({ about, author, post, profile }) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <p>{about}</p>
        </div>
        <div className="profile">
          <img src="src\assets\1678982180054.jpg" alt={`${author}'s profile`} className="profile-img" />
          <div>
            <h3>NIkhil Gupta</h3>
            <span>CEO Of XYZ</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
