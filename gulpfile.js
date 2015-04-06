var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

gulp.task('sass', function() {
    return gulp.src('static/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('static/css'));
});

gulp.task('scripts', function() {
    return gulp.src('static/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('static/js'));
});

gulp.task('watch', function() {
    gulp.watch('static/js/*.js', ['scripts']);
    gulp.watch('static/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'scripts', 'watch']);
