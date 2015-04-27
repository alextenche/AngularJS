app.directive('installApp', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/installApp.html',
    link: function(scope, element, attrs){
    	scope.buttonText = "Install",
    	scope.installed = false,
    	
    	scope.download = function(){
    		element.toggleClass('btn-active');
    		if(scope.installed){
    			scope.buttonText = "Install";
    			scope.installed = false;
    		} else {
    			scope.buttonText = "Uninstall";
    			scope.installed = true;
    		}
    	};

        scope.insert = function(){
            console.log('insert node');
            scope.apps.push({ 
        icon: 'img/move.jpg',
        title: 'MOVE',
        developer: 'MOVE, Inc.',
        price: 0.99
    });
        }
    }
  }; 
});