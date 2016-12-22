(function () {

angular.module('SimpleFormsApp',[]);

angular.module('SimpleFormsApp')
.controller('RegistrationController', RegistrationController);

function RegistrationController() {
  var reg = this;
  reg.ss = "bhgbdjf";

  reg.submit = function () {
    reg.completed = true;
  };
}

})();
