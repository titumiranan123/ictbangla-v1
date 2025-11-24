import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#29AE48",
        secondary: "#8A8A8A",
        tersiary: "#313131",
        textPrimary: "#383e4e",
      },
    },
  },
} satisfies Config;
