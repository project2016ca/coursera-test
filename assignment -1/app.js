(function () { 

	angular.module('seperateAndCount',[])
	.controller('Controller',function($scope) {

	$scope.string = "";
	$scope.print = "";
	$scope.seperator = function (){
		$scope.print = "clicked";

	};
	

	});

})();