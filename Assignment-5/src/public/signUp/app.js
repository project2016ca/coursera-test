(function () {

angular.module('SimpleFormsApp',[]);

angular.module('SimpleFormsApp')
.controller('RegistrationController', RegistrationController);

function RegistrationController() {
  

  $scope.ss = "sdff";
  $scope.submit = function () {
    $scope.completed = true;
  };
}

})();
