var http = require('http'), server;
var fs = require('fs');

var choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

var outcome;
var wins = 0;
var ties = 0;
var losses = 0;



server = http.createServer(function(req, res){
	var results = {	outcome: outcome, wins: wins, losses: losses, ties: ties };
	if (req.method == 'GET' && req.url == '/'){
	res.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream('index.html').pipe(res);
	}
	else if (req.method == 'POST' && req.url == '/play/rock'){
		var choice = choices[Math.floor(Math.random() * choices.length)];
		res.writeHead(200, {"Content-Type": "application/json" });
		if (choice === 'Scissors' || choice === 'Lizard'){
			wins++;
			outcome = 'Win';
		}
		else if (choice ==='Paper' || choice === 'Spock'){
			losses++;
			outcome = 'Lose';
		}
		else {
			ties++;
			outcome = 'Tie';		
		}
		res.write(JSON.stringify(results));
		res.end();
	}
	else if (req.method == 'POST' && req.url == '/play/paper'){
		var choice = choices[Math.floor(Math.random() * choices.length)];
		res.writeHead(200, {"Content-Type": "application/json" });
		if (choice === 'Rock' || choice === 'Spock'){
			wins++;
			outcome = 'Win';
		}
		else if (choice ==='Scissors' || choice === 'Lizard'){
			losses++;
			outcome = 'Lose';
		}
		else {
			ties++;
			outcome = 'Tie';		
		}
		res.write(JSON.stringify(results));
		res.end();
	}
	else if (req.method == 'POST' && req.url == '/play/scissors'){
		var choice = choices[Math.floor(Math.random() * choices.length)];
		res.writeHead(200, {"Content-Type": "application/json" });
		if (choice === 'Paper' || choice === 'Lizard'){
			wins++;
			outcome = 'Win';
		}
		else if (choice ==='Rock' || choice === 'Spock'){
			losses++;
			outcome = 'Lose';
		}
		else {
			ties++;
			outcome = 'Tie';		
		}
		res.write(JSON.stringify(results));
		res.end();
	}
	else if (req.method == 'POST' && req.url == '/play/lizard'){
		var choice = choices[Math.floor(Math.random() * choices.length)];
		res.writeHead(200, {"Content-Type": "application/json" });
		if (choice === 'Paper' || choice === 'Spock'){
			wins++;
			outcome = 'Win';
		}
		else if (choice ==='Scissors' || choice === 'Rock'){
			losses++;
			outcome = 'Lose';
		}
		else {
			ties++;
			outcome = 'Tie';		
		}
		res.write(JSON.stringify(results));
		res.end();
	}
	else if (req.method == 'POST' && req.url == '/play/spock'){
		var choice = choices[Math.floor(Math.random() * choices.length)];
		res.writeHead(200, {"Content-Type": "application/json" });
		if (choice === 'Scissors' || choice === 'Rock'){
			wins++;
			outcome = 'Win';
		}
		else if (choice ==='Paper' || choice === 'Lizard'){
			losses++;
			outcome = 'Lose';
		}
		else {
			ties++;
			outcome = 'Tie';		
		}
		res.write(JSON.stringify(results));
		res.end();
	}
	
	
		
	
	//console.log(results);
	
	
});

server.listen(7777);

console.log("Server is listening on port 7777");