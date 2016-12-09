/**
 * Tareas para el hacer el bundle
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var clean = require('gulp-clean-css');

gulp.task('styles', function(){
  gulp.src('index.scss')
    .pipe(sass())
    .pipe(clean({compatibility: 'ie8'}))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'));
});

gulp.task('assets', function(){
  gulp.src('assets/*')//glob expresiones regulares para apuntar archivos
  .pipe(gulp.dest('public'));
});

gulp.task('default', ['styles', 'assets']);
