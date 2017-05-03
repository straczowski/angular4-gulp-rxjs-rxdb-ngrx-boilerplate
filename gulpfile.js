var gulp = require('gulp');
var concat = require('gulp-concat');
//var typescript = require('gulp-typescript');
//var tsProject = typescript.createProject('config/ts-config.json');
var systemjsBuilder = require('systemjs-builder');
//var clean = require('gulp-clean');
//var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');


require("./gulp-tasks/typescript");
require("./gulp-tasks/vendors");
require("./gulp-tasks/clean");
require("./gulp-tasks/assets");
require("./gulp-tasks/sass");
require("./gulp-tasks/html");
require("./gulp-tasks/watchers");


gulp.task("build:dev", function(){
  runSequence(
    "clean:dist", 
    ["copy:vendors", "copy:assets"],
    ["transpile:ts", "sass", "html"]
  );
});
