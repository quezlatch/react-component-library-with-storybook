/**
 * When this config is import and used as a preset the content will scan
 * this lib to see which classes it uses
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/ui-lib/lib/index.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

