import flowbite from "flowbite-react/tailwind";
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",flowbite.content(),],
  theme: {
    extend: {},
  },
  plugins: [],
};