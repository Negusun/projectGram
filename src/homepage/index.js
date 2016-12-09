/**
 * Index.js se encarga de la ruta
 */
var page = require('page');
var main = $('#main-container');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next){
  title('Gram - Home');
  main.empty().append(template);
});
