import React from "react";
import "./Hero.css";

const Hero = ({ title, subtitle }) => {
  return (
    <header>
      <h1 className="title">{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </header>
  );
};

export default Hero;
