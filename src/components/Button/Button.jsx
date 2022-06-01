import React from "react";
import "./Button.css";

const Button = ({ type, children, color, handleClick }) => {
  const bold = {
    background: "red",
    color: "white",
  };

  const outline = {
    background: "black",
    color: "white",
  };

  return (
    <button style={color === "bold" ? bold : outline} type={type}>
      {children}
    </button>
  );
};

export default Button;
