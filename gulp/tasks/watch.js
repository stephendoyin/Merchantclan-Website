const { watch, task, series, src } = require("gulp");
const browserSync = require("browser-sync").create();

task("cssInject", function () {
  return src("./app/temp/styles/styles.css").pipe(browserSync.stream());
});

task("scriptsRefresh", function (cb) {
  browserSync.reload();
  cb();
});

task("watch", function (cb) {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app",
    },
  });

  watch("./app/index.html", function (cb) {
    browserSync.reload();
    cb();
  });

  watch("./app/assets/styles/**/*.css", series("styles", "cssInject"));

  watch(
    "./app/assets/scripts/**/*.js",
    series(series("modernizr", "scripts"), "scriptsRefresh")
  );

  cb();
});
