const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // purge: [],
  purge: {
    content: ["./src/**/*.html"],
    safelist: [
      // Classes that appear in cart once there are items in it
      // Note: some of these are also on the page elsewhere, I'm just being overly careful...
      "bg-orange",
      "flex",
      "flex-col",
      "flex-shrink",
      "font-bold",
      "gap-4",
      "h-4",
      "h-auto",
      "items-center",
      "justify-between",
      "justify-center",
      "p-5",
      "rounded-lg",
      "text-black",
      "text-center",
      "text-gray-dark",
      "text-white",
      "truncate",
      "w-4",
      "w-14",
      "w-48",
      "w-full",
    ],
  },
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          light: "#ffeee2",
          DEFAULT: "#ff731b",
          active: "#ffab6a",
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
        gray: "0px 20px 50px -20px rgba(29, 32, 38, 0.503143)",
      },
      spacing: {
        0.25: "3px",
        18: "72px",
      },
      fontSize: {
        xxs: ["10px", "10px"],
      },
      fill: (theme) => ({
        orange: theme("colors.orange.active"),
        black: theme("colors.black"),
      }),
      flex: {
        100: "0 0 100%",
        "one-third": "0 0 30%",
        "two-thirds": "0 0 66%",
      },
    },
    fontFamily: {
      "kumbh-sans": ['"Kumbh Sans"'],
    },

    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderColor: ["active"],
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
