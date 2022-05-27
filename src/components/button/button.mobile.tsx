import React from "react";
import { ButtonProps } from ".";

export const ButtonMobile: React.FC<ButtonProps> = ({
  onClick,
  text,
  style,
}) => {
  return (
    <button
      style={{
        display: "inline-block",
        padding: "0.3em 1.2em",
        margin: "0 0.3em 0.3em 0",
        borderRadius: "2em",
        boxSizing: "border-box",
        textDecoration: "none",
        fontWeight: 300,
        color: "#FFFFFF",
        backgroundColor: "blue",
        textAlign: "center",
        transition: "all 0.2s",
        ...style,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
