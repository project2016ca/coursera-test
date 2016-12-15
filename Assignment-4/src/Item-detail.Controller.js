(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['$stateParams','items'];
function ItemDetailController($stateParams, items) {
  var itemDetail = this;
  var t = items.data;
  var item = t[$stateParams.itemId];
  itemDetail.item = item;
}

})();







