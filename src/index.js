var page = require('page');
var main = $('#main-container');

page('/', function(ctx, next){//dos parametros context y next
  main.html('home <a href="/signup">Signup</a>'); //home
});

page('/signup', function(ctx, next){
  main.html('signup <a href="/">Home</a>'); //signup
});

page();
