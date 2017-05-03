var gulp = require("gulp");

gulp.task('html', function(){
  return gulp.src("src/**/*.html")
    .pipe(gulp.dest("dist"));
});