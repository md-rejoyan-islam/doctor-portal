/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  // eslint-disable-next-line no-undef
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
