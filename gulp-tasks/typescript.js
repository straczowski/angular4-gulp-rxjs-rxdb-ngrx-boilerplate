var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');
var tsProject = typescript.createProject('config/ts-config.json');

// Compile TypeScript app to JS
gulp.task('transpile:ts', function () {
  return gulp
    .src([
        "src/**/*.ts"/*,
        "typings/*.d.ts"*/
    ])
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('dist'));
});