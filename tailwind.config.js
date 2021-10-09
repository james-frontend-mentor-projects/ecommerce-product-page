module.exports = {
  // purge: [],
  purge: ["./src/**/*.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          light: "#ffeee2",
          DEFAULT: "#ff731b",
        },
        gray: {
          "very-light": "#e4e9f2",
          light: "#f6f8fd",
          DEFAULT: "#b6bcc8",
          dark: "#69707d",
        },
        black: {
          DEFAULT: "#1d2026",
        },
      },
      boxShadow: {
        "bottom-orange": "0px 20px 50px -20px #FF7E1B",
      },
      spacing: {
        0.25: "3px",
        18: "72px",
      },
      fontSize: {
        xxs: ["10px", "10px"],
      },
    },
    fontFamily: {
      "kumbh-sans": ['"Kumbh Sans"'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
