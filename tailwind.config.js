/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-to-b': 'linear-gradient(to bottom, rgba(196, 196, 196, 0), rgba(196, 196, 196, 1))',
      },
      boxShadow: {
        'custom': '0px 0px 25px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        'custom-green-200': 'rgba(17, 140, 79, 1)',
        'custom-black':'rgba(71, 71, 71, 1)',
        'black-100':'rgba(0, 0, 0, 1)',
       'custom-blue': 'rgba(0, 105, 217, 1)',
       'custom-green':'rgba(248, 251, 255, 1)',
       'custom-brown':'rgba(191, 191, 191, 1)',
       'custom-red':' rgba(255, 62, 48, 1)',
       'custom-blue-100':'rgba(60, 88, 152, 1)',
      'custom-green-100':'rgba(96, 187, 71, 1)',
      'custom-blue-200':'rgba(0, 105, 217, 1)',
      'custom-light-blue':'rgba(222, 238, 255, 1)',
      'custom-gray':'rgba(248, 251, 255, 1)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
