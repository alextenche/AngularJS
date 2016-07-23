'use strict';

angular.module('todoListApp')
.service('dataService', function($http){
	this.helloConsole = function(){
		console.log("service working !");
	};

	this.getTodos = function(callback){
		$http.get('./mock/todos.json')
		.then(callback);
	};

	this.deleteTodo = function(todo){
		console.log('delete - ' + todo.name);
	};

	this.saveTodos = function(todos){
		console.log('saved - ' + todos.length);
	}
});
