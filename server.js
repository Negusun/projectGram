//exportar express desde modules
var express = require('express');
var app = express();

//setiar el motor de vistas pug para que renderice el html
app.set('view engine', 'pug');

/**
 * primer parametro ruta
 * segundo parametro una funcion que resibe dos parametros
 * uno de respuesta y otro de requerimiento
 */
app.get('/', function(rec, res){
  //respuesta para la ruta / renderizar el index.pug
  res.render('index');
});

/**
 * lanzar servidor web
 */
 app.listen(3000, function(err){
   if(err) return console.log('ERROR'), process.exit(1);
   console.log('escuchando en puerto 3000');
 });
