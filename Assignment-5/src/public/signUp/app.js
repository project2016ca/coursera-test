(function () {


angular.module('public')
.controller('RegistrationController', RegistrationController);

function RegistrationController() {
var reg = this;


  reg.ss = "sdff";
  reg.submit = function () {
    reg.completed = true;
    
  };
}

})();
