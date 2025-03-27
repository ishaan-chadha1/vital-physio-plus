/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(222.2, 84%, 4.9%)',
        border: 'hsl(240, 5.9%, 90%)',
        input: 'hsl(240, 5.9%, 90%)',
        ring: 'hsl(240, 5%, 64.9%)',
        muted: 'hsl(240, 4.8%, 95.9%)',
        'muted-foreground': 'hsl(240, 3.8%, 46.1%)',
        popover: 'hsl(0, 0%, 100%)',
        'popover-foreground': 'hsl(222.2, 84%, 4.9%)',
        card: 'hsl(0, 0%, 100%)',
        'card-foreground': 'hsl(222.2, 84%, 4.9%)',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.3rem',
        sm: '0.2rem',
      },
    },
  },
  plugins: [],
}
