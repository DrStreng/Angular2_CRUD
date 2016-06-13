var express             = require('express');
var path                = require('path');
var mongoose            = require('mongoose');
var bodyParser          = require('body-parser');

mongoose.connect('mongodb://localhost/LekiAngular', function(error) {
  if(error) {
    console.log("Blad laczenia do bazy danych: " + error);
  } else {
    console.log("Polaczona z baza danych.");
  }
});



var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(__dirname));

var routes              = require('./routes/index');
var leks                = require('./routes/leks');
app.use('/', routes);
app.use('/leks', leks);

app.get('*', function(req, res, next) {
  res.render("index.html");
});

app.listen(8888, function() {
  console.log("Nadaje na localhost:8888");
});
