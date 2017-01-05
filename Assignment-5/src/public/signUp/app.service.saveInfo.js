(function () {
'use strict';

angular.module('public')
.service('saveInfoService', saveInfoService);



function saveInfoService() {
  var service = this;

  var user = {
             firstname : "",
             lastname : "",
             email : "",
             phone : ""
        };
//function to retrive all the categories
service.getCategories = function () {
    var response = $http({
      method: "GET" ,
      url: ("https://shweta-a5.herokuapp.com/menu_items.json")

    });
    return response;

  };

}

})();
