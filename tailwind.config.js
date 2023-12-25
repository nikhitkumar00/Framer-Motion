/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        jungle1: "url('./src/images/jungle1.png')",
        jungle2: "url('./src/images/jungle2.png')",
        jungle3: "url('./src/images/jungle3.png')",
        jungle4: "url('./src/images/jungle4.png')",
        jungle5: "url('./src/images/jungle5.png')",
        logo: "url('./src/images/logo_land.png')",
        man: "url('./src/images/man_on_mountain.png')",
        mountain: "url('./src/images/mountains.png')",
        background: "url('./src/images/background.png')",
      },
    },
  },
  plugins: [],
};
