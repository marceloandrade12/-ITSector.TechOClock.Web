import React from "react";
import { usePlatform } from "../../hooks";

export interface RenderComponentComponents {
  /** Set Component to be rendered when Platform is Desktop */
  desktop: React.ReactNode;
  /** Set Component to be rendered when Platform is Mobile */
  mobile: React.ReactNode;
  /** Set Component to be rendered when Platform is Web */
  web: React.ReactNode;
}

export interface RenderComponentProps {
  /** Set components to be rendered depending on platform*/
  components: RenderComponentComponents;
}

export const RenderComponent: React.FC<RenderComponentProps> = ({
  components,
}) => {
  const platform = usePlatform();

  try {
    const component = components[platform];
    return <>{component}</>;
  } catch (err) {
    return null;
  }
};
