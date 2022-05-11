import React from "react";
import { RenderComponent } from "../renderComponent";
import { ButtonDesktop } from "./button.desktop";

export interface ButtonProps {
  onClick: () => void;
  text: string;
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
