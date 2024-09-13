/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/page.js',
    './src/app/layout.js',
    './src/app/registry/page.js',
    './src/app/rsvp/page.js',
    './src/app/travel/page.js',
    './src/app/wedding/page.js',
    './src/components/Card.js',
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--bg-background))",
        border: "hsl(var(--border-border))",
        foreground: "hsl(var(--text-foreground))",
    },
  },
  plugins: [],
}
}