var app = require('express')();
var http = require('http').Server(app);
// load socket server module
var io = require('socket.io')(http);
// set default server port
var port = process.env.PORT || 9090;

// set client index url (view)
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// handle chat messages
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

// start the server
http.listen(port, function(){
    console.log('Express server listening on %d', port);
});
