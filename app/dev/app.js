(function(){

  var app = angular.module('news', ['ui.router','brand']);

  //define a controller for navigation contents.
  app.controller('NavController',['$http', function($http){
    var globals = this;
    globals.navigation = [ ];//initialize before page load;

    $http.get('common/globals.json').success(function(data){
      globals.navigation = data;//assign fetched data
    });

  }]);

  //understand and test ui-router config.
  app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('news',{
      url:'',
      abstract:true
    });
    $urlRouterProvider.otherwise('/');
  });

  //
})();
