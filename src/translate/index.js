/*var moment = require('moment');*/
if(!window.Intl){
  //si Intl no esta definido en el objeto global va a requerir la libreria (safari)
  window.Intl = require('Intl');
  //si el navegador no soporta Intl se necesita requerir los pollyfills de manera local
  require('intl/locale-data/jsonp/es.js');
}
//re querimos Intl-relative format para el formato de los Dato en el objeto global y de manera local
var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
var IntlMessageFormat = window.IntlMessageFormat = require('intl-messageFormat');
//se requieren los idiomas desde locale
require('intl-relativeformat/dist/locale-data/es.js');

var es = require('./es');
var en = require('./en');

var MESSAGES = {};
MESSAGES.es = es;
MESSAGES.en = en;

var locale = 'es';

module.exports = {
  'message': function(text, opts){
    opts = opts || {};
    var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null);
    return msg.format(opts);
  },
  'date': new IntlRelativeFormat(locale)
}
