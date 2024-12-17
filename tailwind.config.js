/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '430px',
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
      'md': '768px',
      'lg': '992px',
      // => @media (min-width: 992px) { ... }
      'xl': '1200px',
      '2xl': '1400px',
      // => @media (min-width: 1440px) { ... }
      '3xl': '1536px',
      '4xl': '1920px',
    },
    backgroundImage: {
        'community-img': "url('/src/assets/images/video-image.jpg')",
    }, 
    fontFamily: {
      Inter: "Inter",
      HindGuntur: "HindGuntur",
    },
    fontSize: {
      sm: ["20px", { lineHeight: "1.2", fontWeight: "400" }],
      smParag: ["20px", { lineHeight: "1.5", fontWeight: "400" }],
      regularBold: ["16px", { lineHeight: "1.5", fontWeight: "600" }],
      md:["18px", {lineHeight: "1.55", fontWeight: "400"}],
      mdBold:["18px", {lineHeight: "1.5", fontWeight: "400"}],
      smBold: ["20px", { lineHeight: "1.2", fontWeight: "500" }],
      base: ["24px", { lineHeight: "1.2", fontWeight: "400" }],
      baseParag: ["24px", { lineHeight: "1.6", fontWeight: "400" }],
      lg: ["26px", { lineHeight: "1.5", fontWeight: "600" }],
      lgReqular: ["26px", { lineHeight: "1.5", fontWeight: "400" }],
      lgList: ["42px", { lineHeight: "1.476", fontWeight: "600" }],
      xl: ["62px", { lineHeight: "1.288", fontWeight: "400"}],
      QueryXl: ["40px", { lineHeight: "1.288", fontWeight: "400"}],
      xxl: ["62px", { lineHeight: "1.313", fontWeight: "400"}],
      linklg: ["14px", { lineHeight: "1", fontWeight: "600" }],
      linkmd: ["20px", { lineHeight: "1", fontWeight: "600" }]
    },
    colors: { 
      primary: { 
        800: "#2A4A45",
        700: "#02B994",
        600: "#1AAC94",
        500: "#6d8b86",
        400: "#617975",
        300: "#aac4bf",
        200: "#C5D4CC",
        100: "#E9F9F3"
      },
      secondry: {
        700: "#0F1534",
        600: "#111F61",
        500: "#161D5C",
        400: "#EAE8E8",
        300: "#EEEDE6",
        200: "#F0F3FF"
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
        500: "#B8E1D6",
        400: "#F0FDF6"
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
      md: "12px",
      lg: "16px",
      xl: "24px",
      '2xl': "52px",
      full: "50%"
    },
    boxShadow: {
      'md': '12px 25px 48px 0px #6B877B42',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    }
  },
  plugins: [],
}

