'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-mean', function(err){
  if(err){
    console.log('failed connecting to mongodb');
  } else {
    console.log('conected to mongodb');
  }
});
