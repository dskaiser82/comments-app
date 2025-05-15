import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Blue
        secondary: "#6366F1", // Indigo
        success: "#10B981", // Emerald
        info: "#60A5FA", // Lighter blue
        warning: "#FBBF24", // Amber
        danger: "#EF4444", // Red
        light: "#F9FAFB", // Slightly warmer light
        dark: "#1F2937", // Navy dark
        background: "#111827", // Dark blue-gray background
      },
    },
  },
  plugins: [],
} satisfies Config;
