/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
        
    }, 
    screens: {
      
    },
    fontFamily: {
      Inter: "Inter",
    },
    fontSize: {
      sm: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
      base: ["16px", { lineHeight: "1.5", fontWeight: "400" }],
      baseBold: ["16px", { lineHeight: "1.5", fontWeight: "600" }],
      md:["18px", {lineHeight: "1.55", fontWeight: "400"}],
      mdBold:["18px", {lineHeight: "1.5", fontWeight: "400"}],
      lg: ["26px", { lineHeight: "1.5", fontWeight: "600" }],
      xl: ["34px", { lineHeight: "1.5", fontWeight: "700"}],
      linksm: ["14px", { lineHeight: "1", fontWeight: "600" }],
      linkmd: ["20px", { lineHeight: "1", fontWeight: "600" }]
    },
    colors: { 
      primary: {
        700: "#000000",
        600: "#333333",
        500: "#595959",
        300:"gba(0, 0, 0, 0.1)",
        200: "#FFFFFF99"
      },
      black: {
        700: "#000000",
      },
      white: {
        700: "#ffffff",
        600: "#FAFAFA"
      },
      green: {
        700: "#B8E1D680",
        600: "#00A69D",
        500: "#B8E1D6"
      },
      blue: {
        700: "#09273B"
      },
      gray: {
        700: "#4C5768",
        600: "#7E8299",
        500: "#666666",
        400: "#D9D9D9",
        300: "#858585",
        200: "#C7C7C7",
        100: "#C8C8C8"
      },
    },
    borderRadius: {
      none: '0',
      sm: "4px",
      default: ".25rem",
      lg: ".5rem",
      xl: "100px",
      full: "50%"
    }
  },
  plugins: [],
}

