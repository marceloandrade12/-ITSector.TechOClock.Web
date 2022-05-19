import React from "react";
import { RenderComponent } from "../renderComponent";
import { ButtonDesktop } from "./button.desktop";

export interface ButtonProps {
  /** Method to be handle when button is clicked */
  onClick: () => void;
  /** set the button text */
  text: string;
  /** allow customize button */
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <RenderComponent
      components={{
        desktop: <ButtonDesktop {...props} />,
        web: <ButtonDesktop {...props} />,
        mobile: <ButtonDesktop {...props} />,
      }}
    />
  );
};
