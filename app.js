var express = require('express');
var todocontroller = require('./controllers/todocontroller')

var app = express();

//set up template engine
//app.set('views', __dirname+'\\views');
app.set('view engine','ejs');

//static files 
 app.use(express.static('./public'));


//fire controllers
todocontroller(app);

//listen to a port 
app.listen(3000);
console.log('listening to port 3000');

