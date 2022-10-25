import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://twitter.com/khadijahnabil7"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" className="btn btn-secondary small-links">
          <i className="fa-brands fa-twitter small-icons" />
        </button>
      </a>
      <a
        href="https://www.instagram.com/khadeeeej/"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" className="btn btn-secondary small-links">
          <i className="fa-brands fa-instagram small-icons" />
        </button>
      </a>
      <a
        href="https://github.com/khadijahnabil"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" className="btn btn-secondary small-links">
          <i className="fa-brands fa-github small-icons" />
        </button>
      </a>
    </footer>
  );
}
