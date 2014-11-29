(function(){
  //app is the global variable for the entire application.
  var app = angular.module('news', ['ui.router']);

  //application level controller for initializing the application.
  app.controller('AppController',['$state','$log', function($state,$log){
    $log.info('Initializing Application...');//logging initialization.
    $state.go('home');//initialize the application and load the 'home' abstract state.
  }]);

  //temporary controller for pulling json data.
  app.controller('NavController',['$http', function($http){
    var globals = this;
    globals.navigation = [];

    $http.get('common/globals.json').success(function(data){
      globals.navigation = data;//assign fetched data
    });
  }]);

  //application routes and states definition
  app.config(function($stateProvider,$urlRouterProvider){


    //'home' abstract state for application layout.
    $stateProvider.state('home',{
        abstract: true,
        controller: 'NavController'
    });
    //'oute state for the brand module
    $stateProvider.state('brand',{
      url:'/brand',
      templateUrl:'brand/brand.html'
      //controller:'BrandReadController as brandReadCtrl'
    });

    //$urlRouterProvider.otherwise('/');
  });


})();
