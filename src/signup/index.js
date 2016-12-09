/**
 * Index.js se encarga de la ruta
 */
var page = require('page');
var main = $('#main-container');
var template = require('./template');
var title = require('title');

page('/signup', function(ctx, next){
  title('Gram - Sign Up');
  main.empty().append(template);
});
