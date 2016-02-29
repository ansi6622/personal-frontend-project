var gulp   = require('gulp');
var sass   = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('src/Style/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function(){
  gulp.watch('src/Style/**/*.scss',['sass'])
});

gulp.task('default', ['sass', 'watch']);