var http = require('http');
var testModule = require('./test-module');

const PORT=8080; 

function handleRequest(request, response){
  response.end(testModule.getOutput());
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
