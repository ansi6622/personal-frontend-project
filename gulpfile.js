var gulp   = require('gulp');
var sass   = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('src/Style/main.Style')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function(){
  gulp.watch('src/Style/**/*Style',['sass'])
});

gulp.task('default', ['sass', 'watch']);