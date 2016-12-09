/**
 * Index.js se encarga de la ruta
 */
var page = require('page');
var main = $('#main-container');
var template = require('./template');
var title = require('title');

page('/signin', function(ctx, next){
  title('Gram - Sign In');
  main.empty().append(template);
});
