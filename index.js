var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    db = require('./models');
;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res) {
  res.render('index');
});

app.post('/', function(req, res) {
  var fullName = req.body.fullName,
      email = req.body.email,
      message = req.body.message

  db.response.create({ fullName: fullName, email: email, message: message }).then(function(data) {
    console.log('your data base been successfully recorded.');
  });
})
//404 page, using Express middleware
app.use(function(req, res, next) {
  res.status(404).send('Error');
  next();
});

var port = 3000
app.listen(process.env.PORT || port, function() {
  console.log("You're listening to the smooth sounds of port " + port);
});