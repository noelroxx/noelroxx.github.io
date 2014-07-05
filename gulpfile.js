var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  connect = require('gulp-connect');

gulp.task('stylus', function () {
    gulp.src('./*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./'));
});
 
gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function() {
    gulp.watch('./*.styl', ['stylus']);
});
 
gulp.task('default', ['stylus', 'webserver', 'watch']);