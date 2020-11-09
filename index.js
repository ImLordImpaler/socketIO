var express = require('express');
const socket = require('socket.io');
const http = require('http');
const { v4 : uuidV4} = require('uuid');


var app = express();
const server = http.createServer(app)
server.listen(3000 , ()=>{
    console.log('Wating for connection');
}); 
const io = socket(server);


//static 
app.use(express.static('public'));


app.get('/' , (req , res)=>{
    res.redirect(`/${uuidV4()}`)
})

io.on('connection' , socket=>{
    console.log('User Connected' , socket.id)

    socket.on("text", function(data){
        io.sockets.emit('chat' , data)
    })

});