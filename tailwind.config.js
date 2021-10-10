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
