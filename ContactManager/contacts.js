angular
	.module('contacts', [])
	.config(function($routeProvider){
		// configure the routes
		$routeProvider
			// edit contact
			.when('/contact/:index', {
				templateUrl: 'edit.html',
				controller: 'Edit'
			})
			.when('/add', {
				// add contact
				templateUrl: 'edit.html',
				controller: 'Add'
			})
			.when('/delete/:index', {
				// delete contact
				templateUrl: 'edit.html',
				controller: 'Delete'
			})
			.when('/', {
				// list all contacts
				templateUrl: 'list.html'
			});
	})
	.controller('Contacts', function($scope){
		// contacts is the parent controller, so
		// $scope.contacts is available in all children
		$scope.contacts = [
			{ name: 'Tom', number: '123456'},
			{ name: 'Jeffrey', number: '234567'},
			{ name: 'Joe', number: '345678'}
		];
	})
	.controller('Edit', function($scope, $routeParams){
		// load in a contact from the route (/contact/:index)
		$scope.contact =$scope.contacts[$routeParams.index];
		$scope.index = $routeParams.index;
	})
	.controller('Add', function($scope, $routeParams){
		var length = $scope.contacts.push({
			name : 'New Contact',
			number: ''			
		});
		$scope.contact = $scope.contacts[length - 1];
		$scope.index = length - 1;
	})
	.controller('Delete', function($scope, $routeParams, $location){
		$scope.contacts.splice($routeParams.index, 1);
		$location.path('/').replace();
	});