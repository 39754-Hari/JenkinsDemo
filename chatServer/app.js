var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
var port = process.env.PORT || 3000;
var request = require('request');
//global.recentInput = "";
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json());

global.incidentParams = {};
var server = app.listen(port,function(){
	console.log("Application started listening port "+port);
	
});

app.get("/",function(req, res){
	res.end("chat server running...");
})

app.post("/chatServer",function(req, res){
	var options = { 
				method: 'POST',
				url: '',
				headers:{ 					
					'content-type': 'application/json' 
				},
				body:req.body.result.parameters,										
				json: true 
			}; 			
			//delete incidentTickets[sessId];		
			request(options, function (error, response, body) {
				console.log(body);
				res.json(body).end();
			});
})


