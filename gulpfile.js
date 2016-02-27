var gulp       = require('gulp'),
    uglify     = require('gulp-uglify'),
    browserify = require('gulp-browserify');


gulp.task('module', function(){
  gulp.src(['dev/math-modules/main.js'])
  .pipe(browserify({
    ///debug: true
  }))
  //.pipe(uglify({
  //  outSourceMap: false
  //}))
  .pipe(gulp.dest('public/js'))
});

gulp.task('watch', function(){
  gulp.watch('dev/**/*.js', ['module'])
});


gulp.task('default', ['module', 'watch']);