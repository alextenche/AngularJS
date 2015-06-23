
angularFormsApp.controller('efController',
    ["$scope", "$window", "$routeParams", "DataService",
    function efController($scope, $window, $routeParams, DataService) {

	    if($routeParams.id){
		    $scope.employee = DataService.getEmployee($routeParams.id);
	    } else {
		    $scope.employee = { id: 0 };
	    }

	    //$scope.master = {};

	    $scope.editableEmployee = angular.copy($scope.employee);

	    $scope.departments = [
		    "Engineering",
		    "Marketing",
		    "Finance",
		    "Administration"
	    ];

	    $scope.programmingLanguages = [
		    "C",
		    "C++",
		    "C#",
		    "JavaScript",
		    "Java",
		    "Pascal",
		    "Perl",
		    "PHP"
	    ];

	    $scope.shouldShowFullName = function (){
		    return true;
	    }

	    $scope.hoveringOver = function( value ){
		    $scope.overStar = value;
		    $scope.percent = 100 * (value / 10);
	    };


	    $scope.submitForm = function () {

		    $scope.$broadcast('show-errors-event');

		    if($scope.employeeForm.$invalid){
			    return;
		    }

		    if( $scope.editableEmployee.id == 0 ){
			    // insert new employee
		        DataService.insertEmployee($scope.editableEmployee).then(
                    function (results) {
                        // on success
                        $scope.employee = angular.copy($scope.editableEmployee);
                        $window.history.back();
                    },
                    function (results) {
                        // on error
                        alert(results);
                    });
		    } else {
			    // update the employee
			    DataService.updateEmployee( $scope.editableEmployee );
		    }
			
	    };

		
	    $scope.cancelForm = function () {
		    $window.history.back();
	    };

	    $scope.resetForm = function(){
		    $scope.$broadcast('hide-errors-event');
		    $scope.editableEmployee = angular.copy( $scope.master );
		    $scope.employee = angular.copy( $scope.master );
		
	    };

}]);