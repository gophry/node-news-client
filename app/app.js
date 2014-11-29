(function(){
  //app is the global variable for the entire application.
  var app = angular.module('news', ['ui.router']);

  //application level controller for initializing the application.
  app.controller('AppController',['$state','$log', function($state,$log){
    console.log('Init');
    $log.info('Initializing Application...');//logging initialization.
    $state.go('home');//initialize the application and load the 'home' abstract state.



  }]);
  //temporary controller for pulling json data.
  app.controller('NavController',['$http', function($http){
    var globals = this;
    globals.navigation = [];

    $http.get('common/globals.json').success(function(data){
      globals.navigation = data;//assign fetched data
      console.dir(data);
    });
  }]);

  //application routes and states definition
  app.config(function($stateProvider,$urlRouterProvider){
    //Define Top level helper layouts.

    //'home' abstract state
    $stateProvider.state('home',{
       url: '/',
        views: {
         'header': {
            templateUrl: 'templates/header.html'
          },
          'sidebar': {
            'templateUrl': 'templates/sidebar.html'
          }
        },
      controller: 'NavController'
    });
    //$urlRouterProvider.otherwise('/');
  });


})();
