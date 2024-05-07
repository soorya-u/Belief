import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "dev.soorya_u.belief",
  appName: "Belief",
  webDir: "dist",
  backgroundColor: "#000",
  ios: {
    allowsLinkPreview: true,
    backgroundColor: "#000",
    scrollEnabled: true,
    path: "./mobile/ios",
  },
  android: {
    backgroundColor: "#000",
    path: "./mobile/android",
  },
};

export default config;
