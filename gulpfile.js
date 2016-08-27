var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 8003,
        livereload: true
    });
});

gulp.task('styles', function() {
    return gulp.src('src/sass/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4', 'Firefox < 20'],
            cascade: true,
            remove:true
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('images',function(){
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});


gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['styles']);
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/images/*',['images']);
});


gulp.task('default', ['connect', 'watch']);

gulp.task('build',['styles','scripts','images']);
