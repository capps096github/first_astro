/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "kalya-light": "#FCD286",
        "kalya-brown": "#371500",
        "kalya-bg": "#fff9ee",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
