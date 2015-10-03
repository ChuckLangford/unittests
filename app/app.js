var http = require('http');
var testModule = require('./test-module');
var callbackModule = require('./callback-module');

const PORT=8080; 

function handleRequest(req, res){
  if (req.url === '/') {
    res.end(testModule.getOutput());
  } else if (req.url === '/callback') {
    callbackModule.exposedRouteFunction(req, res);
  } else {
    res.end('Invalid Route');
  }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
