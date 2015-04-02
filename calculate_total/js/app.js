var app = angular.module('myApp', []);
app.controller('cart', ['$scope', '$http', function ($scope, $http) {
    $http.get('data.json').success(function (data) {
        $scope.listProducts = data;
        $scope.summary = {
            price: 0
        };
        $scope.gainSummary = function (obj) {

            var k = $scope.summary;

            if (typeof obj === 'object') {

                k.price += parseInt(obj.price, 10);
                
            } else {

                return k;
            }


        };
    });
}]);