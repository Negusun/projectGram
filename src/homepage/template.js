var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');
var translate = require('../translate').message;
var request = require('superagent');

module.exports = function (pics){
  var el = yo`<div class="container timeline">
  <div class="row">
    <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
      <form enctype="multipart/form-data" class="form-upload" id="formUpload" onsubmit=${onsubmit}>
        <div id="fileName" class="fileUpload btn btn-flat cyan">
          <span><i class="fa fa-camera" aria-hidden="true"></i> ${translate('upload-picture')}</span>
          <input name="picture" id="file" type="file" class="upload" onchange=${onchange} />
        </div>
        <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate('upload')}</button>
        <button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${cancel}><i class="fa fa-times" aria-hidden="true"></i></button>
      </form>
    </div>
  </div>
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

function onsubmit(ev){
  ev.preventDefault();//no se hara el request (action y ruta)
  var data = new FormData(this);//obtener la data del formulario
  request
    .post('/api/pictures')
    .send(data)
    .end(function (err, res){
      console.log(arguments);
    })
}

function toggleButtons(){
  $("#fileName").toggleClass('hide');
  $("button").toggleClass('hide');
}

function cancel(){
  toggleButtons();
  $("#formUpload").trigger("reset");
}

function onchange(){
  toggleButtons();
}

//se va a exportar el layout con todo el header mas lo que tenga content para ser mostrado por el index.js en la ruta
