import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <button type="button" className="btn btn-secondary small-links">
        <i className="fa-brands fa-twitter small-icons" />
      </button>
      <button type="button" className="btn btn-secondary small-links">
        <i className="fa-brands fa-instagram small-icons" />
      </button>
      <button type="button" className="btn btn-secondary small-links">
        <i className="fa-brands fa-github small-icons" />
      </button>
    </footer>
  );
}
