var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  buffer = fs.readFileSync('index.html');
  response.end(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
