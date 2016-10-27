(function () {
	'use strict';


	angular.module('MyFirstApp', [])

	.controller('MyFirstController',function ($scope) {
		$scope.name = "shweta";
		$scope.tv = 1;
		$scope.displayNumeric = function () {
			
			var totalNameValue = c($scope.name);
			$scope.tv = totalNameValue;
		};
function c(string){
	var n = 0;
	for (var i = 0; i < string.length; i++) {
      n += string.charCodeAt(i);
    }

	return n;
}

});
})();
