(function () {


angular.module('public')
.controller('MyInfoController', MyInfoController);


MyInfoController.$inject = ['saveInfoService', menuCategories];
function MyInfoController(saveInfoService, menuCategories) {
  var MyInfo = this;

  MyInfo.user = saveInfoService.user;
  MyInfo.categories = menuCategories.data;
}

})();
