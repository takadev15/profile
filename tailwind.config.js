// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms")], 
  theme: {
    colors: {
      white: '#FFFFFF',
      gray: {
        dark: '#212529',
        DEFAULT: '#c0ccda',
        light: '#343A40',
        lightest: '#E5E7EB',
      }
    }
  }
};
