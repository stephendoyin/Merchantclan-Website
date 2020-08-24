var gulp = require("gulp"),
  del = require("del"),
  usemin = require("gulp-usemin"),
  rev = require("gulp-rev"),
  uglify = require("gulp-uglify"),
  browserSync = require("browser-sync").create(),
  cleanCSS = require("gulp-clean-css"),
  { series } = require("gulp");

gulp.task("previewDocs", function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs",
    },
  });
});

gulp.task("deleteDistFolder", function () {
  return del("./docs");
});

gulp.task("copyGeneralFiles", function () {
  var pathsToCopy = [
    "./app/**/*",
    "!./app/index.html",
    "!./app/assets/styles/**/*",
    "!./app/assets/scripts/**/*",
    "!./app/temp",
    "!./app/temp/**",
  ];

  return gulp.src(pathsToCopy).pipe(gulp.dest("./docs"));
});

gulp.task("usemin", function () {
  return gulp
    .src(["./app/index.html"])
    .pipe(
      usemin({
        css: [
          function () {
            return rev();
          },
          function () {
            return cleanCSS();
          },
        ],
        js: [
          function () {
            return rev();
          },
          function () {
            return uglify();
          },
        ],
      })
    )
    .pipe(gulp.dest("./docs"));
});
