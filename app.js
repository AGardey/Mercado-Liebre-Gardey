let express = require('express');
let path = require('path');
let app = express ();

app.set("port", process.env.PORT || 3000)

app.listen (app.get("port"),() => console.log('Server start http://localhost'+app.get("port")));

app.use(express.static(path.resolve(__dirname,"./public")));

app.get('/', function (req, res){
    res.sendFile(path.resolve(__dirname, './views/', 'home.html'));

});

app.get('/register', function (req, res){
        res.sendFile(path.resolve(__dirname, './views/', 'register.html'));


});

app.get('/login', function (req, res){
    res.sendFile(path.resolve(__dirname, './views/', 'login.html'));


});