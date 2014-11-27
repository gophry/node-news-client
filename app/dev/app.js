(function(){
  //app is the global variable for the entire application.
  var app = angular.module('news', ['ui.router','brand']);

  //defines global header template for our application
  app.directive('newsHeader',function(){
    return{
      restrict:'E',
      templateUrl:'templates/header.html'
    }

  });
  //define body skeleton for our application
  app.directive('newsSkeleton',function(){
    return{
      restrict:'E',
      templateUrl:'templates/skeleton.html'
    }

  });
  app.directive('newsSidebar',function(){
    return{
      restrict:'E',
      templateUrl:'templates/sidebar.html'
    }

  });
  app.directive('newsContent',function(){
    return{
      restrict:'E',
      templateUrl:'templates/content.html'
    }

  });
  //define a controller for navigation contents.
  app.controller('NavController',['$http', function($http){
    var globals = this;
    globals.navigation = [ ];//initialize before page load;

    $http.get('common/globals.json').success(function(data){
      globals.navigation = data;//assign fetched data
    });

  }]);

  //ui-router and state configuration.
  app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('news',{
      url:'',
      abstract:true
    });
    $urlRouterProvider.otherwise('/');
  });

})();
