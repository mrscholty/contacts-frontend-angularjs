var gulp = require('gulp');

gulp.task('default', ['copy'], function () {
    console.log('done');
});

gulp.task('copy', function () {

    gulp.src([
        './src/**/*'
    ])
        .pipe(gulp.dest('./build'));
});