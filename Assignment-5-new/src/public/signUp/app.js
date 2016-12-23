(function () {

'use strict';

angular.module('SimpleFormsApp',[])

.controller("RegistrationController", RegistrationController);

RegistrationController.$inject = ['UserService'];

function RegistrationController(UserService) {

var reg = this;

reg.submit = submit;

function submit() {

UserService.Create(reg.user)

.then(function (response) {

if (response.success) {

Console.log("Registration Successful!");

} else {

Console.log("Registration Error!");

}

});

}

}

})();

