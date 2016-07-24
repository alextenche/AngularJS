'use strict';

debugger;

var express = require('express');
var router = require('./api');

var app = express();

require('./database');
require('./seed');

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(3030, function(){
  console.log('server running...');
});
