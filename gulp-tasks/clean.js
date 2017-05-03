var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean:dist', function(){
  return gulp.src("dist")
    .pipe(clean());
});