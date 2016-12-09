/**
 * Index.js se encarga de la ruta
 */
var page = require('page');
var main = $('#main-container');
var template = require('./template')

page('/signup', function(ctx, next){
  main.empty().append(template);
});
