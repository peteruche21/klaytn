const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        ...fontFamily,
        header: ["Montserrat", ...fontFamily.sans],
        sans: [
          "Roboto",
          "ui-sans-serif",
          "system-ui",
          "Open Sans",
          ...fontFamily.sans,
        ],
      },
      colors: {
        yellow: {
          base: "#FFB400",
          dark: "#F57E1F",
        },
        blue: {
          light: "#38B6FF",
          deep: "#10294C",
        },
      },
      spacing: {
        6.5: "1.270rem",
        120: "36rem",
      },
    },
  },
  // plugins: [require("@tailwindcss/typography")],
};
