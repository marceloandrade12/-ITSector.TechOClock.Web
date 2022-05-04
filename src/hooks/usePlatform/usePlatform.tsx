import { Platform } from "../../types";

export const usePlatform = (): Platform => {
  let platform: Platform = Platform.web;

  if ((window as any).isNativeApp) {
    platform = Platform.mobile;
  } else if ((window as any).isDesktopApp) {
    platform = Platform.desktop;
  }

  console.log("TechOClock > Use Platform > ", platform);

  return platform;
};
