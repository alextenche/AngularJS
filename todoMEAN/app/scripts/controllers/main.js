'use strict';

var angular = require('angular');

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService){

	$scope.helloConsole = dataService.helloConsole;

	$scope.learn = function(){
		console.log('input changed');
	};

	dataService.getTodos(function(response){
		$scope.todos = response.data.todos;
	});

	$scope.addTodo = function(){
		var todo = {name: 'this is a new todo'};
		$scope.todos.unshift(todo);
	};



	$scope.deleteTodo = function(todo, $index){
		dataService.deleteTodo(todo);
		$scope.todos.splice($index, 1);
	};

	$scope.saveTodos = function(){
		var filteredTodos = $scope.todos.filter(function(todo){
			if(todo.edited){
				return todo;
			}
		});
		dataService.saveTodos(filteredTodos);
	};

})
