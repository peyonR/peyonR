var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
// set the folder views for views
//app.set('views',__dirname+'/views')
// use res.render to load up an ejs view file


// index page
app.get('/', function(req, res) {
  res.render('pages/index',{titulo:'MENU'});
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});
/*
app.use(function(reg,res,next){
  res.send("noo existe 404")
}) */



app.listen(8080, () => {
  console.log(`Server is listening on port 8080`)
})