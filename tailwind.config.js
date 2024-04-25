/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content()
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin,
    flowbite.plugin(),

  ],
}

