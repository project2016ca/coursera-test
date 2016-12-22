(function () {
'use strict';

angular.module('SimpleFormsApp')
.controller('MyInfoController', MyInfoController);


MyInfoController.$inject = ['saveInfoService'];
function MyInfoController(saveInfoService) {
  var MyInfo = this;
  
  // MyInfo.user = saveInfoService.user;
}

})();







