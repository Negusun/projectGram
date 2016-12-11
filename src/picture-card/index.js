var yo = require('yo-yo');
/*var moment = require('moment');*/
if(!window.Intl){
  //si Intl no esta definido en el objeto global va a requerir la libreria (safari)
  window.Intl = require('Intl');
  //si el navegador no soporta Intl se necesita requerir los pollyfills de manera local
  require('intl/locale-data/jsonp/es.js');
}
//re querimos Intl-relative format para el formato de los Dato en el objeto global y de manera local
var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
//se requieren los idiomas desde locale
require('intl-relativeformat/dist/locale-data/es.js');

var rf = new IntlRelativeFormat('es');// se crea una instancia

//mostar los me gusta de una forma mas linda *** Se puede mejorar ***
function text(pic){
  if(pic.liked & pic.likes>1){
    return 'A ti y a '+(pic.likes-1)+' personas les gusta esto';
  }else if(pic.liked & pic.likes==2){
    return 'A ti y a una persona mas les gusta esto';
  }else if(pic.liked & pic.likes==1){
    return 'Te gusta';
  }else if(!pic.liked & pic.likes>1){
    return 'A '+(pic.likes)+' personas les gusta esto';
  }else if(!pic.liked & pic.likes<=0){
    return 'Aun a nadie le gusta esto';
  }else{
    return 'A '+(pic.likes)+' les gusta esto';
  }
}

module.exports = function pictureCard(pic) {
  var el;
  function render(picture){//si liked es true se pone la clase liked
    return yo`<div class="card ${picture.liked ? 'liked' : ''}">
      <div class="card-image">
        <img class="activator" src="${picture.url}">
      </div>
      <div class="card-content">
        <a href="/user/${picture.user.username}" class="card-title">
          <img src="${picture.user.avatar}" class="avatar" />
          <span class="username">${picture.user.username}</span>
        </a>
        <small class="right time">${rf.format(picture.createdAt)}</small>
        <p>
          <a class="left" href="#" onclick=${like.bind(null, true)}>
            <i class="fa fa-heart-o" aria-hidden="true"></i>
          </a>
          <a class="left" href="#" onclick=${like.bind(null, false)}>
            <i class="fa fa-heart" aria-hidden="true"></i>
          </a>
          <span class="left likes">${text(picture)}</span>
        </p>
      </div>
    </div>`;
  }

  function like(liked){
      pic.liked = liked;
      pic.likes += pic.liked?1:-1;
      var newEl = render(pic);
      yo.update(el, newEl);
      return false;
  }

  el=render(pic); //el elemente incial
  return el;
}
