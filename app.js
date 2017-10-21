var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var cassandra = require('cassandra-driver');

app.use(bodyParser.json());

var client = new cassandra.Client({contactPoints:['127.0.0.1'], keyspace:'trabspd'});



client.connect(function(err){
	console.log(err);
});


app.get('/contatos', function(req, res){

	var contatos = [
		{
			"nome":"michael",
			"id":"2",
			"tel":"88888889"
		},
		{
			"nome":"kate",
			"id":"3",
			"tel":"84777452"
		
		},
		{
			"nome":"marie",
			"id":"4",
			"tel":"87741011"
		
		}

	];

	res.send(JSON.stringify(contatos)); 
});

app.get('/contatozin', function(req, res){


	client.execute("SELECT * FROM trabspd.contatos WHERE ID = 2", function(err, result){
		
				if(err){
					res.send(err);
				}

				var user = result.rows[0];

				res.json({name:user.nome});
			
		

	});

});


app.listen(3000, function(){
	console.log('server runnning');
});