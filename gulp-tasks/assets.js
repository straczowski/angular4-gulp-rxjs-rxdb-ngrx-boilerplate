var gulp = require('gulp');

gulp.task('copy:assets', function(){
  return gulp
    .src([
      "assets/index.html",
      "assets/system.config.js",
      "assets/systemjs-angular-loader.js",
    ])
    .pipe(gulp.dest('dist'));

})


/*gulp.task('copy:systemjs', ['copy:systemjs:plugins'], function(){
  return gulp
    .src([
      "assets/system.config.js",
      "assets/systemjs-angular-loader.js"
    ])
    .pipe(gulp.dest('dist'));
});*/