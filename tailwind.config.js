/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact-background': "url('https://img.freepik.com/free-photo/top-view-blue-monday-concept-composition-with-telephone_23-2149139103.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724198400&semt=ais_hybrid')",
        "header-bg-1": "./src/assets/header-img1.png",
        "work-process" : "url('https://img.freepik.com/free-vector/people-digital-health_24908-57030.jpg?t=st=1724480504~exp=1724484104~hmac=29ed6b48ae3e992a26e52dda87cd109d84cae3f583f8f8cf0fb8bb06fbba5507&w=740')"
      },
      "font-family": {
        "regular": ["Roboto"],
      }
    },
  },
  plugins: [],
}

