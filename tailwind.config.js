/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        jungle1: "url('./src/assets/jungle1.png')",
        jungle2: "url('./src/assets/jungle2.png')",
        jungle3: "url('./src/assets/jungle3.png')",
        jungle4: "url('./src/assets/jungle4.png')",
        jungle5: "url('./src/assets/jungle5.png')",
        logo: "url('./src/assets/logo_land.png')",
        man: "url('./src/assets/man_on_mountain.png')",
        mountain: "url('./src/assets/mountains.png')",
        background: "url('./src/assets/background.png')",
      },
    },
  },
  plugins: [],
};
