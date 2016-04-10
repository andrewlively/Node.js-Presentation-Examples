const gulp = require(`gulp`);
const concat = require(`gulp-concat`);
const sass = require(`gulp-sass`);

gulp.task(`css`, () => {
  return gulp
    .src(`./src/resources/scss/**/*`)
    .pipe(sass().on(`error`, sass.logError))
    .pipe(concat(`style.css`))
    .pipe(gulp.dest(`./public/css`));
});

gulp.task(`default`, [`css`]);
