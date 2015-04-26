app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
  	{
  		name: 'Stake',
  		description: 'Stake with french fries and salad.',
  		price: 5.85
  	},
  	{
  		name: 'Spaghetti Bolognese',
  		description: 'Best pasta with an amazing sauce.',
  		price: 3.75
  	},
  	{
  		name: 'French Fries',
  		description: 'Roasted potatoes with a spicy sauce.',
  		price: 2.55
  	}
  ];
  
  $scope.extras = [
  	{
  		name: 'Stake',
  		description: 'Stake with french fries and salad.',
  		price: 5.85
  	},
  	{
  		name: 'Spaghetti Bolognese',
  		description: 'Best pasta with an amazing sauce.',
  		price: 3.75
  	},
  	{
  		name: 'French Fries',
  		description: 'Roasted potatoes with a spicy sauce.',
  		price: 2.55
  	}
  ];
  
  
}]);