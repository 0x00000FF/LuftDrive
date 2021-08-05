/// <binding BeforeBuild='complile:scss, bundle:css, minify:css, clear' />
const gulp = require("gulp")
    , sass = require("gulp-sass")(require("sass"))
    , concat = require("gulp-concat")
    , clean = require("gulp-clean")
    , cssmin = require("gulp-cssmin")
    , cssRoot = "./Static/"
    , cssTarget = cssRoot + "Styles/"
    , cssTargetFiles = cssTarget + "*.css"
    , cssTargetBundle = cssTarget + "LuftStyle.css";


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
        .pipe(gulp.dest(cssRoot)));

// clear intermediate files
gulp.task("clear",
    () => gulp.src(cssTarget, { read: false })
        .pipe(clean()));


//
//
//    TS TO JS STAGE
//
//