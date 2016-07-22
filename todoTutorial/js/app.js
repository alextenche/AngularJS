angular.module('todoListApp', [])
.controller('mainCtrl', function($scope, dataService){

	$scope.helloConsole = dataService.helloConsole;
	$scope.learn = function(){
		console.log('input changed');
	};

	$scope.todos = [
		{"name": "angularJS"},
		{"name": "MEAN"},
		{"name": "JavaScript Testing"},
		{"name": "JavaScript track"}
	];
})
.service('dataService', function(){
	this.helloConsole = function(){
		console.log("service working !");
	};
});
