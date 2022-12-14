import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <h1 className="aboutTitle">ABOUT US</h1>
        <h4 className="aboutDesc">
          Hello !! Welcome to <span>LITTLE THOUGHTS</span>.
          
        </h4>
        <p>
        <br/>
          <span>Little Thoughts </span>is a blogging platform which provides you
          interesting content, which you will like very much.<br/> We're dedicated to
          providing you the best of
          <span> fashion, health, tourism, self care</span> blogs with a focus on<br/>
          dependability and health & self care.We're working to turn our passion
          for fashion, health, tourism & self care <br/>into a booming online
          website. We hope you enjoy our blogs as much as we enjoy offering them
          to you.
        </p>
        <h2>Want to write a blog??</h2>
        <Link to="/write">
          <button>Start writing a blog</button>
        </Link>
      </div>
    </div>
  );
}
