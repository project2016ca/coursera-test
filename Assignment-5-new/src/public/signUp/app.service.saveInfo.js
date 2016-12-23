(function () {

'use strict';

angular

.module('SimpleFormsApp')

.factory('UserService', UserService);

UserService.$inject = ['$http'];

function UserService($http) {

var service = {};

service.Create = Create;

return service;

function Create(user) {

return $http.post('myInfo.html', user).then(handleSuccess, handleError('Error creating user'));

}

// private functions

function handleSuccess(res) {

return res.data;

}

function handleError(error) {

return function () {

return { success: false, message: error };

};

}

}

})();