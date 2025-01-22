/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1B262C",
        secondary: "#1d212a",
        tertiary: "#1d212a",
        sec: "#623ea5",
      },
      fontFamily: {
        'elronmono': ['Elronmonospace', 'sans-serif'],
        'consolaMono': ['ConsolaMonoBold', 'sans-serif'],
        'monaco': ['monaco', 'sans-serif'],
        'sfMono': ['SFMonoRegular', 'sans-serif'],
        'liberationMono': ['LiberationMonoRegular', 'sans-serif'],
        'varien': ["varien", 'sans-serif'],
      },
      boxShadow: {
        card: "",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      screens: {
        xs: "450px",
        md: "850px",
      },
    },
  },
  plugins: [],
}

