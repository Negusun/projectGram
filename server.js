//exportar express desde modules
var express = require('express');
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, './uploads')
  },
  filename: function (req, file, cb){
    cb(null, +Date.now()+'.'+ext(file.originalname))
  }
});

var upload = multer({ dest: './uploads/' });
var upload = multer({ storage: storage }).single('picture');
var app = express();
//setiar el motor de vistas pug para que renderice el html
app.set('view engine', 'pug');

//definir un nuevo middleware para servir el directorio public de manera estatica
app.use(express.static('public'));
/**
 * primer parametro ruta
 * segundo parametro una funcion que resibe dos parametros
 * uno de respuesta y otro de requerimiento
 */
app.get('/', function(rec, res){
  res.render('index', {title: 'Gram - Home'});
});

app.get('/signup', function(rec, res){
  res.render('index', {title: 'Gram - Sign Up'});
});

app.get('/signin', function(rec, res){
  //respuesta para la ruta / renderizar el index.pug
  res.render('index', {title: 'Gram - Sign In'});
});

app.get('/api/pictures', function (req, res) {

  var pictures = [
    {
      'user': {
        'username': 'Negusun',
        'avatar': 'https://instagram.fscl8-1.fna.fbcdn.net/t51.2885-19/s150x150/15258639_149039972244650_5598047879546535936_a.jpg'
      },
      'url': 'office.jpg',
      'likes': 5,
      'liked': true,
      'createdAt': Date.now()
    },
    {
      'user': {
        'username': 'Negusun',
        'avatar': 'https://instagram.fscl8-1.fna.fbcdn.net/t51.2885-19/s150x150/15258639_149039972244650_5598047879546535936_a.jpg'
      },
      'url': 'office.jpg',
      'likes': 0,
      'liked': false,
      'createdAt': Date.now()
    }
  ];

  //esperar 2 segundos antes de enviar el array
  setTimeout(function(){
    res.send(pictures);
  }, 2000);
});

app.post('/api/pictures', function (req, res){
  upload( req, res, function (err){
    if(err){
      return res.send(500, "Error uploading file");
    }
    res.send('File uploaded');
  })
})

/**
 * lanzar servidor web
 */
 app.listen(3000, function(err){
   if(err) return console.log('ERROR'), process.exit(1);
   console.log('escuchando en puerto 3000');
 });
