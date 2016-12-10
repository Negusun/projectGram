var yo = require('yo-yo');
var layout = require('../layout');

var template = yo`<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
      </div>
    </div>
  </div>`;

//se va a exportar el layout con todo el header mas lo que tenga content para ser mostrado por el index.js en la ruta
module.exports = layout(template);
