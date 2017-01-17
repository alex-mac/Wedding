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
  db.response.create({ fullName: 'Brian', email: 'Hague', message: "orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }).then(function(data) {
  // you can now access the newly created task via the variable data
});
})
//404 page, using Express middleware
app.use(function(req, res, next) {
  res.status(404).send('Error');
  next();
});

var port = 3000
app.listen(port, function() {
  console.log("You're listening to the smooth sounds of port " + port);
});