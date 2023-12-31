import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/product/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {}
}
export default config
