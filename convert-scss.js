const fs = require('fs');
const scss = require('node-sass');
const autoprefixer = require('autoprefixer');
const path = require('path');
const uglifycss = require('uglifycss');

const mainScss = path.resolve(__dirname, './styles/main.scss');
const mainCss = path.resolve(__dirname, './static/main.css');

try {
  const rendered = scss.renderSync({
    file: mainScss,
  });

  const uglifiedCss = uglifycss.processString(autoprefixer.process(rendered.css).css);
  fs.writeFileSync(mainCss, uglifiedCss);
} catch (error) {
  console.log(error);
}
