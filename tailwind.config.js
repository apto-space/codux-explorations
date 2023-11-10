/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { body: ["Outfit"], sans: ["Outfit"] },

    extend: {
      boxShadow: {
        'card': '0px 4px 50px 0px rgba(0, 0, 0, 0.10)',
      },
      backgroundImage: {
        sunset:
          "var(--gradient-300, linear-gradient(90deg, #FF5D3F 20.24%, #FF144D 59.7%, #FE017A 100%))",
      },
      colors: {
        beige: {
          50: "#f7f5f3",
        },
        offblack: {
          900: "#363537",
        },

        purple: {
          50: "rgb(243, 246, 250)",
          100: "rgb(239, 242, 255)",
          200: "rgb(234, 237, 255)",
          300: "rgb(221, 226, 255)",
          400: "rgb(200, 208, 255)",
          500: "rgb(170, 183, 255)",
          600: "rgb(138, 156, 255)",
          700: "rgb(105, 128, 255)",
          800: "rgb(78, 105, 255)",
          900: "rgb(50, 82, 255)",
          950: "rgb(12, 45, 223)",
        },
        coral: {
          100: "rgb(252, 245, 244)",
          300: "rgb(255, 223, 216)",
          400: "rgb(255, 215, 206)",
          500: "rgb(255, 202, 191)",
          600: "rgb(255, 183, 169)",
          700: "rgb(255, 150, 130)",
          800: "rgb(255, 116, 89)",
          900: "rgb(255, 94, 63)",
          200: "rgb(255, 241, 238)",
          50: "rgb(251, 249, 249)",
          950: "rgb(232, 63, 30)",
        },
      },
    },
  },
  // plugins: [lineClamp],
};
