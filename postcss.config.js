const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    ...(process.env.NODE_ENV === "production" ? [cssnano] : []),
    ...(process.env.NODE_ENV === "production" ? [autoprefixer] : []),
  ],
};
