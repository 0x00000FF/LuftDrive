/// <binding BeforeBuild='complile:scss, bundle:css, minify:css, clear:css, bundle:js, minify:js, clear:js' />
const gulp = require("gulp")
    , sass = require("gulp-sass")(require("sass"))
    , concat = require("gulp-concat")
    , clean = require("gulp-clean")
    , cssmin = require("gulp-cssmin")
    , jsmin = require("gulp-jsmin")
    , uglify = require("gulp-uglify")
    , staticRoot = "wwwroot/"
    , cssTarget = staticRoot + "Styles/"
    , cssTargetFiles = cssTarget + "**/*.css"
    , cssTargetBundle = cssTarget + "LuftStyle.css"
    , jsTarget = staticRoot + "Scripts/"
    , jsTargetFiles = jsTarget + "**/*.js"
    , jsTargetBundle = jsTarget + "LuftScript.js";


//
//
//   SASS TO CSS STAGE
//
//

// compile SASS sheets into CSS
gulp.task("complile:scss",
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
        .pipe(gulp.dest(staticRoot)));

// clear intermediate files
gulp.task("clear:css",
    () => gulp.src(cssTarget, { read: false })
        .pipe(clean()));

/* -------------------------------------------------------- */

// bundle JS files into one file
gulp.task("bundle:js",
    () => gulp.src(["Scripts/**/*.js", jsTargetFiles])
        .pipe(concat("LuftScript.js"))
        .pipe(gulp.dest(jsTarget)));

// minify and complete
gulp.task("minify:js",
    () => gulp.src(jsTargetBundle)
        .pipe(jsmin())
        .pipe(uglify())
        .pipe(gulp.dest(staticRoot)));

// clear intermediate files
gulp.task("clear:js",
    () => gulp.src(jsTarget, { read: false })
        .pipe(clean()));
