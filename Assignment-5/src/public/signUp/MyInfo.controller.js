(function () {


angular.module('public')
.controller('MyInfoController', MyInfoController);


MyInfoController.$inject = ['saveInfoService'];
function MyInfoController(saveInfoService) {
  var MyInfo = this;

  MyInfo.user = saveInfoService.user;
  MyInfo.completed = saveInfoService.completed;


}

})();
