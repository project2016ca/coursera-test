
(function() {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('TobuyCtrl',TobuyCtrl)
.controller('AlreadyboughtCtrl',AlreadyboughtCtrl)
.service('shoppingService', shoppingService);


// To buy list Controller
TobuyCtrl.$inject = ['shoppingService'];
function TobuyCtrl(shoppingService) {
	var tobuylist = this;

	

	tobuylist.items = shoppingService.getTobuyItems();

	
	tobuylist.itemName = "";
	tobuylist.itemQuantity = "";

	tobuylist.addItem = function () {
	shoppingService.addItem(tobuylist.itemName , tobuylist.itemQuantity)
	};

	tobuylist.boughtItem = function (item,itemIndex) {
	shoppingService.boughtItem(item,itemIndex)

	};

}

// Bought items list Controller
AlreadyboughtCtrl.$inject = ['shoppingService'];
function AlreadyboughtCtrl (shoppingService) {
	var alreadyboughtlist = this;

	

	alreadyboughtlist.items = shoppingService.getAlreadyboughtItems();


}


//shoppinglist Service
function shoppingService() {
var service = this;
var Tobuyitems = [];
var Alreadybouhgtitems = [];

service.getTobuyItems = function () {
 return Tobuyitems;
};

service.getAlreadyboughtItems = function () {
 return Alreadybouhgtitems;
};

service.addItem = function (itemName , itemQuantity) {
	var item = {
	name : itemName ,
	quantity : itemQuantity
	};
	Tobuyitems.push(item);
};

service.boughtItem = function (item,itemIndex) {
 
 	
	Alreadybouhgtitems.push(item);	
 	 Tobuyitems.splice(itemIndex,1);

 	
 	
}; 

}







})();
