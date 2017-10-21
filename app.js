var express = require('express');

var bodyParser = require('body-parser');

var app = express();


app.get('/contatos', function(req, res){

	var c = [
		{
			"nome":"michael",
			"id":"2",
			"tel":"88888889"
		},
		{
			"nome":"michael",
			"id":"2",
			"tel":"88888889"
		
		},
		{

		}

	] 
});


app.get('/', function(req,res){
	res.send('Hello World');

});

app.listen(3000, function(){
	console.log('server runnning');
});