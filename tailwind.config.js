/** @type {import('tailwindcss').Config} */

const pxToRem = (px) => `${px / 16}rem`;
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "360px",
      tablet: "768px",
      desktop: "1024px",
      "wide-screen": "1740px",
      "under-desktop": { max: "1023px" },
    },
    extend: {
      spacing: {
        ...Array.from({ length: 100 }, (_, index) => index + 1).reduce(
          (acc, px) => {
            acc[`${px}pxr`] = pxToRem(px);
            return acc;
          },
          {}
        ),
      },
    },
  },
  plugins: [],
};
