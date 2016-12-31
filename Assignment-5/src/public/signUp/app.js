(function () {


angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['saveInfoService'];
function RegistrationController(saveInfoService) {
var reg = this;


  reg.ss = "sdff";
  reg.submit = function () {
    reg.completed = true;
    saveInfoService.user = reg.user;
    
  };
}

})();





