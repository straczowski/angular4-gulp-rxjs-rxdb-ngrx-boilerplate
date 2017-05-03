var gulp = require("gulp");

gulp.task("watch:ts", function(){
  gulp.watch("src/**/*.ts", [ "transpile:ts" ]);
})

gulp.task('watch:sass', function () {
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('watch:html', function () {
  gulp.watch('src/**/*.html', ['html']);
});


gulp.task('watch', ['watch:sass', 'watch:ts', 'watch:html'])