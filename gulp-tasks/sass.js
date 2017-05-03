var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');

gulp.task('concat:css', () =>
    gulp.src('dist/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
);

gulp.task('transpile:sass', function () {
 return gulp.src('./src/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('sass', function () {
  runSequence(
    "transpile:sass",
    'concat:css'
  )
});



