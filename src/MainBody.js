import React from "react";

import "./MainBody.css";

export default function MainBody() {
  return (
    <div className="MainBody">
      <h1>Khadijah Nabil</h1>
      <p className="job-title">Frontend Developer</p>
      <p className="website">kcodes.com</p>
      <button type="button" className="btn btn-light big-links">
        <i className="fa-solid fa-envelope"></i> Email
      </button>
      <button type="button" className="btn btn-primary big-links">
        <i className="fa-brands fa-linkedin"></i> LinkedIn
      </button>
      <div>
        <h2>About</h2>
        <p className="info">
          I am a frontend developer with an interest in making things simple and
          automating daily tasks. I try to keep up with best practices and
          always looking for new things to learn!
        </p>
      </div>
      <div>
        <h2>Interests</h2>
        <p className="info">Content creation, Music, Food, Travel</p>
      </div>
    </div>
  );
}
