var date = new Date();
var currentYear = date.getFullYear();

var app = angular.module("myApp", []);
app.controller("myController", function myCtr($scope) {
    $scope.basicSalary = 0;
  
    $scope.data = { workers: [
        {
            firstName: "Maor",
            lastName: "Daga",
            birthDate: 1987,
            products: 5
        },
        {
            firstName: "Maor",
            lastName: "Daga",
            birthDate: 1997,
            products: 6
        },
        {
            firstName: "rrr",
            lastName: "ggg",
            birthDate: 1987,
            products: 7
        },
        {
            firstName: "efrat",
            lastName: "ttt",
            birthDate: 1987,
            products: 8
        },
        {
            firstName: "adi",
            lastName: "Daga",
            birthDate: 1990,
            products: 8
        }
        ]
    };
  
    $scope.$watch("data.workers", function() {
        $scope.data.workers.forEach(function(worker) {
            worker.age = currentYear - worker.birthDate;
        });
    }, false);
  
    $scope.$watch("[basicSalary,data.workers]", function() {
        var salary = 0;
        $scope.data.workers.forEach(function(worker) {
            worker.basicSalary = parseInt($scope.basicSalary) + 0.1 * worker.products;
            salary += worker.basicSalary;
        }); 
        $scope.sumSalary = salary;  
    }, true);
  
    $scope.alertHi = function() {
        alert("hi");
    }

    $scope.$watch("data.workers", function(){
        var sumProducts = 0;
        $scope.data.workers.forEach(function(worker){
            sumProducts += worker.products;
        });
        $scope.sumProducts = sumProducts;
    }, true);
  
  
});