const path = require('path');

const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicpath = path.join(__dirname,'../public');
const port = process.env.port || 7081;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

// app.get('/node', function(req, res){
//     res.sendFile(__dirname + '/index.html');
//   });

app.use(express.static(publicpath));

io.on('connection',(socket)=>{
    console.log('New user connected');

    socket.on('disconnect',()=>{
        console.log('user disconnected');
    });


    socket.on('onopen',()=>{
        console.log('user disconnected');
    });
    
    socket.on('send',(message)=>{
        socket.emit('message',message);
       
    });


    


});

server.listen(port,() =>{
    console.log(`Server is up on port ${port}`);
})

