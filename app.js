let express = require('express');
let path = require('path');
let app = express ();

app.use(express.static(path.resolve(__dirname,"./public")));
app.listen (3000, () => console.log('Server start in http://localhost:3000'));
app.get('/', function (req, res){
    res.sendFile(path.resolve(__dirname, './views/', 'home.html'));

});

app.get('/register', function (req, res){
        res.sendFile(path.resolve(__dirname, './views/', 'register.html'));


});

app.get('/login', function (req, res){
    res.sendFile(path.resolve(__dirname, './views/', 'login.html'));


});