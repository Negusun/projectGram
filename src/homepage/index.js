/**
 * Index.js se encarga de la ruta
 */
var page = require('page');
var main = $('#main-container');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');

page('/', header, loadPictures, function(ctx, next){
  title('Gram - Home');

  main.empty().append(template(ctx.pictures));
});

function loadPictures(ctx, next){
  request
    .get('/api/pictures')
    .end(function(err, res){//por convencion un callback que puede fallar siempre tiene como primer parametro el error
      if(err) return console.log(err);//salvamos erro si no viene null se imprime en la consola
      ctx.pictures = res.body;//setiar en el contexto la respuesta en este caso las fotos
      next();
    })
}
