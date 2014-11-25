var gulp = require('gulp'),
gutil = require('gulp-util'),
webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('app/dev/js/**/*')
});

gulp.task('html', function() {
  gulp.src('app/dev/*.html')
});

gulp.task('css', function() {
  gulp.src('app/dev/css/*.css')
});

gulp.task('watch', function() {
  gulp.watch('app/dev/js/**/*', ['js']);
  gulp.watch('app/dev/css/*.css', ['css']);
  gulp.watch(['app/dev/*.html',
  'app/dev/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('app/dev/')
  .pipe(webserver({
    livereload: true,
    open: true
  }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
