(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('NarrowItDownService',NarrowItDownService)
.directive('narrowedItem', NarrowedItem);

function NarrowedItem() {
   var ddo = {
      templateUrl: 'narrowedItem.html'
   };
   return ddo;
}

NarrowItDownController.$inject = ['NarrowItDownService'];
function NarrowItDownController(NarrowItDownService) {
   var menu = this;

   menu.searchText = "";

   menu.Remove = function (index) 
   {

       NarrowItDownService.Remove(index);
   };

   menu.NarrowDown = function () 
   {
      var promise = NarrowItDownService.getMenu();
      promise.then(function (response) {
      	 menu.p = NarrowItDownService.getMatchedMenuItems(menu.searchText,response);
      })
      .catch(function (error) 
      {
      	console.log("Something went wrong.");
      });

   };
   

}

NarrowItDownService.$inject = ['$http'];
function NarrowItDownService($http) {
	var service = this;
	var p = [];
	service.getMenu = function (searchText) {
		var response = $http({
			method: "GET" ,
			url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		});
		return response;
	};

   service.Remove = function (index) 
   {
      p.splice(index,1);
   };



	service.getMatchedMenuItems = function(searchTerm,response)
	{
		 p = [];
       if (searchTerm == "")
       { p = []; }
      else
      {
            for (var i=0 ; i< response.data.menu_items.length ; i++)
   		    {
   			   if (response.data.menu_items[i].description.search(searchTerm) != -1)
   			      {  p.push(response.data.menu_items[i]);  };
   		    };
      };

		return p;
	};
}

})();