(function(){
  //app is the global variable for the entire application.
  var app = angular.module('news', ['ui.router']);

  //define a controller for navigation contents.
  app.controller('HomeController',['$http', function($http){
    var globals = this;
    globals.navigation = [ ];//initialize before page load;

    $http.get('common/globals.json').success(function(data){
      globals.navigation = data;//assign fetched data
    });

  }]);

  //ui-router and state configuration.
  app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('home',{
      url:'/',
      views: {
        header: {
          templateUrl: "templates/header.html",
          controller: "HomeController as navCtrl",
          controllerAs: "navCtrl"
        },
        sidebar: {
          templateUrl: "templates/sidebar.html",
          controller: "HomeController as navCtrl",
          controllerAs: "navCtrl"
        },
        content: {
          templateUrl: "templates/content.html"
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  });

})();
