import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactWrapper">
        <h1 className="contactTitle">Connect with us!!</h1>
        <div className="contactIcons">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link conIcon"
          >
            <i class="fab fa-instagram-square"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/"
            rel="noopener noreferrer"
            target="_blank"
            className="link conIcon"
          >
            <i class="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="link conIcon"
          >
            <i class="fab fa-github-square"></i>
          </a>

          <a
            href="https://m.facebook.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="link conIcon"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
