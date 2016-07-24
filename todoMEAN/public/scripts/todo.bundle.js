webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp', []);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.directive('todos', function(){
	  return {
	    templateUrl: 'templates/todos.html',
	    controller: 'mainCtrl',
	    replace: true
	  }
	});


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.service('dataService', function($http){

		this.helloConsole = function(){
			console.log("service working !");
		};

		this.getTodos = function(callback){
			$http.get('api/todos')
			.then(callback);
		};

		this.deleteTodo = function(todo){
			console.log('delete - ' + todo.name);
		};

		this.saveTodos = function(todos){
			console.log('saved - ' + todos.length);
		}
	});


/***/ }
]);