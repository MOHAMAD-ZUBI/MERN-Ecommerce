import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#191919",
        secondary: "white",
        primary2: "#C1DCDC",
        secondary2: "#807D7E",
      },
      maxWidth: {
        layout: "1536px",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
