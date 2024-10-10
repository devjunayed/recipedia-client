import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7A59", // Coral Red (Primary)
        secondary: "#FFC857", // Sunflower Yellow (Secondary)
        background: "#FAF7F5", // Soft Cream (Background)
        text: "#333333", // Charcoal Gray (Text)
        muted: "#7A9E9F", // Sage Green (Muted Accent)
        error: "#E63946", // Crimson Red (Error)
        success: "#5CA37D", // Fresh Mint (Success)
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
