import React from "react";
import "./Button.css";

const Button = ({ type, children, color, handleClick }) => {
  const bold = {
    background: "red",
    color: "white",
    borderColor: "red",
  };

  const outline = {
    background: "black",
    color: "white",
  };

  return (
    <button
      type={type}
      style={color === "outline" ? bold : outline}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
