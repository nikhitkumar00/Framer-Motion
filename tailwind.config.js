/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        jungle1: "url('https://parallaxnikhit.netlify.app/images/jungle1.png')",
        jungle2: "url('.https://parallaxnikhit.netlify.app/images/jungle2.png')",
        jungle3: "url('.https://parallaxnikhit.netlify.app/images/jungle3.png')",
        jungle4: "url('.https://parallaxnikhit.netlify.app/images/jungle4.png')",
        jungle5: "url('.https://parallaxnikhit.netlify.app/images/jungle5.png')",
        logo: "url('./images/logo_land.png')",
        man: "url('./images/man_on_mountain.png')",
        mountain: "url('./images/mountains.png')",
        background: "url('./images/background.png')",
      },
    },
  },
  plugins: [],
};
