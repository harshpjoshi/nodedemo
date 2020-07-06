var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
   res.send('{"message":"sucessfully hosted"}');
})

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
