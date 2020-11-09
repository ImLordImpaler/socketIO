

var socket = io.connect('http://localhost:3000');

var username = document.getElementById("username");
    text = document.getElementById("textarea"),
    btn = document.getElementById('submitBtn'),
    user = document.getElementById('username'),
    output = document.getElementById('output');


btn.addEventListener("click", function(){
    socket.emit("text" , {
        message: text.value,
        name : user.value
    })
});

socket.on("text" , function(data){
    output.innerHTML += '<h3>'+ data.name + ':</h3> <p>' + data.message + '</p>'; 
    console.log("Yaha aa toh raha hai")
})