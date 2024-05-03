const express= require('express');
const app = express();
const path= require('path');
const http = require('http');
const SocketIO= require('socket.io');
const server = http.createServer(app);
const io = SocketIO(server);    
app.use(express.static('public'));
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat-message', function(data){
      io.emit('chat-message', data);
    });
    socket.on('disconnected', function(){
        console.log('user disconnected');
    });
});
const PORT=process.env.PORT ||3000;

server.listen(PORT, function(){
    console.log('listening on *:3000');
});
