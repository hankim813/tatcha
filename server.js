// Set up express server

var express 	= require('express');
var port 			= process.env.PORT || 3000;
var app 			= express();

// Require configuration file

app.use(express.static(__dirname + '/app'));

// Require and boot up the server

app.listen(port);

console.log('Magic always happens on port ', port);