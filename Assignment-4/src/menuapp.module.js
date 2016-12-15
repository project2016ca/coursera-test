(function () {
'use strict';

angular.module('MenuApp', ['ui.router','data'])

.controller('MainController', MainController);

.controller('ItemDetailController', ItemDetailController);




MainController.$inject = ['MenuDataService', 'items'];
function MainController(MenuDataService, items) {
  var mainList = this;
  mainList.items = items.data;
}




ItemDetailController.$inject = ['MenuDataService', 'item'];
function ItemDetailController(MenuDataService, items) {
  var itemDetail = this;
  itemDetail.item = item.data;
}

})();

