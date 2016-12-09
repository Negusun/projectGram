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
var watchify = require('watchify');

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

gulp.task('build', function(){
  return compile(); //solo hara el build ya que no va con el parametro watch (watch = false)
});

gulp.task('watch', function(){
  return compile(true); //se quedara a la espera de updates para hacer el rebundle en caso de cambios
});

function compile(watch){
  var bundle = watchify(browserify('./src/index.js'));

  function rebundle(){
    bundle
      .transform(babel)//para que los navegadores soporten ECMAScript6
      .bundle()//genera el bundle de browserify
      .pipe(source('index.js'))//con viny-source se transforma a un archivo que entiende gulp
      .pipe(rename('app.js'))//se renombra el archivo
      .pipe(gulp.dest('public'));//se envia a el destino en public
  }

  if(watch){
    bundle.on('update', function(){//cuando se encuentren updates llamara a rebundle y volvera a quedar en espera de updates
      console.log('---> Bundling...');
      rebundle();
    });
  }

  rebundle(); //se va a ejecutar almenos una vez al llamar a compile()
}

gulp.task('default', ['styles', 'assets', 'build']);
