/** @type {import('tailwindcss').Config} */
const pxToRem = (px) => `${px / 16}rem`;
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
    spacing: {
      ...Array.from({ length: 100 }, (_, index) => index + 1).reduce(
        (acc, px) => {
          acc[`${px}pxr`] = pxToRem(px);
          return acc;
        },
        {},
      ),
    },
  },
  plugins: [],
};
