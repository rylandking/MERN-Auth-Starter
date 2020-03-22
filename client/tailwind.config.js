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
    }),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './src/layout/*.js',
        './public/index.html',
        './App.js',
        './index.js'
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  ]
};
