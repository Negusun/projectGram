/**
 * Se exporta el html que se mostrara
 */
var yo = require('yo-yo');
var landing = require('../landing');
var translate = require('../translate');

box = yo`<div class="col s12 m7">
   <div class="row">
     <div class="signup-box">
       <h1 class="gram">Gram</h1>
       <form class="signup-form">
         <div class="section">
          <a href="#" class="btn btn-fb hide-on-small-only">${translate.message('signup.facebook')}</a>
          <a href="#" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official" aria-hidden="true"></i> ${translate.message('signup.text')}</a>
         </div>
         <div class="divider"></div>
         <div class="section">
           <input type="text" name="username" placeholder="${translate.message('username')}">
           <input type="password" name="password" placeholder="${translate.message('password')}">
           <button type="submit" class="btn waves-effect waves-light btn-signup">${translate.message('signup.text')}</button>
         </div>
       </form>
     </div>
   </div>
   <div class="row">
     <div class="login-box">
       ${translate.message('signin.not-have-account')} <a href="/signup">${translate.message('signup.call-to-action')}</a>
     </div>
   </div>
 </div>`;

module.exports = landing(box);
