var express = require('express');
const socket = require('socket.io');
const http = require('http')


var app = express();
const server = http.createServer(app)
server.listen(3000 , ()=>{
    console.log('Wating for connection');
}); 
const io = socket(server);


//static 
app.use(express.static('public'));


io.on('connection' , socket=>{
    console.log('User Connected' , socket.id)
    
});