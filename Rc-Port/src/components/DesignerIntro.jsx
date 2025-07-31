import React from "react";
import "./design.css";
import image from "../assets/image 1.png"

export default function DesignerIntro() {
  return (
    <div className="designer-intro">
      {/* Left - Image */}
      <div className="designer-image">
        <img
          src= {image} // Place this image in the public/ folder
          alt="Ibrahim Memon Memoji"
          className="designer-avatar"
        />
        <div className="designer-greeting">
          <p>
            <span className="text-muted">Hello! I am</span>{" "}
            <span className="highlight">Ibrahim Memon</span>
          </p>
          <svg
            className="greeting-arrow"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m0 0l-5.25-5.25M12 19.5l5.25-5.25"
            />
          </svg>
        </div>
      </div>

      {/* Right - Text Content */}
      <div className="designer-text">
        <p className="subheading">A Designer who</p>
        <h1 className="main-heading">
          Judges a book<br /> by its <span className="cover-word">cover</span>...
        </h1>
        <p className="caption">
          Because if the cover does not impress you what else can?
        </p>
      </div>
    </div>
  );
}
