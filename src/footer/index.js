var yo = require('yo-yo');
var translate = require('../translate');

var el = yo`<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 l3 center-align"><a href="#" data-activates="idiomas" class="dropdown-button btn">${translate.message('language')}</a>
        <ul id="idiomas" class="dropdown-content">
          <li><a href="#" onclick=${lang.bind(null, 'es')}>${translate.message('spanish')}</a></li>
          <li><a href="#" onclick=${lang.bind(null, 'en')}>${translate.message('english')}</a></li>
        </ul>
      </div>
      <div class="col s12 l3 push-l6 center-align">© Gram 2016</div>
    </div>
  </div>
</footer>`;

function lang(locale){
  localStorage.locale = locale;
  location.reload();
  return false;
}

document.body.append(el);
