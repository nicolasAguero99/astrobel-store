import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EA565B",
      },
      screens: {
        "tablet": "1000px",
        "mobile": "500px",
        "miniMobile": "360px",
      },
      animation: {
        "floatLeft": "floatLeftAnim 3s linear infinite",
        "floatRight": "floatRightAnim 3s linear infinite",
        "floatTop": "floatTopAnim 3.8s linear infinite",
      },
      keyframes: {
        floatLeftAnim: {
          "0%, 100%": { transform: "translate(0, 0) rotate(-10deg)" },
          "25%": { transform: "translate(6px, 3px) rotate(-10deg)" },
          "50%": { transform: "translate(3px, 6px) rotate(-10deg)" },
          "75%": { transform: "translate(-6px, 3px) rotate(-10deg)" },
        },
        floatRightAnim: {
          "0%, 100%": { transform: "translate(0, 0) rotate(10deg)" },
          "25%": { transform: "translate(-6px, 3px) rotate(10deg)" },
          "50%": { transform: "translate(3px, 6px) rotate(10deg)" },
          "75%": { transform: "translate(6px, 3px) rotate(10deg)" },
        },
        floatTopAnim: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
