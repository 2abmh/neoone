import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#10171D",
        ink: "#18252D",
        mist: "#EDF3F2",
        porcelain: "#F8FAF7",
        fern: "#2E6B4F",
        jade: "#39A179",
        amber: "#F3B547",
        coral: "#E66A4E",
      },
      boxShadow: {
        soft: "0 22px 70px rgba(16, 23, 29, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
