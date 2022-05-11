import { Platform } from "../../types";

declare global {
  interface Window {
    isDesktopApp: boolean;
    isNativeApp: boolean;
    electron: any;
    ReactNativeWebView: {
      postMessage: (obj: any) => void;
    };
  }
}

export const usePlatform = (): Platform => {
  let platform: Platform = Platform.web;

  if (window.isNativeApp) {
    platform = Platform.mobile;
  } else if (window.electron) {
    platform = Platform.desktop;
  }

  console.log("TechOClock > Use Platform > ", platform);

  return platform;
};
