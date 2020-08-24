const postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssImport = require("postcss-import"),
  hexrgba = require("postcss-hexrgba");
const { src, task, dest } = require("gulp");
// const fontMagic = require("postcss-font-magician");

task("styles", function () {
  return src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssvars, nested, hexrgba, autoprefixer]))
    .on("error", function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(dest("./app/temp/styles"));
});
