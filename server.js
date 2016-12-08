//exportar express desde modules
var express = require('express');
var app = express();

/**
 * primer parametro ruta
 * segundo parametro una funcion que resibe dos parametros
 * uno de respuesta y otro de requerimiento
 */
app.get('/', function(rec, res){
  res.send('Hola mundo');
});

/**
 * lanzar servidor web
 */
 app.listen(3000, function(err){
   if(err) return console.log('ERROR'), process.exit(1);
   console.log('escuchando en puerto 3000');
 });
