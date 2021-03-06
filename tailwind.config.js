const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: { backgroundColor: ['responsive', 'hover', 'focus', 'active'] },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@tailwindcss/ui')({
      layout: 'sidebar'
    })
  ]
};
