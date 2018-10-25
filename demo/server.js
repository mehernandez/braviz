const express = require('express'),
path = require('path'),
app = express(),
port = 9000;

app.use(express.static(path.resolve(__dirname, 'ui')));
app.listen(port);

console.log('App started on: ' + port);
