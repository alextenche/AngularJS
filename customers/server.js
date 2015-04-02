var express = require('express'),
	app = express();

app.configure(function(){
	app.use(express.static(__dirname, '/'));
});

app.get('/customers/:id', function(req, res){
	var customerId = parseInt(req.params.id);
	var data = {};
	for(var i=0, len = customers.length; i < len; i++){
		if(customers[i].id === customerId){
			data = customers[i];
			break;
		}
	}
	res.json(data);
});

app.get('/customers', function(req, res){
	res.json(customers);
});

app.listen(8080);

console.log('Express listening on port 8080');