
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
var port = process.env.PORT || 8001;

//global.recentInput = "";
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json());

global.incidentParams = {};
var server = app.listen(port,function(){
	console.log("Application started listening port "+port);
	
});


app.get("/",function(req, res){	
	res.end("microServices server Running...");
});

app.post("/microService",function(req, res){
	var rsp ={			
			"speech": "",					
			"messages": [{
			  "type": 0,
			  "platform": "slack",
			  "speech": "Hi, this is ur data : "+req.body.name
			},				
			{
			  "type": 0,
			  "speech": ""
			}]
		};
	res.json(rsp).end();	
})