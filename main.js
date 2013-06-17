// Require all the stuff needed

var http = require('http');

// Create the server

var server = http.createServer();

// Server request event

server.on('request',function(request,response){
    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World from Cloud10\n');
    
});


// Open the server for listening

server.listen(process.env.PORT);
