(function () { 

	angular.module('LunchCheck',[ ])
	.controller('LunchCheckController',LunchCheckController);
	
	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope)
	 {

	$scope.string = "";
	$scope.print = "";
	$scope.n = 0;
	$scope.seperator = function (){
		var comma = ',';
		if ($scope.string == "") {
			$scope.n = 0;
		}
		else
			{
				var array = $scope.string.split(comma);
				$scope.n = array.length;

			};

		
		if ($scope.n == 0)
		{
			$scope.print = "Please enter data first.";
		}
		else if ($scope.n < 3) {
			$scope.print = "Enjoy!";
		}
		else
			$scope.print = "Too much !!";

		


	};
	

	};

})();
