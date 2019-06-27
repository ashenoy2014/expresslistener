var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


// routes
app.get('/beacon', function(req, res){
	res.send("Hello!");
});

app.post('/beacon', function(req, res) {
	var paramCounter = 0;
	var verboseSet = req.body.hasOwnProperty("verbose") ? true : false;
	console.log(`Verbose set: ${verboseSet}`);
	var verboseText = "";

	for(var qParam in req.body) {
		if (req.body.hasOwnProperty(qParam)) {
			paramCounter++;


			if (verboseSet) {
				//verboseText += `&${req.body[qParam]}`;
				verboseText += `&${qParam}`;
			}
		}
	}

	res.send(`Hello! Your POST request has ${paramCounter} parameters; ` + verboseText);

	/*
	var test1 = req.body.t1;
	var test2 = req.body.t2;

	res.send(`Hello! You sent; test1: ${test1}, test2: ${test2}`);
	*/
});

app.post('/', (req, res) => {
	res.send("Success POST");

});

app.get('/', (req, res) => {
	res.send("Success GET");

});

// Start listening.
app.listen(port, () => {console.log(`Listening on port ${port}`)});
