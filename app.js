(function () {
	'use strict';


	angular.module('MyFirstApp', [])

	.controller('MyFirstController',function ($scope) {
		$scope.name = "shweta";
		$scope.sayHello = function(){
			return "Hello coursera returning from function !";
			
		};

	});

})();