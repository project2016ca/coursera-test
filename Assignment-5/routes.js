(function() {
'use strict';

angular.module('signUp')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.signUp', {
      url: '/signUp',
      templateUrl: 'src/public/signUp/signUp.html'
    });
   
   
}
})();
