/**
 * Index.js se encarga de la ruta
 */
var page = require('page');
var main = $('#main-container');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next){
  title('Gram - Home');

  var pictures = [
    {
      'user': {
        'username': 'Negusun',
        'avatar': 'https://instagram.fscl8-1.fna.fbcdn.net/t51.2885-19/s150x150/15258639_149039972244650_5598047879546535936_a.jpg'
      },
      'url': 'office.jpg',
      'likes': 1,
      'liked': true,
      'createdAt': new Date()
    },
    {
      'user': {
        'username': 'Negusun',
        'avatar': 'https://instagram.fscl8-1.fna.fbcdn.net/t51.2885-19/s150x150/15258639_149039972244650_5598047879546535936_a.jpg'
      },
      'url': 'office.jpg',
      'likes': 0,
      'liked': false,
      'createdAt': new Date().setDate(new Date().getDate()-10)
    },
    {
      'user': {
        'username': 'Negusun',
        'avatar': 'https://instagram.fscl8-1.fna.fbcdn.net/t51.2885-19/s150x150/15258639_149039972244650_5598047879546535936_a.jpg'
      },
      'url': 'office.jpg',
      'likes': 5,
      'liked': true,
      'createdAt': new Date(new Date().getDate()-5)
    },
    {
      'user': {
        'username': 'Negusun',
        'avatar': 'https://instagram.fscl8-1.fna.fbcdn.net/t51.2885-19/s150x150/15258639_149039972244650_5598047879546535936_a.jpg'
      },
      'url': 'office.jpg',
      'likes': 34,
      'liked': true,
      'createdAt': new Date(new Date().getDate()-13)
    }
  ];

  main.empty().append(template(pictures));
});
