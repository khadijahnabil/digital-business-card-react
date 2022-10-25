import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <header>
      <img
        src="/profile-picture.jpeg"
        alt="Profile"
        width="320px"
        height="320px"
        style={{ width: "320px", height: "320px", objectFit: "cover" }}
      />
    </header>
  );
}
