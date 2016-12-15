(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    
    url: '/categories',
    templateUrl: 'templates/categories.template.html',
    controller: 'MainController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categories.items', {
    url: '/items/{itemId}',
    templateUrl: 'templates/item-detail.template.html',
    controller: "ItemDetailController as itemDetail",
    // resolve: {
    //   item: ['$stateParams', 'MenuDataService',
    //         function ($stateParams, MenuDataService) {
    //           return MenuDataService.getAllCategories()
    //             // .then(function (items) {
    //             //   // return items[$stateParams.itemId];
    //             //   return items[$stateParams.itemId];
    //             // });
    //         }]
    // }

  });

}

})();
