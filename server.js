var express   = require('express');
var app = express();

require('babel-core/register')({
    presets: ["react", "es2015"]
})
var React = require('react');
var ReactDOMServer = require('react-dom/server');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
