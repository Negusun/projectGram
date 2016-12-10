var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');

module.exports = function (pics){
  var el = yo`<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${pics.map(function(pic){
          return picture(pic);
        })}
      </div>
    </div>
  </div>`;
  return layout(el);
}

//se va a exportar el layout con todo el header mas lo que tenga content para ser mostrado por el index.js en la ruta
