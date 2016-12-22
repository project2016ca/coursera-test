(function () {

angular.module('SimpleFormsApp',[]);

angular.module('SimpleFormsApp')
.controller('RegistrationController', RegistrationController);


RegistrationController.$inject = ['saveInfoService'];
function RegistrationController(saveInfoService) {
  var reg = this;

  var reg.user = { 
  	         var username = "";
  	         var email = "";
  	         var phone = "";
  	      };

  reg.submit = function () {
    reg.completed = true;
     
    SaveMyInfo.username = reg.user;


  };
}



})();
