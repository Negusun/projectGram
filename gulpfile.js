/**
 * Tareas para el hacer el bundle
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var clean = require('gulp-clean-css');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

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

gulp.task('scripts', function(){
  browserify('./src/index.js')
    .transform(babel)//para que los navegadores soporten ECMAScript6
    .bundle()//genera el bundle de browserify
    .pipe(source('index.js'))//con viny-source se transforma a un archivo que entiende gulp
    .pipe(rename('app.js'))//se renombra el archivo
    .pipe(gulp.dest('public'));//se envia a el destino en public
});

gulp.task('default', ['styles', 'assets', 'scripts']);
