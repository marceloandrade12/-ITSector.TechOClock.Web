import React from "react";
import { Platform } from "../../types";
import { usePlatform } from "../usePlatform";

interface UseNativeCommunicationOutput {
  // method to ask native to open location
  openLocation: () => void;
  // method to ask native to open contacts
  openContacts: () => void;
}

enum BRIDGE_ACTIONS {
  OPEN_CONTACTS = "OPEN_CONTACTS",
  OPEN_LOCATION = "OPEN_LOCATION",
}

export const useNativeCommunication = (): UseNativeCommunicationOutput => {
  const platform = usePlatform();

  const handleOpenLocation = React.useCallback((): void => {
    try {
      switch (platform) {
        case Platform.desktop:
          window.electron.openLocation();
          break;
        case Platform.mobile:
          window.ReactNativeWebView.postMessage(
            JSON.stringify({ type: BRIDGE_ACTIONS.OPEN_LOCATION })
          );
          break;
        default:
          alert("Web Browser - Open Location");
          break;
      }
    } catch (err) {
      console.log("Error > handleOpenLocation >>", err);
    }
  }, [platform]);

  const handleOpenContacts = React.useCallback((): void => {
    try {
      switch (platform) {
        case Platform.desktop:
          window.electron.openContacts();
          break;
        case Platform.mobile:
          window.ReactNativeWebView.postMessage(
            JSON.stringify({ type: BRIDGE_ACTIONS.OPEN_CONTACTS })
          );
          break;
        default:
          alert("Web Browser - Open Contacts");
          break;
      }
    } catch (err) {
      console.log("Error > handleOpenContacts >>", err);
    }
  }, [platform]);

  return {
    openLocation: handleOpenLocation,
    openContacts: handleOpenContacts,
  };
};
