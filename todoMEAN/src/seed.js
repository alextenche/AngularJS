'use strict';

var Todo = require('./models/todo.js');

var todos = [
  "learn angularjs",
  "finish MEAN app",
  "last one - JavaScript Testing",
  "complete JavaScript track"
];

todos.forEach(function(todo, index){
  Todo.find({'name': todo}, function(err, todos){
    if(!err && !todos.length){
      Todo.create({completed: false, name: todo});
    };
  });
});
