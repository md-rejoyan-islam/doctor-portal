/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        doctorsTheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#C149AD",

          neutral: "#3A4256",

          "base-100": "#FFFFFF",

          info: "#93E6FB",

          success: "#80CED1",

          warning: "#EFD8BD",

          error: "#E58B8B",
        },
      },
    ],
  },
};
