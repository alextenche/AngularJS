angular.module('todoListApp')
.directive('hello', function(){
	return {
		template: "Hello to my little friend !",
		restrict: "E"
	};
});
