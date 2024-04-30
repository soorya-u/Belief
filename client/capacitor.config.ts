import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "dev.soorya_u.belief",
  appName: "Belief",
  webDir: "dist",
  backgroundColor: "#000",
  server: {
    url: "https://belief.soorya-u.dev",
    cleartext: true,
  },
  ios: {
    allowsLinkPreview: true,
  },
};

export default config;
