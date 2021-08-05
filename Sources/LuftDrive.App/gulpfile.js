/// <binding BeforeBuild='complile:less, bundle:css, minify:css' />
const gulp = require("gulp")
    , sass = require("gulp-sass")
    , concat = require("gulp-concat")
    , clean = require("gulp-clean")
    , cssmin = require("gulp-cssmin")
    , cssRoot = "./Static/"
    , cssTarget = cssRoot + "Styles/"
    , cssTargetFiles = cssTarget + "*.css"
    , cssTargetBundle = cssTarget + "LuftStyle.css";

// compile LESS sheets into CSS
gulp.task("complile:less",
    () => gulp.src("Styles/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest(cssTarget)));

// bundle CSS files into one file
gulp.task("bundle:css",
    () => gulp.src(cssTargetFiles)
        .pipe(concat("LuftStyle.css"))
        .pipe(gulp.dest(cssTarget)));

// minify and complete
gulp.task("minify:css",
    () => gulp.src(cssTargetBundle)
        .pipe(cssmin())
        .pipe(gulp.dest(cssRoot)));

// clear intermediate files
gulp.task("clear"),
    () => gulp.src(cssTarget, { read: false })
        .pipe(clean()));