import type { Config } from "tailwindcss";

// Only try to load @tailwindcss/typography if it is available
let plugins = [];
try {
  const typography = require('@tailwindcss/typography');
  plugins.push(typography);
} catch (e) {
  console.log('Typography plugin not available, skipping...');
}

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: plugins,
} satisfies Config;
