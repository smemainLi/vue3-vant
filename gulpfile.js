var gulp = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('upload', function() {
  return gulp.src('dist/**')
    .pipe(sftp({
      host: '10.10.21.57',
      port: 22,
      user: 'root',
      pass: 'qcloud',
      remotePath: '/opt/html-wx'
    }));
});