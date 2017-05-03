var gulp = require('gulp');

gulp.task('copy:vendors', function(){
  return gulp
    .src([
      "node_modules/zone.js/**/*",
      "node_modules/systemjs/**/*",
      "node_modules/core-js/**/*",
      "node_modules/rxjs/**/*",
      "node_modules/@angular/**/*",
      "node_modules/@ngrx/**/*",
      //"node_modules/angular-in-memory-web-api/**/*",
      "node_modules/systemjs-plugin-text/**/*",
      "node_modules/babel-polyfill/**/*",

      //RXDB dependencies
      //"node_modules/rxdb/**/*",
      //"node_modules/object-path/**/*",
      //"node_modules/random-token/**/*",
      //"node_modules/clone/**/*",
      //"node_modules/is-my-json-valid/**/*",
      //"node_modules/pouchdb-core/**/*",
      //"node_modules/pouchdb-find/**/*",
      //...

    ],{base: './node_modules/'})
    .pipe(gulp.dest('dist/lib'));
})
