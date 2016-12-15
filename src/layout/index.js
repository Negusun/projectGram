var yo = require('yo-yo');

module.exports = function layout(content) {
  //yo-yo no maneja mas de un elemento asi que se envuelve todo en un div
    return  yo`<div class="content">
        ${content}
      </div>`;
}
